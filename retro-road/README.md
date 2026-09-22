# RETRO ROAD / Crate Digger Blender kit

Baseline: RETRO ROAD v1 in Flow Music session `74c69e2e-cc2c-4e86-b1cd-70ef1983474f`, captured 22 September 2026. The kit now includes the manifest-based runtime migration and the latest gyro source snapshot.

## Open and edit

Open **Retro_Road_World_Master.blend**. Images are packed into the file.

- **AREA__crate_digger_record_shop**: your new garage shop, now containing all 32 record bins scattered across its floor, including the entire wall containing the garage entrance, the roller door, trim, roof, guttering, signs/posters, colliders and trigger. Interior bounds in game coordinates: X −93 to −53, Z 0 to 40, height 12 m.
- **AREA__existing_shop**: the original shop with all 32 record bins removed. Its architecture, doors and remaining furnishings are retained.
- **AREA__street**: the road/pavement, telephone booth and remaining street details.
- **AREA__backroom**: the existing furnished backroom, including its animations and collision helpers.

The partition/window wall and new shop frontage are consolidated for editing; static architecture has applied scale. UVs preserve this session's revised mapping. Texture repeat/offset is baked into mesh UV coordinates so it survives GLB export. Materials now use lit Principled PBR, with double-sided exports for thin surfaces. Collision helpers fit the actual walls and preserve their openings.

To move a bin, select its **record_bin__... parent Empty**, including all children (visuals, collider and trigger), then move the hierarchy into the new shop collection. Move the whole hierarchy together. Keep `binId`, `bin`, `role`, and trigger properties intact. To duplicate a bin into a distinct category, give its bin/trigger IDs unique matching values; duplicated IDs are not new gameplay entries automatically.

## Export one area

1. Save your Blender master.
2. In the Scripting workspace, open the embedded **EXPORT COLLECTION.py** text.
3. Set `AREA_COLLECTION` to the collection to export, e.g. `AREA__crate_digger_record_shop`.
4. Run the script. It writes `exports/crate_digger_record_shop_raw.glb` beside the blend file.
5. Drag that raw GLB onto **Optimize_GLB.cmd** in this kit. The first run installs the optimizer dependencies using Node/npm. It writes a separate `*_mobile.glb`; your raw export remains intact.
6. Upload the optimized file when ready, and point the corresponding area entry at it.

Export Selected Objects, Custom Properties, animations and punctual lights are enabled by the helper. Do not recenter the collection or add another world offset. Blender (X,Y,Z) maps to game (X,Z,−Y); all these exports load at position (0,0,0), rotation (0,0,0), scale (1,1,1).

## Why the files are smaller

The optimizer limits most image dimensions to 1024 pixels, bin banners to 512, retains 2048 for the existing paving texture, uses JPEG quality 87 for opaque images and PNG for images with transparency, deduplicates shared data and removes unused resources. It preserves animation, hierarchy, UVs and custom properties. It does not use Draco/KTX2, so these files need no additional decompression loader.

Use reusable tileable textures and materials rather than a unique large image on every wall or object. Keep most textures at 512–1024 pixels; use 2048 selectively. Prefer Principled BSDF for lit PBR assets and bake unsupported procedural shaders to image textures. Arbitrary Cycles shaders are not browser materials. Keep moving doors separate from static architecture.

