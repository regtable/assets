# Sunset 76 upstairs room kit

Open **sunset76-upstairs-editable.blend**. Everything is in the source game's real coordinates; no manual re-alignment is necessary.

## Scope

Six guest rooms: north rooms 74, 75, 76 (internal IDs 6, 7, 8) and south rooms 73, 72, 71 (IDs 14, 15, 16). Floor Y is 6.005 m; ceiling Y is 12 m. The larger west zones (5 and 13) remain clear elevator landings. No toilets. No beds or wardrobes in the landings.

Blender coordinates are `(game X, -game Z, game Y)`. Room centres, footprints and door directions were taken from the extracted `sunset76.ts`. The north and south guest-room centres are respectively Z=-75.04 and -42.96, at X=-78, -68, -58. Existing shells, doors and elevator remain authoritative in the game.

Each `EXPORT | Room …` collection is furniture only, independently exported to GLB and loaded through its own MJS factory. The context shell is an editable solid-volume reference with cutaway walls hidden for renders, **never exported**. The two landing floor zones and elevator keep-clear marker are context only. Room shell geometry is not an exact replacement of the game building and deliberately omits window-cutout detail; it is a placement reference.

## Assets

Each guest room has a solid bed with padded headboard, quilt and pillows; two drawer bedside cabinets and lamps; a dresser; a framed wardrobe; lounge chair and side table; luggage bench; framed photo placeholder; solid TV chassis and screen; and a buttoned remote on the bed. The six rooms vary in layout, wood, upholstery, headboard details and chair/wardrobe treatments. These are detailed editable starting assets, not photographs or a substitute for your later room-specific art direction.

All 832 furniture meshes passed the closed-manifold edge audit, with outward normals recalculated. Grain textures are generated bitmap images packed into Blender and embedded in each GLB. No dependency on external procedural Blender shaders. Each GLB is approximately 1.6–1.7 MiB. Collisions use explicit bounding boxes for substantial furniture only, not one hull across an entire room or collisions on buttons/lamps/paintings.

## Photos and channels

Add each eclipse photo URL to that room's `eclipseImageUrl` in `rooms.json`, commit, then refresh the space. No source-code change. The photograph replaces the solid canvas material; the framed object remains editable in Blender.

Channel names and prompts are in `76-tv-channels/channels.json`. Seven channels are provided. Empty prompts still generate. Song receives channel prompt as `soundPrompt`; image receives the configured prefix, channel name and the same schema/prompt. No lyrics prompts. The remote opens the TV's own modal. See the TV-folder README for retries and audio behavior.

## Loading and deloading

Only the small shared controller and room manifest load initially. Each room's separate MJS/GLB loads when the upstairs camera approaches within 13 m of its centre. At 18 m, or when leaving the upstairs vertical band, its geometry, materials and textures are disposed. The hysteresis avoids doorway thrashing. Import code remains browser-cached; disposed GPU assets are re-created on return. Pending asset transfers may finish before being disposed because GLTFLoader cannot cancel a submitted load here. A failed room load waits 30 seconds before retrying. TV closes and audio stops immediately on leaving the room bounds, even inside the deload buffer.

## Integration order

Use `PATCH-VIEWER.html` / **batch 31** after cleanup batches 1–19 and record-store batches 20–30. No edits to `main.tsx`, `sunset76.ts`, the Zen loader, the gear shelving or merchant callbacks. The external TV UI owns its modal. The host receives one SDK bridge module plus exact additions for loading, physical remote picks, collisions, update/mute, modal movement guards and disposal. No live Flow edits have been sent.

The active `manifest.json` is a small mutable pointer to a commit-pinned MJS entry. Ordinary prompt/photo edits are read from Git main separately, so they do not require rebuilding Blender assets. If you release modified asset files, update the pointer to their new tested commit. GitHub/CDN caching can still introduce delay.

## Validation and limits

`node test-release.mjs` tests GLB contents, embedded textures, extras, colliders, empty-prompt generation, successful and failed tuning, missing-media retries and disposed late results, using mock SDK calls. No paid generation was run. Blender renders were inspected. The final live host integration still needs a space test after applying batch 31. The modal has explicit play/pause for browsers that block delayed autoplay. Real SDK requests cannot be cancelled after submission.
