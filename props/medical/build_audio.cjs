const fs = require('node:fs');
const rate = 22050, seconds = 8, count = rate * seconds;
let seed = 1942280;
const rand = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296 * 2 - 1; };
const samples = new Float32Array(count); let low = 0;
for (let i = 0; i < count; i++) {
  const t = i / rate;
  low += .16 * (rand() - low);
  const blade = Math.pow(.5 + .5 * Math.sin(2 * Math.PI * 22 * t), 3);
  const engine = .14 * Math.sin(2 * Math.PI * 44 * t) + .08 * Math.sin(2 * Math.PI * 88 * t) + .03 * Math.sin(2 * Math.PI * 176 * t);
  samples[i] = low * (.55 + 1.5 * blade) + engine + .08 * Math.sin(2 * Math.PI * 22 * t);
}
// Seamless circular crossfade, keeping the overlapping regions out of the loop.
const overlap = Math.floor(rate * .2), length = count - overlap;
const output = new Float32Array(length);
output.set(samples.subarray(overlap));
for (let i = 0; i < overlap; i++) {
  const u = i / overlap, fade = u * u * (3 - 2 * u);
  output[length - overlap + i] = samples[count - overlap + i] * (1 - fade) + samples[i] * fade;
}
let peak = 0; for (const s of output) peak = Math.max(peak, Math.abs(s));
const wav = Buffer.alloc(44 + length * 2);
wav.write('RIFF'); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVEfmt ', 8);
wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22);
wav.writeUInt32LE(rate, 24); wav.writeUInt32LE(rate * 2, 28); wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34);
wav.write('data', 36); wav.writeUInt32LE(length * 2, 40);
for (let i = 0; i < length; i++) wav.writeInt16LE(Math.round(output[i] / peak * 24000), 44 + i * 2);
const path = require('node:path');
const out = path.basename(__dirname) === 'medical' ? __dirname : path.join(__dirname, 'props', 'medical');
fs.writeFileSync(path.join(out, 'rotor-wash.wav'), wav);
console.log({ duration: length / rate, bytes: wav.length, attribution: 'none; original synthesized audio' });
