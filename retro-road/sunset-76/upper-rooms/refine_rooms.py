import bpy, math, json, bmesh
from pathlib import Path
from mathutils import Vector
OUT=Path(__file__).resolve().parent
bpy.ops.wm.open_mainfile(filepath=str(OUT/'sunset76-upstairs-editable.blend'))
turns={6:0,7:math.pi/2,8:0,14:math.pi,15:-math.pi/2,16:math.pi}
data=json.loads((OUT/'rooms.json').read_text())
for entry in data['rooms']:
    col=next(c for c in bpy.data.collections if c.get('roomId')==entry['id'])
    cx,cy,cz=entry['origin'];a=turns[entry['id']]
    def pos(x,h,z):return (cx+math.cos(a)*x+math.sin(a)*z,-cz+math.sin(a)*x-math.cos(a)*z,cy+h)
    def delta(x,z):return Vector((math.cos(a)*x+math.sin(a)*z,math.sin(a)*x-math.cos(a)*z,0))
    # Distinct per-room arrangements, beyond merely rotating the same kit.
    shift={6:(0,0),7:(-.20,.35),8:(-.45,.50),14:(-.35,.40),15:(.10,.35),16:(-.25,.65)}[entry['id']]
    for o in list(col.objects):
        if o.name.startswith('DRESSER'):o.location+=delta(*shift)
        if o.name.startswith('CHAIR'):o.location+=delta(-.20 if entry['id'] in [8,15] else 0,.25 if entry['id'] in [7,14,16] else 0)
        if o.name.startswith('TV | foot'):o.location.z-=.10
        if o.get('hotelTV') or 'canvas solid' in o.name:
            xs=[v.co.x for v in o.data.vertices];zs=[v.co.z for v in o.data.vertices]
            loX,hiX=min(xs),max(xs);loZ,hiZ=min(zs),max(zs)
            for face in o.data.polygons:
                for li in face.loop_indices:
                    v=o.data.vertices[o.data.loops[li].vertex_index].co
                    o.data.uv_layers.active.data[li].uv=((v.x-loX)/(hiX-loX),(v.z-loZ)/(hiZ-loZ))
        # Change headboard proportions and style; every component remains a closed solid.
        if 'padded headboard flute' in o.name:
            if entry['id']==7:o.scale.z=.72
            if entry['id']==8:o.scale.x=.85
            if entry['id']==14:o.scale.z=.86
            if entry['id']==15:o.scale.x=.72
            if entry['id']==16:o.scale.z=.65
        if entry['id'] in [7,15] and 'WARDROBE | recessed door panel' in o.name:
            m=bpy.data.materials.new(f"Room {entry['id']} | satin door inset");m.diffuse_color=(.19,.23,.25,1);m.use_nodes=True
            bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=m.diffuse_color;bs.inputs['Metallic'].default_value=.32;bs.inputs['Roughness'].default_value=.3
            o.data.materials.clear();o.data.materials.append(m)
    for x in [-2.52,-1.38]:
        bpy.ops.mesh.primitive_cube_add(size=1,location=pos(x,.99,1.12));o=bpy.context.object;o.name='TV | solid support stem';o.dimensions=(.035,.035,.44)
        bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(bpy.data.materials['Remote soft black'])
        for c in list(o.users_collection):c.objects.unlink(o)
        col.objects.link(o)
    entry['colliders']=[]
    for o in col.objects:
        if o.get('hotelCollision'):
            vs=[o.matrix_world@Vector(v) for v in o.bound_box]
            entry['colliders'].append({'name':o.name,'min':[min(v.x for v in vs),min(v.z for v in vs),min(-v.y for v in vs)],'max':[max(v.x for v in vs),max(v.z for v in vs),max(-v.y for v in vs)]})
    bpy.context.view_layer.update()
    bpy.ops.object.select_all(action='DESELECT')
    for o in col.objects:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(OUT/entry['glb']),export_format='GLB',use_selection=True,export_extras=True,export_yup=True,export_apply=True)
    (OUT/'rooms'/f"room-{entry['id']:02}.json").write_text(json.dumps(entry,indent=2))
audit=[];meshes=0;faces=0
for col in bpy.data.collections:
    if not col.name.startswith('EXPORT'):continue
    for o in col.objects:
        if o.type!='MESH':continue
        meshes+=1;faces+=len(o.data.polygons);bm=bmesh.new();bm.from_mesh(o.data)
        if any(not e.is_manifold for e in bm.edges):audit.append(o.name)
        bm.free()
assert not audit,audit
(OUT/'rooms.json').write_text(json.dumps(data,indent=2))
(OUT/'manifold-audit.json').write_text(json.dumps({'meshCount':meshes,'faces':faces,'nonManifoldObjects':audit,'status':'PASS'},indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'sunset76-upstairs-editable.blend'))
print('REFINED ROOM UVS, TV SUPPORTS AND UNIQUE LAYOUT DETAILS',meshes,faces)
