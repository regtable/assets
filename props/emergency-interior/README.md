# Retro Road hospital and fire station interior

Original Blender-made geometry. CC0, no attribution required. No third-party model or texture downloads. All materials are embedded. Lettering uses Blender's bundled Bfont converted to mesh.

## Files

| File | Contents |
| --- | --- |
| `hospital-fire-station.blend` | Editable source, separate furniture parts, named hinges, materials and door actions |
| `hospital-fire-station.glb` | Complete interior, upper deck, stairs and gold pole |
| `hospital-ground.glb` | Hospital furnishings, clinical partitions, ground floor, three hinged doors |
| `fire-station-upper.glb` | Fire station furnishings, upper deck and two hinged doors |
| `stairs-and-pole.glb` | Switchback staircase, handrails, pole, rim and landing pad |
| `layout.json` | Placement, floor heights, doorway nodes, stair surfaces, pole location and static box hints |
| `build_emergency_interior.py` | Reproducible Blender generator |

Load either the complete GLB or the three separate GLBs; loading both duplicates the geometry. The exports share one origin.

## Placement and proportions

- Units: metres. glTF: X east, Y up, Z south.
- Place every GLB root at world **(-73, 0, 20)**, scale 1, no rotation.
- Matches the existing 40 × 40 metre base room: world X -93 to -53, Z 0 to 40.
- Downstairs finished floor Y 0. Upstairs finished floor Y 6. Fixtures fit below the existing Y 12 roof.
- Existing front doorway remains at (-53, 0, 30). Existing rear doorway remains at (-83, 0, 0).
- Pole centre: world **(-81, 0, 5)**, five metres inside the rear exit. Clear landing pad and upper-floor circular opening, radius 1.02 m. Pole extends to the roof fixing.
- Stair: two 2.4 m-wide flights, 36 risers of 166.7 mm, 300 mm going, mid landing Y 3, top Y 6.

The asset contains interior partitions and floors, not the outside building shell or its external doors. Retain the existing exterior brickwork, roof, external doors, helipad and fire escape. The stair location does not assert an upstairs connection through the east exterior wall.

## Design

Downstairs: sage and cream clinical rooms, smoked-oak reception with lettering physically inset in its front, grouped waiting seats with magazines and plants, two exam rooms, urgent-treatment room, beds with wheels/rails/IV stands and ECG screens, nursing station, stretcher, two detailed wheelchairs, sinks, clinical storage and waste/sharps containers. No room/door signs or floating labels.

Upstairs: fire crew kitchen and mess table, coffee mugs, lounge and wall-mounted briefing screen, six-bed dormitory, dispatch office with monitors/radio, equipment lockers with coats/helmets/boots, hose coils, extinguishers, exercise mats and weights, storage and crew wash area. The staircase and brass pole sit near the ready area.

## Later integration

No live Flow session is changed. These are visual assets awaiting runtime integration.

1. Remove the previous code-generated ward furniture and its collision boxes before adding the replacement. Do not retain overlapping old furnishings.
2. Add the hospital root under the existing interior-culling group. The `Hospital_Ground`, `FireStation_Upper` and `Stairs_And_Pole` roots are separate for floor visibility control. Cull upper flooring carefully: it is also the hospital ceiling.
3. GLB triangles do not create player collision automatically. `layout.json` contains box hints, staircase heights and pole data for implementing and checking collision later. It is a starting point, not a complete collision solver: doors, stair guards, deck openings and furnishings need integration.
4. Five independently named `*_Hinge` nodes carry `*_Open` clips (1.25 seconds, closed to 90 degrees). Reverse playback for closing; attach proximity/click logic and transformed door collision. No signs are attached to doors.
5. Implement stair eye-height support and pole interaction separately. Do not teleport by using the visual asset alone. Keep the rear exit route and pole landing clear.
6. Emissive fixture materials are included, but runtime point/area lights are not exported. Reuse/tune the existing room lighting and music independently.

Static meshes are batched by floor/material for low draw calls; door leaves and the gold pole remain separately addressable. The .blend retains the original editable parts before batching.

## Rebuild

Run Blender in background mode with `--python build_emergency_interior.py`. When run from this folder, the generator writes the assets here. At the project level it writes to `props/emergency-interior`. It renders the previews after saving the editable asset.
