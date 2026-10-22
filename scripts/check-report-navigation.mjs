import fs from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = await fs.readFile('src/pages/[...path].astro', 'utf8');
const handler = source.slice(source.indexOf('  reportTrigger?.addEventListener("click"'), source.indexOf('  reportClose?.addEventListener'));
function check({ mobile = false, modified = false, missingViewer = false } = {}) {
  let prevented = false;
  let opened = false;
  let callback;
  const frame = { dataset: { source: '/documents/master-thesis-brain-tumour-mri.pdf#toolbar=0' } };
  const context = {
    reportTrigger: { href: '/documents/master-thesis-brain-tumour-mri.pdf', addEventListener(_, listener) { callback = listener; } },
    reportViewer: missingViewer ? null : { showModal() { opened = true; } }, reportFrame: frame,
    window: { matchMedia(query) { assert.ok(query.includes('any-pointer: coarse')); return { matches: mobile }; } },
  };
  vm.runInNewContext(handler, context);
  callback({ button: 0, ctrlKey: modified, preventDefault() { prevented = true; } });
  assert.equal(prevented, !mobile && !modified && !missingViewer);
  assert.equal(opened, !mobile && !modified && !missingViewer);
  assert.equal(Boolean(frame.src), opened);
}
check(); check({ mobile: true }); check({ modified: true }); check({ missingViewer: true });
for (const prefix of ['', 'nl/', 'de/', 'fr/']) {
  const html = await fs.readFile(`dist/${prefix}projects/brain-tumour-mri-classification/index.html`, 'utf8');
  const trigger = html.match(/<a\b[^>]*data-report-open[^>]*>/)?.[0] ?? '';
  assert.match(trigger, /href="\/documents\/master-thesis-brain-tumour-mri.pdf"/);
  assert.match(trigger, /target="_blank"/);
  assert.match(trigger, /rel="noopener noreferrer"/);
}
console.log('Report navigation: mobile/touch uses the full PDF, desktop retains its modal, modified clicks and missing-viewer fallback remain native; all four locales passed.');
