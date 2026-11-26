import bpy, math, json, random, bmesh
from pathlib import Path
from mathutils import Vector

OUT=Path(__file__).resolve().parent
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for c in list(bpy.data.collections):
    if c.name!='Collection': bpy.data.collections.remove(c)
scene=bpy.context.scene
scene.unit_settings.system='METRIC'
scene.render.engine='CYCLES'; scene.cycles.samples=32
scene.render.resolution_x=1200; scene.render.resolution_y=900; scene.render.resolution_percentage=100
scene.world.color=(.22,.22,.22)
ROOT=bpy.data.collections.new('HOTEL 76 | editable upstairs master'); scene.collection.children.link(ROOT)
CTX=bpy.data.collections.new('CONTEXT ONLY | existing architecture — never export'); ROOT.children.link(CTX)
LIGHTS=bpy.data.collections.new('PREVIEW ONLY | lights cameras'); scene.collection.children.link(LIGHTS)
current=None; origin=(0,0,0); yaw=0; count=0

def material(name,col,rough=.45,metal=0):
    m=bpy.data.materials.new(name);m.diffuse_color=(*col,1);m.use_nodes=True
    b=m.node_tree.nodes.get('Principled BSDF');b.inputs['Base Color'].default_value=(*col,1);b.inputs['Roughness'].default_value=rough;b.inputs['Metallic'].default_value=metal
    return m
def wood(name,c):
    m=material(name,c,.36);im=bpy.data.images.new(name+' | generated grain',width=256,height=256)
    rng=random.Random(name);pix=[]
    for y in range(256):
        for x in range(256):
            wave=math.sin(x*.41+math.sin(y*.035)*1.8)+.45*math.sin(x*1.93+y*.017)
            v=.87+.075*wave+rng.random()*.07
            pix.extend([min(1,a*v) for a in c]+[1])
    im.pixels=pix;im.pack();tex=m.node_tree.nodes.new('ShaderNodeTexImage');tex.image=im
    m.node_tree.links.new(tex.outputs['Color'],m.node_tree.nodes.get('Principled BSDF').inputs['Base Color']);return m
gold=material('Brushed warm brass',(.53,.32,.095),.28,.75)
black=material('Remote soft black',(.019,.024,.032),.44)
white=material('Warm porcelain',(.83,.80,.72),.6)
screen=material('TV | powered-off screen',(.012,.027,.036),.17,.15)
art=material('PHOTO PLACEHOLDER | replace image URL later',(.28,.33,.41),.65)
contextmat=material('CONTEXT | existing shell',(.28,.30,.33),.8)
floorMat=material('CONTEXT | floor',(.20,.16,.12),.7)
themes=[
 (6,'74 North | walnut and moss',(-78,-75.04),(.19,.095,.047),(.18,.29,.21),0),
 (7,'75 North | pale oak and indigo',(-68,-75.04),(.52,.36,.20),(.10,.18,.32),math.pi/2),
 (8,'76 North | rosewood and terracotta',(-58,-75.04),(.25,.075,.05),(.50,.23,.15),0),
 (14,'73 South | smoked oak and plum',(-78,-42.96),(.18,.13,.10),(.29,.13,.26),math.pi),
 (15,'72 South | ash and teal',(-68,-42.96),(.55,.46,.31),(.10,.32,.31),-math.pi/2),
 (16,'71 South | espresso and champagne',(-58,-42.96),(.11,.063,.035),(.60,.48,.28),math.pi)]

def loc(v):
    x,h,z=v;c=math.cos(yaw);s=math.sin(yaw);gx=c*x+s*z;gz=-s*x+c*z
    return (origin[0]+gx,-origin[1]-gz,origin[2]+h)
def move_to(obj,col):
    for c in list(obj.users_collection):c.objects.unlink(obj)
    col.objects.link(obj)
def box(name,at,size,mat,bevel=.035,rot=0,collision=False):
    global count
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc(at));o=bpy.context.object;o.name=name
    o.dimensions=(size[0],size[2],size[1]);o.rotation_euler.z=-yaw-rot
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        mod=o.modifiers.new('Machined edge radius','BEVEL');mod.width=min(bevel,min(size)*.35);mod.segments=3
        bpy.ops.object.modifier_apply(modifier=mod.name)
        mod=o.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL');mod.keep_sharp=True
        bpy.ops.object.modifier_apply(modifier=mod.name)
    o.data.materials.append(mat);move_to(o,current)
    if collision:o['hotelCollision']=True
    # Explicit box UVs, no separated-face placeholder construction.
    bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.cube_project(cube_size=1);bpy.ops.object.mode_set(mode='OBJECT')
    count+=1;return o
