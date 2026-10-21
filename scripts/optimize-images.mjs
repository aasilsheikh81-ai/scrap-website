/**
 * One-off image pipeline. Reads the original photos in `images-src/` and writes
 * SEO-named, responsive variants to `public/images/`:
 *
 *   <name>-640.webp, <name>-1280.webp, <name>-1920.webp  → srcset for <img>
 *   <name>.jpg (1600px, q80)                              → social/schema fallback
 *   og/autoscrape-pro-scrap-car-buyer.jpg (1200×630)      → default og:image
 *
 * Run with `npm run images` after adding or replacing a source photo, then
 * register the new name in src/config/images.ts.
 */
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'images-src';
const OUT = 'public/images';
const WIDTHS = [640, 1280, 1920];

await mkdir(path.join(OUT, 'og'), { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = file.replace(/\.(jpe?g|png)$/i, '');
  const input = path.join(SRC, file);
  const { width } = await sharp(input).metadata();

  for (const w of WIDTHS) {
    const targetWidth = Math.min(w, width);
    await sharp(input).resize({ width: targetWidth }).webp({ quality: 80 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  await sharp(input)
    .resize({ width: Math.min(1600, width) })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, `${name}.jpg`));
  console.log('✓', name);
}

await sharp(path.join(SRC, 'scrap-car-yard-end-of-life-sedan.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(OUT, 'og', 'autoscrape-pro-scrap-car-buyer.jpg'));
console.log('✓ og image');
