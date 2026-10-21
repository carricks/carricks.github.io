import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import { transform } from 'esbuild';

const source = await fs.readFile('src/pages/[...path].astro', 'utf8');
const start = source.indexOf('  const sketchfabFrame =');
const end = source.indexOf('  document.querySelectorAll<HTMLButtonElement>(".interactive-model-controls button")', start);
const { code } = await transform(source.slice(start, end), { loader: 'ts' });
const button = () => ({ disabled: true, listeners: {}, attrs: {},
  removeAttribute() { this.disabled = false; },
  addEventListener(event, callback) { this.listeners[event] = callback; },
  setAttribute(name, value) { this.attrs[name] = value; },
});
for (const language of ['en', 'nl', 'de', 'fr']) {
for (const theme of ['light', 'dark']) {
  const elements = new Map();
  for (const key of ['sketchfab-viewer', 'model-reset', 'tumour-toggle', 'tags-toggle',
    'second-sketchfab-viewer', 'second-model-reset', 'second-tumour-toggle',
    'additional-sketchfab-viewer', 'additional-model-reset', 'additional-tumour-toggle']) {
    elements.set(`[data-${key}]`, button());
  }
  const uid = '3ca52ce84c94458ba0357fa7bfeb5cd8';
  elements.set('[data-additional-model]', { dataset: { additionalModel: uid }, querySelector: (key) => elements.get(key) });
  const apis = [];
  let themeChanged;
  const document = { documentElement: { lang: language, dataset: { theme } }, querySelector: (key) => elements.get(key) };
  const material = (name, stateSetID, color) => ({ name, stateSetID, channels: { AlbedoPBR: { color } } });
  class Sketchfab {
    init(id, options) {
      const api = { id, materials: [], backgrounds: [], camera: null,
        start() {}, setBackground(value) { this.backgrounds.push(value.color); },
        addEventListener(event, callback) { callback(); },
        getCameraLookAt(callback) { callback(null, { position: [1, 2, 3], target: [0, 0, 0] }); },
        getFov(callback) { callback(null, 45); }, setFov(value) { this.fov = value; },
        setCameraLookAt(position, target) { this.camera = { position, target }; },
        updateAnnotation() {}, removeAnnotation(index, callback) { callback(); },
        showAnnotation() {}, hideAnnotation() {}, showAnnotationTooltips() {}, hideAnnotationTooltips() {},
        getMaterialList(callback) { callback(null, id === uid
          ? [material('mtl1', 1, [.65, .23, .23]), material('mtl15210', 2, [.48, .41, .41]), material('mtl41186', 3, [.11, .87, .14])]
          : [material('brain', 1, [1, 0, 0]), material('tumor', 2, [0, 1, 0])]); },
        setMaterial(value) { this.materials.push(structuredClone(value)); },
      };
      apis.push(api); options.success(api);
    }
  }
  vm.runInNewContext(code, { document, window: { Sketchfab }, console,
    isDutchDocument: language === 'nl', isGermanDocument: language === 'de', isFrenchDocument: language === 'fr',
    MutationObserver: class { constructor(callback) { themeChanged = callback; } observe() {} },
  });
  assert.equal(apis.length, 3);
  const added = apis.find((api) => api.id === uid);
  const toggle = elements.get('[data-additional-tumour-toggle]');
  assert.equal(toggle.disabled, false);
  const otherCounts = apis.filter((api) => api !== added).map((api) => api.materials.length);
  toggle.listeners.click();
  assert.equal(added.materials.at(-1).name, 'mtl41186');
  assert.equal(added.materials.at(-1).channels.Opacity.factor, 0);
  assert.equal(toggle.attrs['aria-pressed'], 'false');
  if (language === 'fr') assert.equal(toggle.textContent, 'Afficher la tumeur');
  toggle.listeners.click();
  if (language === 'fr') assert.equal(toggle.textContent, 'Masquer la tumeur');
  const tags = elements.get('[data-tags-toggle]');
  tags.listeners.click();
  if (language === 'fr') assert.equal(tags.textContent, 'Afficher les repères');
  assert.equal(added.materials.at(-1).channels.Opacity, undefined);
  assert.deepEqual(apis.filter((api) => api !== added).map((api) => api.materials.length), otherCounts);
  elements.get('[data-additional-model-reset]').listeners.click();
  assert.equal(JSON.stringify(added.camera), JSON.stringify({ position: [1, 2, 3], target: [0, 0, 0] }));
  assert.equal(added.fov, 45);
  document.documentElement.dataset.theme = theme === 'light' ? 'dark' : 'light';
  themeChanged();
  for (const api of apis) assert.equal(api.backgrounds.at(-1)[0], theme === 'light' ? 0 : 241 / 255);
  console.log(`${language}/${theme}: independent viewers, tumour/tag labels, camera/FOV reset and live theme changes passed`);
}
}