def leg(name,at,r,h,mat):
    bpy.ops.mesh.primitive_cylinder_add(vertices=24,radius=r,depth=h,location=loc(at));o=bpy.context.object;o.name=name
    o.data.materials.append(mat);move_to(o,current)
    mod=o.modifiers.new('Soft turned ends','BEVEL');mod.width=.012;mod.segments=3;bpy.ops.object.modifier_apply(modifier=mod.name)
    for p in o.data.polygons:p.use_smooth=True
    return o
def frame(name,x,z,h=2.0,w=1.45):
    box(name+' | canvas solid', (x,h,z),(w,.88,.028),art,.006)
    for dx in [-w/2,w/2]:box(name+' | frame upright',(x+dx,h,z-.022),(.048,.98,.07),gold,.009)
    for dy in [-.49,.49]:box(name+' | frame rail',(x,h+dy,z-.022),(w+.048,.048,.07),gold,.009)
def drawer(name,x,y,z,w,h,mat):
    box(name+' | front',(x,y,z),(w,h,.055),mat,.012)
    box(name+' | inset panel',(x,y,z-.031),(w-.09,h-.07,.018),mat,.007)
    box(name+' | brass pull',(x,y+.035,z-.082),(.24,.025,.035),gold,.008)
def cabinet(name,x,z,w,h,d,mat,rows=3):
    box(name+' | closed carcass',(x,h/2+.15,z),(w,h,d),mat,.025,collision=True)
    box(name+' | overhanging top',(x,h+.17,z),(w+.06,.055,d+.06),mat,.017)
    for i in range(rows):drawer(name+f' | drawer {i+1}',x,.18+(i+.5)*(h-.03)/rows,z-d/2-.035,w-.09,(h-.08)/rows-.025,mat)
    for dx in [-w/2+.09,w/2-.09]:
        for dz in [-d/2+.08,d/2-.08]:leg(name+' | foot',(x+dx,.085,z+dz),.035,.17,gold)
def build_bed(mat,cloth,linen,i):
    # Two-metre bed, solid upholstered base, quilt channels and pillows.
    box('BED | upholstered platform',(-1.95,.29,-2.15),(2.24,.43,2.45),mat,.09,collision=True)
    box('BED | sprung mattress',(-1.95,.66,-2.15),(2.09,.32,2.22),linen,.13)
    box('BED | mattress welt',(-1.95,.81,-2.15),(2.11,.025,2.23),white,.009)
    box('BED | headboard frame',(-1.95,.91,-3.42),(2.50,1.63,.15),mat,.075)
    for a in range(5):box('BED | padded headboard flute '+str(a),(-2.93+a*.49,1.06,-3.31),(.45,1.12,.12),cloth,.055)
    for a in range(11):box('BED | quilt channel '+str(a),(-2.92+a*.194,.88,-1.91),(.205,.12,1.60),cloth,.052)
    for dx in [-.51,.51]:
        box('BED | piped pillow',(-1.95+dx,.97,-2.92),(.87,.19,.48),linen,.09,rot=(dx*.07))
    for dx in [-.87,.87]:
        for dz in [-1,1]:leg('BED | turned foot',(-1.95+dx,.10,-2.15+dz),.055,.20,gold)
    for dx in [-1.55,1.55]:
        x=-1.95+dx;cabinet('BEDSIDE '+('L' if dx<0 else 'R'),x,-2.96,.66,.62,.58,mat,2)
        leg('BEDSIDE | lamp base',(x,.82,-2.96),.11,.035,gold);leg('BEDSIDE | lamp stem',(x,1.03,-2.96),.018,.38,gold)
        box('BEDSIDE | fabric lamp shade',(x,1.28,-2.96),(.29,.32,.29),linen,.065)
    r=box('REMOTE | channel selector',(-1.35,1.002,-1.36),(.15,.035,.35),black,.018)
    r['hotelRemote']=str(i);r['interaction']='hotel76.tv.open';r['roomId']=i
    for row in range(4):
        for col in range(3):box('REMOTE | tactile key',(-1.395+col*.045,1.026,-1.45+row*.055),(.026,.012,.026),gold if row==0 else white,.005)
def chair(mat,cloth,i):
    # Barrel lounge chair in some rooms, slatted club chair in others.
    x,z=2.15,-2.75
    box('CHAIR | upholstered seat',(x,.53,z),(.91,.18,.82),cloth,.11,collision=True)
    box('CHAIR | shaped upholstered back',(x,.96,z+.35),(.95,.90,.18),cloth,.09)
    for dx in [-.48,.48]:
        box('CHAIR | arm',(x+dx,.78,z),(.13,.17,.90),mat,.055)
        for dz in [-.30,.30]:leg('CHAIR | tapered leg',(x+dx*.82,.23,z+dz),.035,.47,mat)
    if i%2==0:
        for k in range(7):box('CHAIR | back timber flute',(x-.36+k*.12,1.02,z+.46),(.045,.65,.04),mat,.016)
    leg('CHAIR | side table pedestal',(x+1.15,.34,z),.055,.65,gold)
    box('CHAIR | side table top',(x+1.15,.68,z),(.62,.055,.62),mat,.04)
    box('CHAIR | side table weighted foot',(x+1.15,.045,z),(.40,.07,.40),mat,.03)
