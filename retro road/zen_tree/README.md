# Zen Tree (standalone)

This asset is **the tree, not Zen Corner**. It is a standalone raised-planter
sakura tree extracted from the tree-only part of `ZenGarden_clean.ts`.
Nothing in `retro road/zen_corner` is changed by this addition.

## Files

- `zen_tree.glb` — static, Y-up, metre-scale planter, soil, tree trunk,
  original branch scaffold, and bronze/gold sakura canopy.
- `zen_tree.mjs` — ES module that loads the GLB and attaches an **independent**
  `../zen_corner/petal_emitter.mjs` via its `createPetalEmitter` export.
- `manifest.json` — URLs for loader, GLB, and emitter, plus pinned version.

The falling petals are **not baked into the GLB**. The existing reusable
petal emitter is loaded separately. The emitter can use cherry, maple, oak,
ginkgo, birch and willow geometry.

## Integration (after removing the old in-scene Zen Tree)

```js
import { loadZenTree } from 'ZEN_TREE_MODULE_URL';

// Provide the GLTFLoader from the running app; do not load a second copy
// of Three.js or replace the existing scene renderer.
const tree = await loadZenTree({
  loader: existingGltfLoader,
  scene,
  position: [-23.2, 0.06, -15], // sample: original garden (-25,0,-15) + tree offset
  petals: true,
  emitterOptions: { shape: 'cherry', count: 160 }
});

// Call once per render frame, in seconds:
tree.update(deltaSeconds);

// On removal:
tree.dispose();
```

`loadZenTree` returns a Promise; no module creates a tree at import time.
Remove the prior tree from the scene before adding this one to avoid a duplicate
and dispose the old emitter if the old garden code still owns one.

Pass `petals: false` for the GLB alone; you can also override
`emitterModuleUrl`, inject `emitterFactory`, or pass custom
`emitterOptions` to change colours/leaf geometry/wind.

Default diagnostic modes: `NORMAL`, `NO CANOPY`, `PAUSE PETALS`, `TREE OFF`
(and legacy `GARDEN OFF` alias). Collision checks use the planter's ~1.8m
radius in XZ.

## Fidelity and placement

The raised planter, 0.30m trunk, nine original bough centerlines and canopy
cluster arrangement follow the original source. The original `./trim`
material module and runtime canvas blossom texture were not part of the
shared input, so the GLB uses reconstructed bronze/gold PBR finishes and
procedural static blossom polygons instead of those exact textures.
The new tree's root is **centred on its planter at ground level**, rather
than inheriting the old garden's (x=1.8m, y=0.06m) local offset.

This migration does not change or remove the old tree instance from the
application; host scene integration is intentionally left to the app owner.
