// Generates PWA PNG icons (192 and 512) with a solid brand background and a
// centered gold rounded square. Pure Node (no dependencies) PNG encoder.
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.resolve('public');

// CRC32 (PNG chunk checksum)
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

// Draw a simple icon: brand background + centered gold rounded square.
function makeIcon(size) {
  const bg = [122, 92, 46]; // teak #7a5c2e
  const fg = [212, 175, 95]; // gold #d4af5f
  const buf = Buffer.alloc(size * size * 3);
  const inner = Math.round(size * 0.26); // gold square half-extent-ish, simple centered block
  const start = Math.round((size - inner * 2) / 2);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 3;
      const inFg = x >= start && x < start + inner * 2 && y >= start && y < start + inner * 2;
      const c = inFg ? fg : bg;
      buf[i] = c[0]; buf[i + 1] = c[1]; buf[i + 2] = c[2];
    }
  }
  // Build raw RGB scanlines with filter byte 0 per row
  const raw = Buffer.alloc(size * (size * 3 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 3 + 1)] = 0;
    buf.copy(raw, y * (size * 3 + 1) + 1, y * size * 3, (y + 1) * size * 3);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'icon-192.png'), makeIcon(192));
fs.writeFileSync(path.join(OUT_DIR, 'icon-512.png'), makeIcon(512));
console.log('Generated icon-192.png and icon-512.png');
