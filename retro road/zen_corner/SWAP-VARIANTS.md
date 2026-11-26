# Zen corner temporary swaps

The active files currently contain **zen-monolith**: a roughly 40 m / 131 ft carved stone landlord looking towards the hotel-courtyard spawn at (-72, 2, -59). Its eyes glow without adding point lights. No audio or global input listeners.

## Choose a version

| Variant | Module | GLB | Editable Blender master |
|---|---|---|---|
| Cursed landlord | zen-monolith.mjs / .ts | zen-monolith.glb | zen-monolith.blend |
| Claimed building site | zen-worksite.mjs / .ts | zen-worksite.glb | zen-worksite.blend |
| Original garden backup | zen-original.mjs / .ts | zen-original.glb | Original garden blend remains separate |

The worksite has timber stakes and sagging ropes, no floor replacement and no collision barriers, with a 6 m entrance gap. Signs face the road and the west approach. The original garden's helper data/textures are deliberately retained for restoration.

### Easiest: swap the manifest

Copy the complete contents of manifest-zen-monolith.json, manifest-zen-worksite.json or manifest-zen-original.json into manifest.json. Commit. Reload the space after GitHub's manifest cache updates. Each manifest points at a pinned, tested module so the variant files do not have to be renamed.

### Alternatively: rename/copy the active files

Replace zen_corner.mjs, zen_corner.ts and `zen corner.glb` with copies of the chosen variant. Keep the originals under their variant names. Commit the files, then point manifest.json at zen_corner.mjs using the new commit SHA. Renaming source files alone does not alter an older pinned manifest URL.

Every module retains createZenCorner, createExportedScene, group, ready, update, checkCollision, handleClick and dispose. createZenCorner keeps the original default translation [0, 0.005, 20]; custom position/rotation/scale retain the original behavior. Geometry is embedded in the MJS/TS, so the two temporary variants do not need the GLB at runtime. The GLBs are provided for alternate loaders and Blender import.

zen-original-backup.json records exact SHA-256 checksums and the source commit for all four backed-up active files. Restore the original manifest to recover the exact original garden module, including its immutable helper and texture URLs.

One-command local selection: ./Select-ZenVariant.ps1 monolith (or worksite / original), then commit and push. The script copies all three asset formats and the matching pinned manifest.

