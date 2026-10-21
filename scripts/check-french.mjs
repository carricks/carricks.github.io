import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { transform } from 'esbuild';

const dictionarySource = await fs.readFile('src/i18n/projects.fr.ts', 'utf8');
const { code } = await transform(dictionarySource, { loader: 'ts', format: 'esm' });
const { projectTextFr } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const projectSource = await fs.readFile('src/pages/[...path].astro', 'utf8');
const calls = [...projectSource.matchAll(/\btr\(("(?:[^"\\]|\\.)*")\)/g)].map((match) => JSON.parse(match[1]));
for (const key of calls) assert.ok(projectTextFr[key]?.trim(), `Missing French translation: ${key}`);

const routes = ['/', '/about/academic/', '/about/experience/', '/milestones/hardwarethon/',
  '/projects/brain-tumour-mri-classification/', '/projects/grid-contingency-analysis/',
  '/projects/renewable-plant-control/', '/projects/telecommunications-coverage-deployment/'];
const files = ['src/i18n/home.fr.ts', 'src/i18n/projects.fr.ts', 'src/i18n/pages.fr.ts'];
for (const file of files) {
  const source = await fs.readFile(file, 'utf8');
  assert.ok(!source.includes('\uFFFD'), `Invalid Unicode in ${file}`);
  assert.ok(!/[\p{L}]\?[\p{L}]/u.test(source), `Damaged accent in ${file}`);
}
for (const route of routes) {
  for (const language of ['en', 'nl', 'de', 'fr']) {
    const prefix = language === 'en' ? '' : `/${language}`;
    const html = await fs.readFile(`dist${prefix}${route}index.html`, 'utf8');
    assert.ok(html.includes(`<html lang="${language}"`));
    for (const target of ['en', 'nl', 'de', 'fr']) {
      const expected = `https://dc-x1.github.io${target === 'en' ? '' : `/${target}`}${route}`;
      assert.ok(html.includes(`hreflang="${target}" href="${expected}"`), `${language}${route}: alternate ${target}`);
    }
    assert.ok(html.includes(`data-code="FR" data-href="/fr${route}"`), `${language}${route}: FR switch`);
    if (language !== 'fr') continue;
    const content = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const editorialContent = content.replace(/(?:href|src|srcset|data-source)="[^"]*"/g, '');
    assert.ok(!/[\p{L}]\?[\p{L}]/u.test(editorialContent), `Damaged accent in /fr${route}`);
    assert.ok(!content.includes('data-href="/fr/fr/'));
    if (route === '/') {
      assert.ok(html.includes('Qui je suis.'));
      assert.ok(html.includes('Construisons des systèmes résilients.'));
      assert.ok(html.includes('href="/fr/about/academic/"'));
    }
    if (route.includes('brain-tumour')) {
      assert.equal((html.match(/<iframe\b[^>]*data-(?:second-|additional-)?sketchfab-viewer/g) ?? []).length, 3);
      assert.ok(html.includes('Masquer la tumeur'));
      assert.ok(html.includes('RAPPORT DE CLASSIFICATION D’IRM'));
      for (const probability of ['0,007176', '0,000283', '0,051178', '0,941363']) assert.ok(html.includes(probability));
    }
  }
}
console.log(`${Object.keys(projectTextFr).length} French project translations; 32 localized routes, alternate links, FR switches, Unicode and French report/control labels passed.`);
