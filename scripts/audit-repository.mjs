import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const normalize = (value) => value.replaceAll('\\', '/');
async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [normalize(file)];
  }))).flat();
}
const built = await walk('dist');
const textFiles = built.filter((file) => /\.(html|css|js|svg)$/.test(file));
const texts = new Map(await Promise.all(textFiles.map(async (file) => [file, await fs.readFile(file, 'utf8')])));
const references = [...texts.values()].join('\n');
const assets = await walk('public');
const unusedAssets = assets.filter((file) => file !== 'public/favicon.ico' && !references.includes(file.slice('public'.length)));
const hashes = new Map();
for (const file of assets) {
  const hash = createHash('sha256').update(await fs.readFile(file)).digest('hex');
  hashes.set(hash, [...(hashes.get(hash) ?? []), file]);
}
const duplicates = [...hashes.values()].filter((group) => group.length > 1);
const source = await walk('src');
const sourceSet = new Set(source);
const edges = new Map();
for (const file of source) {
  const text = await fs.readFile(file, 'utf8');
  const targets = [];
  for (const match of text.matchAll(/(?:\bfrom\s*|\bimport\s*)["'](\.[^"']+)["']/g)) {
    const stem = normalize(path.join(path.dirname(file), match[1]));
    const target = [stem, ...['.ts', '.js', '.astro', '.css', '/index.ts'].map((suffix) => stem + suffix)]
      .find((candidate) => sourceSet.has(candidate));
    if (!target) throw new Error(`Unresolved import: ${file} -> ${match[1]}`);
    targets.push(target);
  }
  edges.set(file, targets);
}
const reached = new Set();
function visit(file) {
  if (reached.has(file)) return;
  reached.add(file);
  (edges.get(file) ?? []).forEach(visit);
}
source.filter((file) => file.startsWith('src/pages/')).forEach(visit);
const unusedModules = source.filter((file) => !reached.has(file));
const brokenLinks = [];
const builtSet = new Set(built);
for (const [file, text] of texts) {
  if (!file.endsWith('.html')) continue;
  for (const match of text.matchAll(/(?:href|src|srcset|data-src-dark|data-src-light|data-source)="(\/[^"<>]*)"/g)) {
    const url = match[1].split(/[?#\s]/)[0];
    if (url.startsWith('//')) continue;
    const local = 'dist' + decodeURIComponent(url);
    if (!builtSet.has(local) && !builtSet.has(local.replace(/\/$/, '') + '/index.html')) {
      brokenLinks.push({ file, url });
    }
  }
}
const report = {
  routes: built.filter((file) => file.endsWith('.html')).length,
  publicAssets: assets.length,
  sourceFiles: source.length,
  unusedAssets, unusedModules, duplicates, brokenLinks,
};
const origin = process.argv[2];
if (origin) {
  const routes = built.filter((file) => file.endsWith('.html'))
    .map((file) => file.slice('dist'.length).replace(/index\.html$/, ''));
  const urls = [...routes, ...assets.map((file) => file.slice('public'.length))];
  const failures = [];
  // Small batches exercise routes and assets without flooding the dev server.
  for (let index = 0; index < urls.length; index += 6) {
    await Promise.all(urls.slice(index, index + 6).map(async (pathname) => {
      const response = await fetch(new URL(pathname, origin), { signal: AbortSignal.timeout(20000) });
      if (response.status !== 200) failures.push({ pathname, status: response.status });
      await response.arrayBuffer();
    }));
  }
  report.http = { checked: urls.length, failures };
  if (failures.length) process.exitCode = 1;
}
await fs.mkdir('tmp', { recursive: true });
await fs.writeFile('tmp/repository-audit.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
if ([unusedAssets, unusedModules, duplicates, brokenLinks].some((items) => items.length)) process.exitCode = 1;
