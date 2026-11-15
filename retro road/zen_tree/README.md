# Zen Tree standalone
This is the **Zen Tree**, not **Zen Corner**. The old garden, Zen Corner,
and Blender GLB files remain untouched.

## Runtime: use the module, not the GLB
`zen_tree.mjs` runs the original tree-construction routines from
`ZenGarden_clean.ts` (planter, trunk, scaffold branches, sakura canopy).
It imports the independent `../zen_corner/petal_emitter.mjs`, then attaches
a cherry-petal emitter when `createZenTree()` is called, unless
`petals: false` is passed. The creation call is **synchronous**.
It does **not** use GLTFLoader, fetch the GLB, or create another render loop.

Use this in the game's `main.ts` (or equivalent scene integration file):

```ts
const manifestUrl = 'https://cdn.jsdelivr.net/gh/regtable/assets@main/retro%20road/zen_tree/manifest.json';
const response = await fetch(manifestUrl);
if (!response.ok) throw new Error('Could not fetch Zen Tree manifest');
const manifest = await response.json();
const { createZenTree } = await import(/* @vite-ignore */ manifest.moduleUrl);

const zenTree = createZenTree({
  position: new THREE.Vector3(-23.2, 0.06, -15),
  // scene, // optional: pass scene here or attach below
  petals: true,
  emitterOptions: { shape: 'cherry', count: 160 }
});
scene.add(zenTree.group);

// Inside the EXISTING game loop:
zenTree.update(deltaSeconds);

// Your existing collision check can call:
// zenTree.checkCollision(playerPosition, playerRadius);

// On unloading this scene or removing the tree:
zenTree.dispose();
```

Ensure the old in-scene Zen Tree and its old falling-petal update are removed
to prevent duplicates. Do not remove Zen Corner.

`createZenTree` optionally accepts `emitterFactory`, `emitterOptions`,
`materials` (override treeBarkMat/pottingSoilMat/darkGoldTrimMat),
`rotationY`, `scale`, `position` and `scene`. The new tree origin
is the planter base at local [0,0,0]. The example location above matches
the original garden origin (-25,0,-15) plus its local tree offset
(1.8,0.06,0).

Returned instance: `{ group, emitter, update, checkCollision,
setDiagnosticMode, getDiagnosticMode, setPosition, setWind, dispose }`.
You can independently import `petal_emitter.mjs` for other foliage effects.
Future non-foliage emitters (e.g. leaks) can reuse the same approach but
will require appropriate particle geometry/material and motion.

## Blender only
`zen_tree.glb` is the separate static mesh for daily Blender scene exports.
It is not loaded by `zen_tree.mjs` and does not contain animated petals.

## Fidelity
The tree source geometry and procedural blossom canvas are preserved from
the submitted TypeScript, but `./trim` was not supplied, so original
external bark/soil/gold materials are approximated unless injected.
The separately generated Blender GLB remains the static approximation.
