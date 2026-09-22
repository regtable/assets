# Current world base

Both active files use WORLD coordinates and zero manifest transforms:

- store.glb (~13.6 MB): 32 bins, 6 doors, 86 colliders.
- backroom.glb (~13.1 MB): 13 cabinet/fridge hinge clips, 260 furniture colliders.

Uppercase BACKROOM.glb is retained as the untouched legacy file. It is NOT the active backroom; the earlier AREA_WORKFLOW.md description of its placement refers only to that legacy file. Never add [22,0,-46] again to lowercase backroom.glb.

Author in Store_World_Master.blend using separate AREA__store, AREA__backroom, and AREA__new_name collections. The exporter helper updates a LOCAL copy of areas.json. Upload exported GLBs and the updated manifest. On reload the loader discovers enabled manifest entries and preserves positions; merely uploading an unregistered filename does not add it.

Keep metre scale, object hierarchy, animations, Custom Properties/extras, collision helpers and trigger helpers when exporting. Do not export the entire master as one area or duplicate the other areas. New areas use game (X,Y,Z) = Blender (X,Z,-Y); glTF handles that conversion automatically.

Validation: both asset registries loaded locally with 32 bins, 19 distinct animation actions, 346 colliders, 34 triggers. Spawn and solid wall collision passed; front doorway blocks closed and admits the player open; crate picking returns era_80s metadata. These are targeted automated checks, not a complete physical iPhone playtest.