def room_shell(cx,cz,north=True,landing=False):
    global current,origin,yaw
    old=current;current=CTX;origin=(cx,cz,6.005);yaw=0
    depth=21 if landing else 9.92
    box('CONTEXT | floor slab',(0,-.10,0),(9.84,.18,depth),floorMat,.005)
    # Only far and side walls: cutaway working view; doorway markers are volume meshes.
    for x in [-4.96,4.96]:
        o=box('CONTEXT | wall volume',(x,3,0),(.12,6,depth),contextmat,.005);o.hide_render=True
    for z in [-depth/2,depth/2]:
        if not landing and ((north and z>0) or (not north and z<0)):
            for x in [-3.48,3.48]:box('CONTEXT | door flank',(x,3,z),(2.96,6,.12),contextmat,.005).hide_render=True
            box('CONTEXT | doorway header',(0,5.3,z),(4,1.4,.12),contextmat,.005).hide_render=True
        else:box('CONTEXT | wall volume',(0,3,z),(9.84,6,.12),contextmat,.005).hide_render=True
    current=old

manifest=[]
for idx,name,(cx,cz),woodcol,accent,turn in themes:
    current=bpy.data.collections.new(f'EXPORT | Room {idx:02} | {name}');ROOT.children.link(current)
    current['roomId']=idx;current['gameOrigin']=json.dumps([cx,6.005,cz]);current['exportKind']='furniture only; no duplicate existing room shell'
    origin=(cx,cz,6.005);yaw=turn
    timber=wood(name+' timber',woodcol);cloth=material(name+' upholstery',accent,.87);linen=material(name+' linen',(.79,.76,.67),.94)
    build_bed(timber,cloth,linen,idx)
    cabinet('DRESSER',2.76,.20,1.65,1.05,.68,timber,3)
    box('WARDROBE | closed carcass',(3.75,1.24,2.65),(1.65,2.36,.72),timber,.035,collision=True)
    for x in [3.35,4.15]:
        box('WARDROBE | framed door',(x,1.27,2.25),(.77,2.20,.065),timber,.016)
        box('WARDROBE | recessed door panel',(x,1.28,2.208),(.64,1.92,.025),cloth,.008)
        box('WARDROBE | pull',(x+(.22 if x<3.75 else -.22),1.28,2.15),(.025,.29,.035),gold,.009)
    box('WARDROBE | crown',(3.75,2.46,2.65),(1.74,.10,.79),timber,.024)
    chair(timber,cloth,idx)
    # TV faces the bed, cabinet below; 3D screen is independently replaceable.
    cabinet('TV CONSOLE',-1.95,.95,2.26,.55,.56,timber,2)
    box('TV | solid chassis',(-1.95,1.73,1.13),(1.67,1.02,.09),black,.035)
    tv=box('TV | SCREEN',(-1.95,1.73,1.071),(1.55,.88,.012),screen,.004)
    tv['hotelTV']=str(idx)
    for dx in [-.57,.57]:box('TV | foot',(-1.95+dx,.85,1.12),(.28,.035,.27),black,.015)
    frame('ART | ECLIPSE PLACEHOLDER',-.2,-4.18,2.55,1.55)
    # Bedside area rug uses a solid woven-edged slab, never a single plane.
    box('RUG | bound wool',(-1.95,.015,-1.6),(3.65,.025,3.80),cloth,.008)
    for x in [-3.72,-.18]:box('RUG | woven binding',(x,.033,-1.6),(.025,.012,3.78),linen,.004)
    box('LUGGAGE | upholstered bench',(2.8,.49,-.96),(1.62,.17,.57),cloth,.06,collision=True)
    for x in [2.18,3.42]:
        for z in [-1.15,-.77]:leg('LUGGAGE | foot',(x,.23,z),.025,.45,gold)
    room_shell(cx,cz,idx<10)
    manifest.append({'id':idx,'label':name,'origin':[cx,6.005,cz],'bounds':{'x':[cx-4.92,cx+4.92],'z':[cz-4.96,cz+4.96]},'module':f'rooms/room-{idx:02}.mjs','glb':f'rooms/room-{idx:02}.glb','eclipseImageUrl':''})

