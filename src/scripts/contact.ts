export function initContactForm(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>('[data-contact-status]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const label = button.querySelector<HTMLElement>('.neon-box-label')!;
  const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-contact-input]')];
  let sending = false;
  let revision = 0;

  function validate(field: HTMLInputElement | HTMLTextAreaElement) {
    const error = form.querySelector<HTMLElement>(`#${field.id}-error`)!;
    let message = '';
    if (!field.value.trim()) message = field.dataset.requiredMessage ?? '';
    else if (field.validity.typeMismatch) message = field.dataset.invalidMessage ?? '';
    else if (field.validity.tooLong) message = field.dataset.lengthMessage ?? '';
    error.textContent = message;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    field.closest('.contact-field')?.classList.toggle('is-invalid', Boolean(message));
    return !message;
  }

  function showStatus(message: string, state: string) {
    status.textContent = message;
    status.dataset.state = state;
  }

  fields.forEach((field) => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      revision++;
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
      if (!sending) showStatus('', 'idle');
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;
    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      showStatus(form.dataset.invalidMessage ?? '', 'error');
      invalid[0].focus();
      return;
    }
    const payload = new FormData(form);
    const key = String(payload.get('access_key') ?? '').trim();
    if (!key) {
      showStatus(form.dataset.unavailableMessage ?? '', 'error');
      return;
    }
    if (payload.get('botcheck')) return;
    payload.set('name', String(payload.get('name') ?? '').trim());
    payload.set('email', String(payload.get('email') ?? '').trim());
    payload.set('message', String(payload.get('message') ?? '').trim());
    payload.set('subject', `${form.dataset.subjectPrefix} ${payload.get('name')}`);
    const submittedRevision = revision;
    sending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = form.dataset.sendingMessage ?? '';
    showStatus(form.dataset.sendingMessage ?? '', 'sending');
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: payload, headers: { Accept: 'application/json' }, signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission rejected');
      // Do not discard edits made while the original message was being submitted.
      if (revision === submittedRevision) form.reset();
      showStatus(form.dataset.successMessage ?? '', 'success');
    } catch {
      showStatus(controller.signal.aborted ? form.dataset.timeoutMessage ?? '' : form.dataset.failureMessage ?? '', 'error');
    } finally {
      window.clearTimeout(timer);
      sending = false;
      button.disabled = false;
      form.setAttribute('aria-busy', 'false');
      label.textContent = form.dataset.submitMessage ?? '';
    }
  });
}

document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(initContactForm);
