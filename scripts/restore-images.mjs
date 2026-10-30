// Writes the site's images into public/ before the build.
// Images are stored as base64 in assets/images.json so they can be committed
// through text-only tooling. To add or replace an image, put the file under
// public/images/ and run `node scripts/pack-images.mjs`.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const bundlePath = new URL('../assets/images.json', import.meta.url);
if (!existsSync(bundlePath)) {
  console.log('[restore-images] no assets/images.json, skipping');
  process.exit(0);
}
const bundle = JSON.parse(readFileSync(bundlePath, 'utf8'));
let n = 0;
for (const [rel, b64] of Object.entries(bundle)) {
  if (!rel.startsWith('public/images/') || rel.includes('..')) throw new Error(`bad path ${rel}`);
  const out = new URL(`../${rel}`, import.meta.url);
  mkdirSync(dirname(out.pathname), { recursive: true });
  writeFileSync(out, Buffer.from(b64, 'base64'));
  n++;
}
console.log(`[restore-images] wrote ${n} images`);
