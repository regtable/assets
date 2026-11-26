import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createTuner } from './76-tv-channels/tuner.mjs';

const wait = async () => {};
let imageArgs, songArgs;
const channel = { id: 'crime', name: 'Crime', prompt: '' };
let tuner = createTuner({ wait, generateImage: async p => { imageArgs = p; return { imageUrl: 'image' }; }, generateSong: async p => { songArgs = p; return { audioUrl: 'audio' }; } });
await tuner.tune(channel, 'Use the following schema');
assert.equal(tuner.state.phase, 'complete'); assert.equal(songArgs.soundPrompt, ''); assert(!('lyrics' in songArgs)); assert.match(imageArgs.prompt, /Use the following schema/);
tuner.dispose();
for (const missing of ['image', 'audio']) {
  let ic = 0, ac = 0;
  const states = [];
  tuner = createTuner({ wait, onState: s => states.push(s), generateImage: async () => { ic++; if (missing === 'image' && ic < 3) throw Error('offline'); return { imageUrl: 'image' }; }, generateSong: async () => { ac++; if (missing === 'audio' && ac < 3) throw Error('offline'); return { audioUrl: 'audio' }; } });
  await tuner.tune(channel, 'Image prefix');
  assert.equal(tuner.state.phase, 'complete'); assert.equal(missing === 'image' ? ic : ac, 3); assert.equal(missing === 'image' ? ac : ic, 1);
  assert(states.some(s => s.phase === `retrying-${missing}`)); tuner.dispose();
}
let calls = 0;
tuner = createTuner({ wait, generateImage: async () => { calls++; throw Error('offline'); }, generateSong: async () => { calls++; throw Error('offline'); } });
await tuner.tune(channel, 'Image prefix'); assert.equal(calls, 2); assert.equal(tuner.state.phase, 'unavailable'); tuner.dispose();
calls = 0;
tuner = createTuner({ wait, generateImage: async () => ({ imageUrl: 'image' }), generateSong: async () => { calls++; return {}; } });
await tuner.tune(channel, 'Image prefix'); assert.equal(calls, 4); assert.equal(tuner.state.audioRetries, 3); assert.equal(tuner.state.phase, 'partial'); assert.equal(tuner.state.imageUrl, 'image'); tuner.dispose();
let resolveLate, updates = 0;
tuner = createTuner({ wait, onState: () => updates++, generateImage: () => new Promise(r => resolveLate = r), generateSong: async () => ({ audioUrl: 'audio' }) });
const pending = tuner.tune(channel, 'Image prefix'); await Promise.resolve(); tuner.dispose(); const before = updates; resolveLate({ imageUrl: 'late' }); await pending; assert.equal(updates, before);
console.log('PASS TV: empty prompts, parallel success, partial recovery, three missing-only retries, both-failed retune and stale completion disposal. No paid services called.');

const rooms = JSON.parse(await fs.readFile(new URL('./rooms.json', import.meta.url)));
assert.deepEqual(rooms.rooms.map(r => r.id), [6,7,8,14,15,16]);
assert.deepEqual(rooms.landings.map(r => r.id), [5,13]);
for (const room of rooms.rooms) {
  const bytes = await fs.readFile(new URL(room.glb, import.meta.url));
  assert.equal(bytes.readUInt32LE(0), 0x46546c67); assert.equal(bytes.readUInt32LE(4), 2);
  const jsonLen = bytes.readUInt32LE(12), gltf = JSON.parse(bytes.subarray(20, 20 + jsonLen).toString());
  const names = gltf.nodes.map(n => n.name || '');
  for (const name of ['BED | upholstered platform','DRESSER','WARDROBE','BEDSIDE L','BEDSIDE R','CHAIR','REMOTE','TV | SCREEN','ECLIPSE PLACEHOLDER']) assert(names.some(n => n.includes(name)), `Room ${room.id}: ${name}`);
  assert(!names.some(n => /CONTEXT|PREVIEW|LANDING/.test(n)));
  assert(gltf.images?.length > 0, 'Baked grain image must be embedded');
  assert(gltf.images.every(i => i.bufferView !== undefined), 'Texture embedded inside GLB');
  assert(gltf.nodes.some(n => n.extras?.hotelRemote)); assert(gltf.nodes.some(n => n.extras?.hotelTV));
  assert(room.colliders.length >= 6);
  for (const b of room.colliders) assert(b.min.every((v,i) => Number.isFinite(v) && v < b.max[i]));
  console.log(`PASS room ${room.id}: ${(bytes.length/1048576).toFixed(2)} MiB, ${gltf.meshes.length} solid meshes, embedded texture, independent remote/screen and explicit furniture colliders.`);
}
const audit=JSON.parse(await fs.readFile(new URL('./manifold-audit.json',import.meta.url))); assert.equal(audit.status,'PASS');assert.equal(audit.nonManifoldObjects.length,0);
console.log('PASS Blender manifold audit:',audit.meshCount,'closed meshes;',audit.faces,'faces.');
