# Extending the RETRO ROAD world

Live manifest: https://raw.githubusercontent.com/regtable/assets/main/retro-road/areas.json

Edit in GitHub: https://github.com/regtable/assets/blob/main/retro-road/areas.json

The old GLB-test space still uses the separate root `areas.json`. Do not change that file when editing RETRO ROAD.

## Replace an existing area

1. Edit the relevant `AREA__...` collection in `Retro_Road_World_Master.blend`.
2. Use the embedded `EXPORT COLLECTION.py` helper. Keep the entire hierarchy, custom properties, helpers and animations.
3. Run `Optimize_GLB.cmd` on the raw export.
4. Upload the optimized GLB into `retro-road/` in the assets repository.
5. Update the matching manifest URL, ideally with a new filename such as `crate_digger_record_shop_v2.glb` to avoid cached geometry. Keep the area ID the same.
6. Reload the space. Check doors, bins, walls and both iPhone orientations.

## Add a building

Create another collection, place its contents where they belong in this same Blender world, export and optimize it, upload it beside the other GLBs, then add an entry to `areas`:

```json
{
  "id": "new_building",
  "url": "new_building_v1.glb",
  "position": [0, 0, 0],
  "rotation": [0, 0, 0],
  "scale": [1, 1, 1],
  "enabled": true
}
```

Use a unique `id`. Relative URLs resolve beside the manifest. Rotation is in radians. Blender X,Y,Z exports to game X,Z,-Y. These collections already contain world coordinates, so leave manifest placement at zero and scale at one. A locally modeled reusable building can instead use a deliberate manifest offset. Do not apply both an authoring offset and the same manifest offset.

The loader reads all enabled entries on reload; no app source edit is needed to add an ordinary building. This is modular loading, not distance streaming: every enabled area remains loaded. More areas still increase memory and draw calls. Set `enabled` to false to exclude one.

## Custom properties consumed by the runtime

In Blender, select the object and open Object Properties → Custom Properties. Export **Custom Properties** so these become glTF extras / Three.js userData.

| Object | Properties | Behavior |
|---|---|---|
| Box collision mesh | `role="collider"`, `shape="box"` | Hidden, solid player collision from its local bounding box and world transform. Use separate boxes around door/window openings, not one box across the whole wall. |
| Bin parent Empty | `role="record_bin"`, `binId`, `bin` | Visible descendants open the matching bin. `bin` is a JSON string with id, name, type (`era`/`genre`), color, description, tags and optional yearRange/bannerImageUrl. Copy an existing complete bin hierarchy. |
| Animated door parent/mesh | `role="door"`, unique `interactionId`, `animationClip` | Click/tap toggles the named animation. Keep each door's clip independent; export closed at the start and open at the end. |
| Door interaction box | `role="trigger"`, `action="door"`, matching `interactionId` | Invisible but clickable, including while a roller door is open. |
| Roller-door collision box | `role="collider"`, `doorId`, `disableWhenDoorProgressAbove=0.95` | Blocks until the matching door animation has opened sufficiently; blocks again when closing. |
| Interactive parent | `role="interactive"`, `action="radio"`, `"niche_desk"` or `"poster_press"` | Visible descendants open the existing app feature. |
| Spawn Empty | `role="spawn"` | Camera starting point, at eye level (1.60 m). Keep only one enabled spawn. |

For hinged doors, parent their collision box under the moving hinge so it moves with the door. Do not parent static walls to the hinge. Helpers may be hidden from renders but must be included in the export. Generic triggers are registered but do not invent new gameplay actions automatically.

Player movement retains the existing flat-floor, 1.60 m eye-height model with 0.85 m collision radius. Stairs, climbing, gravity, terrain following and streamed areas would need additional runtime work. Allow adequate doorway clearance.

Radio metadata currently opens the existing radio interface. Automatic shop playlist lookup, muffling through walls and proximity-based audio are not added by this migration.

## Mobile export rules

Use the optimizer after each raw export. It preserves names, extras, animation and hierarchy; resizes most images to at most 1024, bin banners to 512, and the existing road texture to 2048; keeps transparent images as PNG and opaque images as JPEG; and deduplicates data. Share materials and images where possible. Do not add large unique textures to every crate.

Small download size alone does not imply small GPU memory. Keep total loaded texture dimensions, geometry and draw calls modest. The scene caps coarse-pointer rendering at 1.25 device-pixel ratio without antialiasing. Test actual iPhone browsers after adding assets; there is no universal guaranteed safe GLB size.

## Current crate and notice setup

All 32 bins now live in the garage collection, scattered with a clear central access route. Move each record_bin parent together with its children. The old shop export contains no bins.

The supplied NOTICE__eviction mesh is owned by the garage export but has attachTo=mainDoorPivotL. On load, the runtime reparents it to the named door while preserving world placement, so it follows the door. Keep target object names unique across enabled areas. Missing, ambiguous or cyclic attachment targets hide the attachment rather than leave it floating. The notice remains at its authored world location in the Blender collection; the cross-area attachment is resolved by the game.

The optimizer retains this notice at its original 941 x 1672 resolution to keep its text readable. Both iPhone orientations and gyro were confirmed working by the user before this asset revision.