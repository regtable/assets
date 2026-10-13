# Temporary medical vehicle prank

The live paths in `props/medical` temporarily serve an original giant rubber duck with pizza rotors, a wheeled banana ambulance, and a synthesized duck/kazoo rotor loop. Their normal timers, positional attenuation and music behavior remain in the existing loaders. The ambulance engine/siren are synthesized in app code and were not changed.

Exact original bytes are preserved in the same live folder:

| Backup | Restore as |
| --- | --- |
| `props/medical/ems-helicopter_old.glb` | `props/medical/ems-helicopter.glb` |
| `props/medical/ems-ambulance_old.glb` | `props/medical/ems-ambulance.glb` |
| `props/medical/rotor-wash_old.wav` | `props/medical/rotor-wash.wav` |

In GitHub, first delete or rename the current prank file, then rename its `_old` backup to the normal name. Repeat for the three files above. Alternatively revert the temporary-prank commit to restore all three together. The original .blend files and existing loader code were left in place.

The active main-branch URLs are unchanged. An already-loaded GLB/audio buffer will not necessarily refresh automatically. GitHub raw caching or the app's cache may delay replacement; a scene/page reload may be needed and will restart the vehicle timers.

Prank .blend sources and preview images are in this folder. Original geometry, materials and synthesized audio: CC0-1.0, no attribution required, no external models or recordings. Blender's bundled primitives only; no third-party textures. Provided as-is.
