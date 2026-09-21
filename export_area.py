"""Run in Blender's Text Editor. Change AREA_COLLECTION and EXPORT_DIR first.
Use an AREA__name collection containing one area's visual meshes, colliders,
triggers and animation parents. Keep all objects in their world positions.
This writes the GLB and registers it in a LOCAL areas.json; upload both to GitHub.
"""
import bpy, json, os, re
AREA_COLLECTION = 'AREA__new_area_name'
EXPORT_DIR = bpy.path.abspath('//area_exports')
collection = bpy.data.collections.get(AREA_COLLECTION)
if collection is None:
    raise RuntimeError('Create/select the collection named ' + AREA_COLLECTION)
area_id = AREA_COLLECTION.removeprefix('AREA__')
if not re.fullmatch(r'[a-z0-9_-]+', area_id):
    raise RuntimeError('Use lowercase letters, numbers, underscores or hyphens for the area name.')
os.makedirs(EXPORT_DIR, exist_ok=True)
selected = list(bpy.context.selected_objects)
active = bpy.context.view_layer.objects.active
try:
    bpy.ops.object.select_all(action='DESELECT')
    for obj in collection.all_objects:
        if obj.name not in bpy.context.view_layer.objects:
            raise RuntimeError('Area collection must be included in the active view layer.')
        obj.hide_set(False)
        obj.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(EXPORT_DIR,area_id+'.glb'),
        export_format='GLB',use_selection=True,export_extras=True,
        export_animations=True,export_cameras=False,export_lights=False)
finally:
    bpy.ops.object.select_all(action='DESELECT')
    for obj in selected: obj.select_set(True)
    bpy.context.view_layer.objects.active=active
manifest_path=os.path.join(EXPORT_DIR,'areas.json')
if not os.path.exists(manifest_path):
    raise RuntimeError('GLB exported. Copy the CURRENT GitHub areas.json into this folder, then rerun to register safely.')
with open(manifest_path,encoding='utf8') as f: manifest=json.load(f)
if manifest.get('version')!=1: raise RuntimeError('Unsupported manifest version')
entry={'id':area_id,'url':area_id+'.glb','position':[0,0,0],'rotation':[0,0,0],'scale':[1,1,1],'enabled':True}
manifest['areas']=[a for a in manifest['areas'] if a['id']!=area_id]+[entry]
with open(manifest_path,'w',encoding='utf8') as f: json.dump(manifest,f,indent=2)
print('Exported '+area_id+'.glb and updated local areas.json. Upload both files to regtable/assets.')

