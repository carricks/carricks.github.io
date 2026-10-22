import fs from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { transform } from 'esbuild';

const { code } = await transform(await fs.readFile('src/scripts/contact.ts', 'utf8'), { loader: 'ts', format: 'cjs' });
function fixture({ key = 'test-key', outcome = 'success' } = {}) {
  const calls = [];
  const errors = {};
  const fields = ['name', 'email', 'message'].map((name) => ({
    id: `contact-${name}`, name, value: name === 'email' ? 'visitor@example.com' : 'Test message',
    validity: { typeMismatch: false, tooLong: false }, attributes: {}, handlers: {},
    dataset: { requiredMessage: `${name} required`, invalidMessage: 'Invalid email', lengthMessage: 'Too long' },
    addEventListener(type, handler) { this.handlers[type] = handler; },
    setAttribute(name, value) { this.attributes[name] = value; },
    getAttribute(name) { return this.attributes[name]; },
    closest() { return { classList: { toggle() {} } }; },
    focus() { this.focused = true; },
  }));
  const status = { dataset: {} };
  const label = {};
  const button = { disabled: false, querySelector: () => label };
  const form = {
    dataset: { invalidMessage: 'Invalid', unavailableMessage: 'Unavailable', subjectPrefix: 'Portfolio enquiry from', sendingMessage: 'Sending', successMessage: 'Success', failureMessage: 'Failure', timeoutMessage: 'Timeout', submitMessage: 'Send' },
    handlers: {}, resetCount: 0,
    querySelector(selector) {
      if (selector === '[data-contact-status]') return status;
      if (selector === 'button[type="submit"]') return button;
      return errors[selector] ??= {};
    },
    querySelectorAll: () => fields,
    addEventListener(type, handler) { this.handlers[type] = handler; },
    setAttribute() {},
    reset() { this.resetCount++; fields.forEach((field) => field.value = ''); },
  };
  let resolveFetch;
  let timeout;
  const context = {
    module: { exports: {} }, document: { querySelectorAll: () => [] }, AbortController,
    window: { setTimeout(fn) { timeout = fn; return 1; }, clearTimeout() {} },
    FormData: class extends Map { constructor() { super([['access_key', key], ...fields.map((field) => [field.name, field.value])]); } },
    fetch(url, options) {
      calls.push({ url, options });
      if (outcome === 'network') return Promise.reject(new Error('Offline'));
      if (outcome === 'pending') return new Promise((resolve, reject) => {
        resolveFetch = resolve;
        options.signal.addEventListener('abort', () => reject(new Error('Abort')));
      });
      return Promise.resolve({ ok: outcome !== 'http', json: async () => ({ success: outcome === 'success' }) });
    },
  };
  vm.runInNewContext(code, context);
  context.module.exports.initContactForm(form);
  return { form, fields, status, button, errors, calls, submit: () => form.handlers.submit({ preventDefault() {} }),
    resolve: () => resolveFetch({ ok: true, json: async () => ({ success: true }) }), timeout: () => timeout() };
}

const invalid = fixture();
invalid.fields[0].value = '  ';
invalid.fields[1].validity.typeMismatch = true;
await invalid.submit();
assert.equal(invalid.calls.length, 0);
assert.equal(invalid.errors['#contact-name-error'].textContent, 'name required');
assert.equal(invalid.errors['#contact-email-error'].textContent, 'Invalid email');
assert.equal(invalid.fields[0].attributes['aria-invalid'], 'true');
assert.ok(invalid.fields[0].focused);
invalid.fields[0].value = 'Visitor'; invalid.fields[0].handlers.input();
assert.equal(invalid.errors['#contact-name-error'].textContent, '');
assert.equal(invalid.errors['#contact-email-error'].textContent, 'Invalid email');

const missing = fixture({ key: '' }); await missing.submit();
assert.equal(missing.calls.length, 0); assert.equal(missing.status.textContent, 'Unavailable');
for (const outcome of ['network', 'http', 'rejected']) {
  const failed = fixture({ outcome }); await failed.submit();
  assert.equal(failed.status.textContent, 'Failure'); assert.equal(failed.form.resetCount, 0);
  assert.equal(failed.button.disabled, false);
}
const success = fixture(); await success.submit();
assert.equal(success.form.resetCount, 1); assert.equal(success.status.textContent, 'Success');
assert.equal(success.calls[0].url, 'https://api.web3forms.com/submit');
assert.equal(success.calls[0].options.body.get('email'), 'visitor@example.com');
const pending = fixture({ outcome: 'pending' }); const request = pending.submit();
assert.ok(pending.button.disabled); await pending.submit(); assert.equal(pending.calls.length, 1);
pending.fields[2].value = 'New draft'; pending.fields[2].handlers.input(); pending.resolve(); await request;
assert.equal(pending.fields[2].value, 'New draft'); assert.equal(pending.form.resetCount, 0);
const timed = fixture({ outcome: 'pending' }); const timedRequest = timed.submit(); timed.timeout(); await timedRequest;
assert.equal(timed.status.textContent, 'Timeout'); assert.equal(timed.form.resetCount, 0);
for (const prefix of ['', 'nl/', 'de/', 'fr/']) {
  const html = await fs.readFile(`dist/${prefix}index.html`, 'utf8');
  const formHtml = html.match(/<form\b[\s\S]*?<\/form>/)?.[0] ?? '';
  assert.match(formHtml, /name="access_key"[^>]*value="[^"]+"/, 'Published form must have a configured key');
  assert.ok(!/linkedin/i.test(formHtml), 'Contact form must not offer LinkedIn messaging');
  for (const field of ['name', 'email', 'message']) {
    assert.match(html, new RegExp(`for="contact-${field}"`));
    assert.match(html, new RegExp(`aria-describedby="contact-${field}-error"`));
  }
  assert.ok(!html.includes('data-opening-message'));
  assert.match(html, /data-success-message="[^"]+"/);
}
console.log('Contact: persistent field errors, corrections, missing key, API/network failure, success, timeout, duplicate prevention, draft preservation and four localized routes passed. No email was sent.');
