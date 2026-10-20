import fs from 'node:fs/promises';
import sharp from 'sharp';

// Self-contained SVGs avoid CSS filter/blending differences on mobile browsers.
const root = 'public/images/library/projects/grid-stability';
const channel = (background, contrast) => Array.from({ length: 17 }, (_, i) =>
  background / 255 - contrast * Math.max(0, (i - 2) / 14)).join(' ');
for (const name of ['dutch-grid-context', 'system-architecture']) {
  const input = await fs.readFile(`${root}/${name}.png`);
  const { width, height } = await sharp(input).metadata();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><filter id="light" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer>
    <feFuncR type="table" tableValues="${channel(241, 165 / 255)}"/>
    <feFuncG type="table" tableValues="${channel(238, 209 / 255)}"/>
    <feFuncB type="table" tableValues="${channel(245, 96 / 255)}"/>
  </feComponentTransfer></filter></defs>
  <rect width="100%" height="100%" fill="#f1eef5"/>
  <image width="${width}" height="${height}" filter="url(#light)" xlink:href="data:image/png;base64,${input.toString('base64')}"/>
  ${name === 'dutch-grid-context' ? `<g aria-label="Flag of the Netherlands">
    <rect x="584" y="797" width="46" height="11" fill="#ae1c28"/>
    <rect x="584" y="808" width="46" height="11" fill="#fff"/>
    <rect x="584" y="819" width="46" height="11" fill="#21468b"/>
  </g>` : ''}
</svg>`;
  await fs.writeFile(`${root}/${name}-light.svg`, svg.replace(/^[ \t]+$/gm, ''));
  const corner = await sharp(Buffer.from(svg)).extract({ left: 0, top: 0, width: 1, height: 1 }).raw().toBuffer();
  console.log(name, `${width}x${height}`, 'light corner:', [...corner]);
}