Splitting areas makes selective loading possible, but loading every GLB simultaneously still adds their memory/draw-call costs. JPEG reduces download size; reducing pixel dimensions reduces decoded texture memory. A 4096×4096 RGBA texture with mipmaps is roughly 85 MiB, compared with about 5.3 MiB at 1024×1024. Safari has no universal safe GLB file-size threshold. Test the total loaded world on your actual iPhone, including opening menus and revisiting areas. [Three.js texture memory documentation](https://threejs.org/manual/pages/textures.html).

## Manifest runtime

The RETRO ROAD runtime loads four enabled areas from [retro-road/areas.json](https://github.com/regtable/assets/blob/main/retro-road/areas.json): existing shop, street, standalone garage/shop and the world-aligned backroom. Its scene implementation creates the camera, sky and lighting, then loads the exported world. It does not build a duplicate procedural shop or load the legacy locally positioned BACKROOM asset.

See **MANIFEST_WORKFLOW.md** for replacing an area, adding more buildings and the exact custom-property contract. New manifest entries load on refresh without another source edit. All enabled areas are currently loaded together; this is not distance streaming.

Automated checks verify 32 bins, 21 independent doors, 404 colliders, 34 triggers and 29 registered action nodes. Front, backroom and WC doors open on approach from either side and close after you leave. The rolling garage door clears its collision box only after opening; its invisible trigger lets you close it again. Phone door animation and distance-based closing are retained. Both staff services and their desks now belong to the garage, retaining their callbacks.

The loader displays progress and errors with a retry button, waits for the collision registry before movement, and disposes loaded assets on cleanup. Coarse-pointer devices use antialiasing off and a 1.25 pixel-ratio cap. Latest MobileControls gyro changes are preserved.

The radio action opens the existing app radio feature; proximity playlist playback is not added here. Lighting now comes from installed emissive fixtures through worldEffects.ts. Six authored fan loops play continuously. Render-only fill lights have been removed from both the master and runtime.

## Gyro fix and checks

The new live MobileControls patch requests motion permission directly from a tap, waits for finite sensor values before showing active, retains a visible retry/error state, times out when no data arrives, and cancels stale requests/listeners. It does not request GPS. Automated tests cover grant/deny, repeated taps, null and zero readings, menu cancellation, Android-style no-permission-API flow and missing data. Physical iPhone verification is still required; app code cannot override browser/OS or parent-frame restrictions. [Device orientation permission requirements](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/requestPermission_static).

The user confirmed that iPhone Chrome/Firefox returned denied even after enabling the phone setting. The observed Flow preview iframe delegates accelerometer and gyroscope but omits magnetometer. WebKit's orientation API checks all three, while its motion API checks only accelerometer and gyroscope. This is a likely host-level cause, not proof of the exact installed browser implementation. [WebKit permission checks](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/LocalDOMWindow.cpp).

The new **Try motion-only gyro** button uses a fresh user tap to request DeviceMotion permission and integrate relative rotation rates. It does not need compass heading or location. It retains touch controls, handles portrait/landscape screen angle and skips large timestamp gaps. Relative integration can drift; disabling/re-enabling recentres tilt. It cannot force access if the browser also denies DeviceMotion. Flow's full orientation fix would require delegating magnetometer in its outer iframe and permitting it in any applicable parent policy; that host configuration is outside these editable game files.

Older .blend files and the root manifest used by the reference GLB-test space are preserved. RETRO ROAD uses its own retro-road/ manifest and assets.

The corrected motion fallback maps DeviceMotion alpha (X rotation) to portrait pitch and beta (Y rotation) to portrait yaw, transforms these for screen angle, and ignores gamma screen-roll. Automated tests cover portrait/landscape integration, roll isolation, permission errors, timestamp gaps and cleanup. The user confirmed that both iPhone orientations and the corrected gyro work. Retest after substantial asset additions.

User verification, 22 September 2026: the manifest-based RETRO ROAD v10 world loads on iPhone and remains working in both portrait and landscape. This confirms the current world on that device; additional assets still need retesting. The user also confirmed that gyro works correctly.

## Crate relocation and supplied notice (RETRO ROAD v11)

All 32 imported Blender bin hierarchies now belong to AREA__crate_digger_record_shop, with irregular positions and mixed angles. The old shop contains zero bins. Local collider and trigger transforms were repaired so they stay aligned when their parent bin moves. All bins retained their original category JSON and IDs; automated ray-picking and collision tests pass for every bin.

NOTICE__eviction uses the supplied artwork unchanged and packed into the garage GLB. Its authored location is on the street-facing surface of the old shop entrance. The attachTo=mainDoorPivotL custom property attaches it to that door after all areas load, preserving world position. It follows the door in the game and does not prevent door clicking. The notice is kept at its original image resolution by the optimizer for text readability.

The current manifest uses existing_shop_v3.glb, street_v3.glb, backroom_v3.glb and crate_digger_record_shop_v4.glb. The garage v4 adds the visible porch lamp above the carrot. Earlier exports and the older GLB-test root manifest remain unchanged. Do not run the old relocation preparation scripts again. Edit the current Blender master and use the export helper for subsequent changes.

## Fixture lighting, fans and the carrot

PROP__slumped_carrot is an editable 3D character in the garage collection, seated beside its entrance with a separate collision helper. It includes drooping leaves, headphones, a worn outfit and an emissive laptop. Both staff desks are also in this collection. The supplied notice still belongs to the garage export and attaches to the old shop entrance at runtime.

Name an emitting mesh or parent LIGHT_your_name. Use Principled BSDF Emission Color and Emission Strength. The runtime creates one point light per named root from the mean emission of its distinct materials; strength is interpreted as candela, not Cycles watts or simulated luminous surface area. An emission texture is visible on the mesh, but its pixels are not sampled to calculate the light colour: set a representative numeric Emission Color too. No baked indirect illumination is generated.

Optional custom properties: lightType="spot" or "point" (default); lightRange=30 metres (0 unlimited); lightDirection=[0,-1,0]; lightOffset=[0,0,0]; lightAngle=1.25 radians; lightCastsShadow=true for spots. Direction and offset use GAME world axes. Place the light origin just outside the emitter to prevent self-shadow. Materials alone do not illuminate nearby objects in Three.js; worldEffects.ts supplies that behavior.

All 23 installed fixtures stay on regardless of player position; lighting is not proximity culled. Only shadow maps are budgeted: one nearby fixture shadow on phones (512px), two on desktop (1024px each), plus one sun/moon shadow (1024px phone, 2048px desktop). VSM filtering blurs shadow edges with eight blur samples. Maps update at 5 Hz. Point lights do not cast shadows. Unshadowed direct lights can leak through partitions; this is a performance compromise. Adding many more fixtures increases rendering cost, even across separate GLBs.

roomBounce.ts adds a room-local diffuse irradiance approximation derived from the installed fixture colours and intensities. It supplies warm ceiling/wall illumination without camera-dependent lights or large lightmap textures. This is not path-traced or baked global illumination, and it does not simulate detailed occlusion between furniture. The existing shop, restroom, backroom and garage have room bounds configured. For a new building, include a box mesh with role="light_volume" and optional bounceStrength=0.18; it will be hidden at runtime and its bounds define that area's bounce region. Keep custom properties in the export. Do not tag this helper as a collider. Custom volumes replace the fallback room bounds for their area.

For a looping animation, add loopAnimation="ExactClipName" to its root and export that animation. Six existing fan roots already have this property. Do not set it on manually controlled door clips. Keep moving geometry parented to its animated root.

## Sky and day/night cycle

The physical sky dome, sun, moon and 850 stars are created by runtime/skyCycle.ts. They follow the camera without collision and need no large sky textures. Do not include another sky dome in each area GLB. The sun and moon share one directional light/shadow map; stars fade at dawn. A low hemisphere contribution represents diffuse sky illumination so surfaces facing away from the moon remain readable. This contribution is a simple global approximation and is not occluded indoors; installed lights still provide the main interior lighting.

SKY_CONFIG at the top of skyCycle.ts controls dayLengthSeconds (1200 = 20 real minutes for one full day), startHour (21 = 9 pm on load), sunIntensity, moonIntensity, nightSkyFill and daySkyFill. The cycle advances while the scene renders, pauses effectively when the tab is inactive, and restarts from startHour on reload. It is a stylized local cycle, not real-world astronomy or synchronized multiplayer time. Sky code changes must go through the Flow editor prompt, while building/fixture changes use Blender and the manifest.

User verification: v17 runs well on iPhone in both orientations and night visibility is acceptable. The subsequent always-on fixture, room-bounce and softer-shadow update still needs a fresh device check.