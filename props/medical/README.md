# EMS helicopter

Original stylized air ambulance built in Blender, released under CC0-1.0.
Includes editable Blender source, a self-contained GLB, two rotor animation
clips, named rotor pivots, an original synthesized rotor-wash loop, and a
Three.js TypeScript loader. No attribution is required.

## Flow integration

Create `emsHelicopter.ts` in the space with the contents of this directory's
file of that name. Import `createEMSHelicopter` into `RecordStoreCanvas.tsx`.
After creating the hospital, add:

```ts
const emsHelicopter = createEMSHelicopter({ camera, position: new THREE.Vector3(-73, 12.14, 20) });
scene.add(emsHelicopter.group);
```

Call `emsHelicopter.update(delta)` in the scene's frame loop and
`emsHelicopter.dispose()` in the effect cleanup before disposing the renderer.
Keep the aircraft outside the hospital's culled interior group.

The GLB and WAV load from `regtable/assets/main/props/medical`. Override `url`
and `audioUrl` to use an immutable commit or your own hosting. The GLB is in
metres, Y-up, forward +Z, with skid contact at Y=0. No external textures or
compression decoder is required. The live raised pad has a top at Y=12.12.

The first spin-up starts 300 seconds after model load; departures repeat every
300 seconds. Each sortie lasts 98 seconds including spin-up/down. It lifts
16 metres, flies 180 metres west and north while climbing to 70 metres above
the pad, hides for 26 seconds, then approaches and lands. Absolute monotonic
time handles frame stalls and tab suspension. Reloading restarts the cycle.

Audio requires a user gesture. It is spatial, loops at the aircraft, follows
rotor speed, and uses inverse distance attenuation with a 12 metre reference
distance and 1.6 rolloff. Set `sound: false` to mute. No aircraft collisions
are registered; this is an ambient scene prop.

Rotor clips are included for reuse in other viewers. This loader rotates the
named pivots directly so rotor speed can follow startup and shutdown.

Rebuild with `blender --background --python build_helicopter.py` and
`node build_audio.cjs` using the generator scripts included here.

## Ambulance and out-of-town tunnel

`ems-ambulance.glb` is an original CC0 Blender ambulance with four named wheel
pivots and alternating blue beacon materials. `emsService.ts` provides its
loader, five-minute departure/return sampler, original synthesized positional
engine/siren audio, collision bounds and the scene's east-road tunnel.

The ambulance parks beside the hospital at (-46,0,22), follows the existing
west road and 15 metre quarter-circle bend, then travels east on Z=-29. It
enters the tunnel at X=27, disappears beyond its black exit at X=89, and returns
along the route. Start-up takes six seconds, each drive 26 seconds, absence
35 seconds and shutdown four seconds. Music audio is independent.

The tunnel must be paired with the matching opening in the scene's east wall
and its movement handler must run before the legacy perimeter-wall check.
It has a 12 metre mouth and 6.2 metre elliptical crown, with player edge bounds.
The GLB needs no external textures or compression decoder. Rebuild using
`blender --background --python build_ambulance.py`.
