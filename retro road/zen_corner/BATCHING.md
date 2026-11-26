# Zen runtime batching release

Only external MJS/TS assets and their manifests change. No host/editor patches.

| Variant | Visible render meshes before | After | Triangles |
|---|---:|---:|---:|
| Colossus / monolith | 65 | 6 | 13,280 |
| Roped worksite | 215 | 42 | 31,356 |
| Garden base scene | 2,415 | 250 | 3,559,795 |

Counts are scene inventory, not GPU profiler measurements from a particular camera. Garden figures exclude separately loaded emitter meshes, whose implementation is unchanged. Actual FPS still needs checking in the space. The garden remains geometry-heavy even after batching; this release deliberately preserves every triangle.

Compatible opaque pieces are merged by material, attribute format, render settings, parent and spatial cell. Garden/worksite cells are 12 m to retain useful frustum culling; the monolith uses six material draws. Normals, UVs, vertex colours and reflected transforms are preserved. Original source BufferGeometry instances no longer needed by render meshes are disposed and removed from the runtime geometry cache.

Gate hinge groups remain independently animated. Pickable vending buttons, pool shaders, waterfall curtains and animated splash rings remain separate. Transparent meshes are not merged, preserving their sorting. Textures and materials are not replaced with flat approximations. Unbatched Blender/GLB originals remain available as editable source assets; this optimisation applies to the MJS/TS runtime used by the space.

Garden collisions keep the original source geometry bounds and transforms, independently of merged render geometry. World bounds are cached until the root or hinge matrix changes. The legacy behavior was checked against the optimized module at 6,600 sampled positions, including moving gate checks. Identical triangle counts, overall bounds, gate transforms, water effect availability, four interaction targets and disposal were also tested with real Three.js geometry.

## Manifests and backups

- `manifest.json` selects the optimized monolith.
- `manifest-zen-monolith.json` / `manifest-zen-worksite.json` select their optimized runtime variants.
- `manifest-zen-garden-batched.json` selects the optimized garden. Use this to restore the garden with batching.
- `zen-original.*` and `manifest-zen-original.json` remain untouched as exact pre-batching backups.
- `Select-ZenVariant.ps1 -Variant garden` selects the optimized garden; `original` is the exact legacy fallback.

The saved GLB files are source alternatives and are not fetched by the embedded monolith/worksite runtime. Runtime changes are published under commit-pinned URLs so a space refresh reads the new manifest and imports a new module URL without editing the space.
