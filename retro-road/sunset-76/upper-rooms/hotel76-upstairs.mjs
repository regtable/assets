import * as THREE from 'https://esm.sh/three@0.180.0';
import { createTelevision } from './76-tv-channels/television.mjs';

export function createHotel76Upstairs(options = {}) {
  const group = new THREE.Group(); group.name = 'Sunset 76 | independent upstairs room furnishings';
  const rooms = new Map(), pending = new Map(), retryAfter = new Map(); let disposed = false, configs = [], lastPlayer = null;
  const abort = new AbortController();
  const television = createTelevision({
    services: options.services || {},
    onOpenChange(open) { options.onModalChange?.(open); },
    onImage(url) { rooms.get(television.roomId)?.setScreen(url); }
  });
  const ready = (async () => {
    const response = await fetch(`https://raw.githubusercontent.com/regtable/assets/main/retro-road/sunset-76/upper-rooms/rooms.json?t=${Date.now()}`, { signal: abort.signal, cache: 'no-store' });
    if (!response.ok) throw new Error(`Hotel room manifest HTTP ${response.status}`);
    const data = await response.json();
    const ids = options.roomIds || data.rooms.map(r => r.id);
    configs = data.rooms.filter(r => ids.includes(r.id));
  })();
  const distance = (config, player) => Math.hypot(player.x - config.origin[0], player.z - config.origin[2]);
  function unload(id) {
    const job = pending.get(id); if (job) { job.cancelled = true; job.room?.dispose(); pending.delete(id); }
    const room = rooms.get(id); if (room) { room.dispose(); rooms.delete(id); }
    if (television.roomId === id) television.close();
  }
  function load(config) {
    const job = { cancelled: false, room: null }; pending.set(config.id, job);
    (async () => {
      try {
        const module = await import(new URL(config.module, import.meta.url).href);
        if (disposed || job.cancelled) return;
        const room = module.createRoom({ config, onRemote: () => television.open(config.id) }); job.room = room;
        await room.ready;
        if (disposed || job.cancelled || !lastPlayer || distance(config, lastPlayer) > 18 || lastPlayer.y < 5.3 || lastPlayer.y > 12.7) { room.dispose(); return; }
        rooms.set(config.id, room); group.add(room.group);
      } catch (error) { job.room?.dispose(); retryAfter.set(config.id, Date.now() + 30000); if (!disposed && !job.cancelled) console.warn(`Room ${config.id} unavailable; retry in 30 seconds`, error); }
      finally { if (pending.get(config.id) === job) pending.delete(config.id); }
    })();
  }
  return {
    group, ready,
    get modalOpen() { return television.isOpen; },
    handleClick(object) { if (disposed) return false; for (const room of rooms.values()) if (room.handleClick(object)) return true; return false; },
    checkCollision(candidate, current, radius) { if (disposed) return false; for (const room of rooms.values()) if (room.checkCollision(candidate, current, radius)) return true; return false; },
    update(delta, player, isMuted = false) {
      if (disposed) return;
      lastPlayer = { x: player.x, y: player.y, z: player.z }; television.setMuted(isMuted);
      if (television.isOpen && !rooms.get(television.roomId)?.contains(player)) television.close();
      for (const config of configs) {
        const d = distance(config, player), active = rooms.has(config.id) || pending.has(config.id);
        if (active && (player.y < 5.3 || player.y > 12.7 || d > 18)) unload(config.id);
        else if (!active && player.y >= 5.8 && player.y <= 12.2 && d < 13 && Date.now() >= (retryAfter.get(config.id) || 0)) load(config);
      }
    },
    dispose() { if (disposed) return; disposed = true; abort.abort(); for (const id of new Set([...rooms.keys(), ...pending.keys()])) unload(id); television.dispose(); group.removeFromParent(); group.clear(); }
  };
}
export default createHotel76Upstairs;
