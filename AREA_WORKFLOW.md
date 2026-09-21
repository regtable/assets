# Blender area workflow

The runtime reads `areas.json`; it does not guess new assets by scanning filenames. Use `.glb` (not `.glib`).

- `store.glb`: world-coordinate model, placement [0,0,0], unit scale.
- `BACKROOM.glb`: existing furniture in local room coordinates, placement [22,0,-46], unit scale. Keep this legacy offset only for this asset.
- New areas: model in the same master Blender world as the store; export the area's collection without recentering. Register filename in areas.json with position [0,0,0], rotation [0,0,0], scale [1,1,1]. Upload GLB and updated manifest; reload game. Moving objects in Blender then replacing the same GLB updates placement without game code changes.

Blender coordinates convert to Three.js as (X, Z, -Y). One Blender metre is one game metre. Do not manually apply a second axis conversion after glTF loading. Existing shop spawn in game is [-50,1.6,2]. Backroom floor spans X12..32, Z-56..-36; its doorway is X20.2..23.8 at Z=-36, height3.2.

## Custom properties (Object Properties > Custom Properties)

- `role=record_bin`, `binId`, `bin` JSON: category metadata passed to existing prompt generator.
- `role=collider`, `shape=box`: solid helper. `renderCollider=true` means it is also visible wall geometry.
- `role=trigger`: nonblocking interaction volume.
- `role=door`, `interactionId`: animated hinged parent.
- `role=sound_source`, `shopName`, `playlist`: named audio marker. Convention `shop_name_sound_source` and `shop_name_radio_list.json`. Spatial audio needs runtime implementation; metadata alone does not play audio.
- `role=spawn`: eye-height player spawn.

Export with Custom Properties/extras and animations enabled. Include collision/trigger objects even if they are wireframe helpers. Preserve hierarchy and names. Do not exclude helpers from export; the runtime hides them by role.

Store GLB contains 32 record bins and six door animations. Existing BACKROOM.glb contains 13 cabinet/fridge animation clips. The original backroom asset remains unchanged.

Current assets are an integration baseline: validate collisions, glass/material appearance, animation direction and mobile performance in the GLB test session before replacing the working-controls session.
