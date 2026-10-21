import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { transform } from 'esbuild';

const locales = ['nl', 'de', 'fr'];
const page = await fs.readFile('src/pages/[...path].astro', 'utf8');
const keys = [...new Set([...page.matchAll(/\btr\(("(?:[^"\\]|\\.)*")\)/g)].map((match) => JSON.parse(match[1])))];
for (const locale of locales) {
  const file = `src/i18n/projects.${locale}.ts`;
  const source = await fs.readFile(file, 'utf8');
  const result = await transform(source, { loader: 'ts', format: 'esm', logLevel: 'silent' });
  assert.equal(result.warnings.length, 0, `${file}: duplicate or invalid entries`);
  const module = await import(`data:text/javascript;base64,${Buffer.from(result.code).toString('base64')}`);
  const dictionary = Object.values(module)[0];
  const missing = keys.filter((key) => !dictionary[key]?.trim());
  assert.deepEqual(missing, [], `${locale}: missing translations`);
  for (const key of keys.filter((key) => key.length > 100)) {
    assert.notEqual(dictionary[key], key, `${locale}: English paragraph fallback`);
  }
  assert.ok(!source.includes('\uFFFD'), `${locale}: invalid Unicode`);
  console.log(`${locale}: ${keys.length} project strings covered; no English paragraph fallback or duplicate entries.`);
}

const qualifications = await fs.readFile('src/components/pages/AcademicPage.astro', 'utf8');
assert.ok(!/postdoctorale/i.test(qualifications), 'Master must not be described as postdoctoral study');
for (const locale of ['en', 'nl', 'de', 'fr']) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const html = await fs.readFile(`dist${prefix}/projects/brain-tumour-mri-classification/index.html`, 'utf8');
  const report = html.match(/<pre\b[^>]*>([\s\S]*?)<\/pre>/)?.[1];
  assert.ok(report, `${locale}: missing prediction report`);
  assert.ok(!/CONFIDENCE|ZEKERHEID|SICHERHEIT/.test(report), `${locale}: do not present a model probability as clinical certainty`);
  for (const digits of ['007176', '000283', '051178', '941363']) {
    assert.ok(report.includes(`0.${digits}`) || report.includes(`0,${digits}`), `${locale}: changed probability ${digits}`);
  }
  if (locale === 'nl') assert.ok(report.includes('HYPOFYSETUMOR'));
  if (locale === 'de') assert.ok(report.includes('HYPOPHYSENTUMOR'));
  const solar = await fs.readFile(`dist${prefix}/projects/renewable-plant-control/index.html`, 'utf8');
  for (const fact of [/380\s*MW/, /930[,. ]?000/, /226/, /32[,. ]?043/, /2025/]) {
    assert.ok(fact.test(solar), `${locale}: missing published plant/context figure ${fact}`);
  }
  const milestone = await fs.readFile(`dist${prefix}/milestones/hardwarethon/index.html`, 'utf8');
  assert.ok(milestone.includes('48'), `${locale}: challenge duration changed`);
}
console.log('All four languages preserve the model probabilities, plant figures and challenge duration; the master qualification remains distinct from doctoral study.');
