import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const source = await fs.readFile(new URL('./hotel76-upstairs.mjs', import.meta.url), 'utf8');
let disposedRooms = 0, creates = 0;
class Group { constructor() { this.children = []; } add(o) { o.parent = this; this.children.push(o); } removeFromParent() { if (this.parent) this.parent.children = this.parent.children.filter(o => o !== this); } clear() { this.children = []; } }
globalThis.__hotelTest = { Group, television: () => ({ isOpen: false, setMuted() {}, close() {}, dispose() {} }), createRoom: options => { creates++; const group = new Group(); return { group, ready: Promise.resolve(), config: options.config, dispose() { disposedRooms++; group.removeFromParent(); }, handleClick() { return false; }, checkCollision() { return false; } }; } };
const fixture = source.replace(/^import \* as THREE.*$/m, 'const THREE = {Group: globalThis.__hotelTest.Group};').replace(/^import \{ createTelevision \}.*$/m, 'const createTelevision = globalThis.__hotelTest.television;').replace('await import(new URL(config.module, import.meta.url).href)', 'await Promise.resolve({createRoom: globalThis.__hotelTest.createRoom})');
const originalFetch = globalThis.fetch;
const config = JSON.parse(await fs.readFile(new URL('./rooms.json', import.meta.url)));
globalThis.fetch = async () => ({ ok: true, json: async () => config });
try {
  const { createHotel76Upstairs } = await import('data:text/javascript;base64,' + Buffer.from(fixture).toString('base64'));
  const hotel = createHotel76Upstairs(); await hotel.ready;
  hotel.update(.016, { x: -78, y: 2, z: -75 }); await new Promise(r => setTimeout(r,0)); assert.equal(creates,0,'downstairs must not load rooms');
  hotel.update(.016, { x: -78, y: 8, z: -75 }); await new Promise(r => setTimeout(r,0)); assert.equal(creates,2); assert.equal(hotel.group.children.length,2);
  hotel.update(.016, { x: -78, y: 8, z: -60 }); assert.equal(hotel.group.children.length,1,'hysteresis keeps only nearer north room');
  hotel.update(.016, { x: -78, y: 2, z: -75 }); assert.equal(hotel.group.children.length,0); assert.equal(disposedRooms,2,'deload disposes resources, not just visibility');
  hotel.update(.016, { x: -78, y: 8, z: -75 }); await new Promise(r => setTimeout(r,0)); assert.equal(creates,4,'returning upstairs recreates rooms');
  hotel.dispose(); assert.equal(disposedRooms,4); assert.equal(hotel.group.children.length,0);
  console.log('PASS lazy room lifecycle: no downstairs load, nearby-only load, hysteresis, actual disposal, re-entry load and final cleanup.');
} finally { globalThis.fetch = originalFetch; delete globalThis.__hotelTest; }
