import bpy,os,collections,json
ROOT=os.path.dirname(os.path.abspath(__file__))
bpy.ops.wm.open_mainfile(filepath=os.path.join(ROOT,'police-motorbike.blend'))
batches=collections.defaultdict(list)
for o in list(bpy.context.scene.objects):
 if o.type=='MESH':batches[(o.parent,o.active_material)].append(o)
for (parent,mat),objects in batches.items():
 bpy.ops.object.select_all(action='DESELECT')
 for o in objects:o.select_set(True)
 bpy.context.view_layer.objects.active=objects[0]
 if len(objects)>1:bpy.ops.object.join()
 bpy.context.object.name=(parent.name if parent else 'Bike')+'_'+mat.name
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'police-motorbike.glb'),export_format='GLB',use_selection=True,export_yup=True)
json.dump({'meshes':sum(o.type=='MESH' for o in bpy.context.scene.objects),'required_pivots':{n:n in bpy.data.objects for n in ['FrontWheel','RearWheel','Steering','Kickstand']}},open(os.path.join(ROOT,'bike-verification.json'),'w'),indent=2)