# The west wing is explicitly NOT a bedroom or toilet. Keep elevator and circulation empty.
for id,cz in [(5,-69.5),(13,-48.5)]:
    current=CTX;room_shell(-88,cz,landing=True)
    bpy.ops.object.empty_add(type='CUBE',location=(-88,-cz,7));e=bpy.context.object;e.name=f'LANDING {id} | no furniture / no toilets / no export';e.empty_display_size=1;move_to(e,CTX)
current=CTX;origin=(-88,-76.5,6.005);yaw=0
shaft=box('CONTEXT | northwest elevator shaft keep-clear',(0,2.7,0),(2.92,5.4,1.96),contextmat,.01);shaft.display_type='WIRE';shaft.hide_render=True

audit=[]
for c in ROOT.children:
    if not c.name.startswith('EXPORT'):continue
    for obj in c.objects:
        if obj.type!='MESH':continue
        bm=bmesh.new();bm.from_mesh(obj.data)
        bad=sum(not e.is_manifold for e in bm.edges)
        loose=sum(not v.link_edges for v in bm.verts)
        if bad or loose:audit.append({'object':obj.name,'nonManifoldEdges':bad,'looseVertices':loose})
        bmesh.ops.recalc_face_normals(bm,faces=bm.faces);bm.to_mesh(obj.data);bm.free()
if audit:raise RuntimeError(json.dumps(audit))

# Export only solid furniture for each independently importable room.
for entry in manifest:
    col=next(c for c in ROOT.children if c.get('roomId')==entry['id'])
    bpy.ops.object.select_all(action='DESELECT')
    for o in col.objects:o.select_set(True)
    bpy.context.view_layer.objects.active=next(o for o in col.objects if o.type=='MESH')
    bpy.ops.export_scene.gltf(filepath=str(OUT/entry['glb']),export_format='GLB',use_selection=True,export_extras=True,export_yup=True,export_apply=True)
    # World-space collider boxes from explicitly marked solid furniture only.
    colliders=[]
    for o in col.objects:
        if not o.get('hotelCollision'):continue
        corners=[o.matrix_world@Vector(v) for v in o.bound_box]
        xs=[v.x for v in corners];ys=[v.z for v in corners];zs=[-v.y for v in corners]
        colliders.append({'name':o.name,'min':[min(xs),min(ys),min(zs)],'max':[max(xs),max(ys),max(zs)]})
    entry['colliders']=colliders
    (OUT/'rooms'/f"room-{entry['id']:02}.json").write_text(json.dumps(entry,indent=2))
(OUT/'rooms.json').write_text(json.dumps({'version':1,'coordinateSystem':'Three.js Y-up; Blender (x,-z,y)','rooms':manifest,'landings':[{'id':5,'bounds':[-93,-83,-80,-59]},{'id':13,'bounds':[-93,-83,-59,-38]}]},indent=2))
(OUT/'manifold-audit.json').write_text(json.dumps({'meshCount':sum(o.type=='MESH' for c in ROOT.children if c.name.startswith('EXPORT') for o in c.objects),'nonManifoldObjects':audit,'status':'PASS — every furniture mesh is closed manifold; outward normals recalculated'},indent=2))

def area(name,at,power,size):
    bpy.ops.object.light_add(type='AREA',location=at);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;move_to(o,LIGHTS)
area('PREVIEW | broad daylight',(-72,55,25),6500,30)
area('PREVIEW | warm fill',(-89,75,17),1800,12)
bpy.ops.object.camera_add();cam=bpy.context.object;move_to(cam,LIGHTS);scene.camera=cam
def camera(at,target,ortho):
    cam.location=at;cam.rotation_euler=(Vector(target)-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=ortho
camera((-53,40,48),(-73,58,6),62)
for a in bpy.context.screen.areas:
    if a.type=='VIEW_3D':
        a.spaces.active.region_3d.view_distance=62;a.spaces.active.region_3d.view_location=(-73,58,7)
scene['README']='Six independent furnished guest rooms at exact source coordinates. West landings remain clear. Export collections contain only closed solid furniture; context shell excluded from GLBs. TV remote has hotelRemote custom property. Git channel prompts are authoritative.'
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'sunset76-upstairs-editable.blend'))
scene.render.filepath=str(OUT/'previews'/'upstairs-layout.png');bpy.ops.render.render(write_still=True)
# Single-room beauty and alternate layout preview, no cross-room clutter.
for entry in [manifest[0],manifest[1]]:
    for col in ROOT.children:
        if col.name.startswith('EXPORT'):col.hide_render=col.get('roomId')!=entry['id']
    CTX.hide_render=True
    cx,_,cz=entry['origin'];camera((cx+9,-cz-11,18),(cx,-cz,7),12.8)
    scene.render.filepath=str(OUT/'previews'/f"room-{entry['id']:02}.png");bpy.ops.render.render(write_still=True)
print('HOTEL76 COMPLETE',len(manifest),'rooms; all closed manifold; GLBs exported')
