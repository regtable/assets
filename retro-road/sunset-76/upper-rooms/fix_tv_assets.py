import bpy,json,math
from pathlib import Path
from mathutils import Vector
OUT=Path(__file__).resolve().parent
bpy.ops.wm.open_mainfile(filepath=str(OUT/'sunset76-upstairs-editable.blend'))
turns={6:0,7:math.pi/2,8:0,14:math.pi,15:-math.pi/2,16:math.pi}
data=json.loads((OUT/'rooms.json').read_text())
moved=0;flipped=0
for r in data['rooms']:
    col=next(c for c in bpy.data.collections if c.get('roomId')==r['id']);a=turns[r['id']]
    dx,dz=-.60,2.22;delta=Vector((math.cos(a)*dx+math.sin(a)*dz,math.sin(a)*dx-math.cos(a)*dz,-.227))
    for o in col.objects:
        if o.name.startswith('REMOTE') and not bpy.context.scene.get('tvRemotesUnderTV',False):o.location+=delta;moved+=1
        if (o.get('hotelTV') or 'canvas solid' in o.name) and not bpy.context.scene.get('tvScreenUVFixed',False):
            for loop in o.data.uv_layers.active.data:loop.uv.x=1-loop.uv.x
            flipped+=1
    bpy.context.view_layer.update();bpy.ops.object.select_all(action='DESELECT')
    for o in col.objects:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(OUT/r['glb']),export_format='GLB',use_selection=True,export_extras=True,export_yup=True,export_apply=True)
bpy.context.scene['tvRemotesUnderTV']=True;bpy.context.scene['tvScreenUVFixed']=True
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'sunset76-upstairs-editable.blend'))
print('TV ASSETS FIXED',moved,'remote components moved;',flipped,'screens/artwork UVs corrected')
