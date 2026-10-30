// Packs everything under public/images/ into assets/images.json (base64).
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = join(root, 'public/images');
const out = {};
(function walk(d) {
  for (const f of readdirSync(d).sort()) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(webp|png|jpe?g|svg|avif)$/i.test(f)) out[relative(root, p).split('\\').join('/')] = readFileSync(p).toString('base64');
  }
})(dir);
mkdirSync(join(root, 'assets'), { recursive: true });
writeFileSync(join(root, 'assets/images.json'), JSON.stringify(out, null, 0) + '\n');
console.log(`[pack-images] packed ${Object.keys(out).length} images`);
