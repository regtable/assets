"""Original editable interior asset; Blender coordinates X/right,Y/north,Z/up.
glTF local X/right,Y/up,Z/south; place root at world (-73,0,20).
No live application code is modified by this generator.
"""
import bpy, math, os, json
from mathutils import Vector
HERE=os.path.dirname(os.path.abspath(__file__))
OUT=HERE if os.path.basename(HERE)=='emergency-interior' else os.path.join(HERE,'props','emergency-interior')
os.makedirs(OUT,exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
def mat(name,c,metal=0,rough=.55,emit=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*c,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*c,1)
    p.inputs['Metallic'].default_value=metal; p.inputs['Roughness'].default_value=rough
    p.inputs['Emission Color'].default_value=(*c,1); p.inputs['Emission Strength'].default_value=emit
    return m
cream=mat('Warm plaster',(.76,.74,.65)); sage=mat('Hospital sage',(.19,.36,.29))
oak=mat('Smoked oak',(.16,.082,.036)); brass=mat('Brushed warm brass',(.72,.46,.13),.8,.27)
white=mat('Clinical enamel',(.85,.87,.82),.1); steel=mat('Satin stainless steel',(.43,.49,.5),.8,.3)
dark=mat('Graphite',(.028,.038,.037)); rubber=mat('Rubber',(.015,.019,.02),0,.85)
teal=mat('Petrol upholstery',(.045,.22,.23)); linen=mat('Warm linen',(.76,.73,.62),0,.9)
red=mat('Fire service oxblood',(.36,.035,.025)); yellow=mat('Reflective amber',(.9,.6,.04))
blue=mat('Medical blue',(.055,.27,.42)); screen=mat('Screen phosphor',(.06,.65,.48),0,.4,1)
glow=mat('Warm diffuser',(.95,.81,.55),0,.4,2); green=mat('Plant foliage',(.065,.21,.095))
floorM=mat('Warm terrazzo',(.4,.44,.39),0,.82); upperM=mat('Station oak flooring',(.28,.15,.07),0,.75)
roots={}
for n in ['Hospital_Ground','FireStation_Upper','Stairs_And_Pole']:
    o=bpy.data.objects.new(n,None); bpy.context.collection.objects.link(o); roots[n]=o
    o['asset_license']='CC0-1.0'; o['placement_world']='-73,0,20'; o['units']='metres'
root=roots['Hospital_Ground']; colliders=[]; doors=[]
def finish(o,n,m,parent=None):
    o.name=n; o.parent=parent or root; o.data.materials.append(m); return o
def box(n,p,s,m,bev=.035,solid=False,parent=None):
    bpy.ops.mesh.primitive_cube_add(size=1,location=p); o=bpy.context.object; o.scale=s
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bev:
        b=o.modifiers.new('Soft edges','BEVEL'); b.width=bev; b.segments=3; bpy.ops.object.modifier_apply(modifier=b.name)
    finish(o,n,m,parent)
    if solid: colliders.append({'name':n,'group':(parent or root).name,'center':[p[0],p[2],-p[1]],'size':[s[0],s[2],s[1]]})
    return o
def cyl(n,p,r,h,m,rot=(0,0,0),verts=20,parent=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts,radius=r,depth=h,location=p,rotation=rot)
    o=finish(bpy.context.object,n,m,parent)
    for f in o.data.polygons: f.use_smooth=len(f.vertices)==4
    return o
def tube(n,a,b,r,m,parent=None):
    a,b=Vector(a),Vector(b); o=cyl(n,(a+b)/2,r,(b-a).length,m,parent=parent)
    o.rotation_euler=(b-a).to_track_quat('Z','Y').to_euler(); return o
def torus(n,p,r,minor,m,rot=(0,0,0)):
    bpy.ops.mesh.primitive_torus_add(major_segments=28,minor_segments=8,location=p,major_radius=r,minor_radius=minor,rotation=rot)
    o=finish(bpy.context.object,n,m)
    for f in o.data.polygons:f.use_smooth=True
    return o
def text(n,word,p,size,m):
    bpy.ops.object.text_add(location=p,rotation=(math.pi/2,0,0)); o=bpy.context.object
    o.data.body=word; o.data.size=size; o.data.align_x='CENTER';o.data.align_y='CENTER';o.data.extrude=.003
    bpy.ops.object.convert(target='MESH'); return finish(bpy.context.object,n,m)
def wall(n,x,y,w,d,base=0,h=4):
    box(n,(x,y,base+h/2),(w,d,h),cream,.015,True)
    box(n+' sage dado',(x,y,base+.57),(w+.025,d+.025,1.08),sage,.005)
    box(n+' brass rail',(x,y,base+1.15),(w+.04,d+.04,.035),brass,.005)
    box(n+' oak skirting',(x,y,base+.09),(w+.04,d+.04,.17),oak,.005)
def door(n,x,y,base=0,w=1.5):
    # south-facing partition: actual hinge at left edge, leaf local transforms.
    pivot=bpy.data.objects.new(n+'_Hinge',None); bpy.context.collection.objects.link(pivot)
    pivot.parent=root; pivot.location=(x-w/2,y,base)
    def leafbox(label,p,s,m):
        o=box(label,p,s,m,parent=pivot); o.location=Vector(p)-pivot.location;return o
    leafbox(n+'_Leaf',(x,y,base+1.4),(w,.075,2.8),sage)
    leafbox(n+'_VisionPanel',(x,y-.042,base+1.94),(.55,.012,.6),blue)
    leafbox(n+'_Kickplate',(x,y-.045,base+.24),(w-.12,.015,.36),steel)
    for side in [-1,1]:
        leafbox(n+'_Handle',(x+w*.35,y+side*.07,base+1.05),(.22,.035,.035),brass)
    for xx in [x-w/2-.06,x+w/2+.06]: box(n+'_Jamb',(xx,y,base+1.43),(.1,.16,2.86),oak)
    box(n+'_Header',(x,y,base+2.86),(w+.22,.16,.1),oak)
    # Separate opening and closing actions, for future mixer integration.
    pivot.rotation_euler.z=0; pivot.keyframe_insert(data_path='rotation_euler',frame=1)
    pivot.rotation_euler.z=-math.pi/2; pivot.keyframe_insert(data_path='rotation_euler',frame=31)
    pivot.animation_data.action.name=n+'_Open'; pivot.rotation_euler.z=0
    doors.append({'node':pivot.name,'clip':n+'_Open','hinge':[x-w/2,base,-y],'width':w,'height':2.8})
def room(n,x,y,w,d,base=0):
    wall(n+'_West',x-w/2,y,.16,d,base);wall(n+'_East',x+w/2,y,.16,d,base)
    wall(n+'_North',x,y+d/2,w,.16,base)
    # centred south doorway; no floating or door-mounted labels.
    span=(w-1.7)/2
    for s in [-1,1]:wall(n+'_South',x+s*(.85+span/2),y-d/2,span,.16,base)
    box(n+'_Lintel',(x,y-d/2,base+3.5),(1.7,.16,1),cream,.015)
    door(n,x,y-d/2,base)
def feet(n,x,y,z,w,d,m,h=.65):
    for sx in [-1,1]:
        for sy in [-1,1]:tube(n,(x+sx*(w/2-.15),y+sy*(d/2-.15),z),(x+sx*(w/2-.15),y+sy*(d/2-.15),z+h),.027,m)
def chair(n,x,y,z=0,angle=0):
    assembly=bpy.data.objects.new(n,None);bpy.context.collection.objects.link(assembly);assembly.parent=root
    objects_before=set(bpy.context.scene.objects)
    box(n+'_Seat',(x,y,z+.48),(.72,.72,.15),teal,.09)
    box(n+'_Back',(x,y+.31,z+.86),(.72,.12,.68),teal,.08)
    feet(n+'_Leg',x,y,z,.72,.72,steel,.44)
    for s in [-1,1]:tube(n+'_Arm',(x+s*.37,y-.3,z+.7),(x+s*.37,y+.3,z+.7),.035,oak)
    for o in set(bpy.context.scene.objects)-objects_before:o.parent=assembly;o.location-=Vector((x,y,z))
    assembly.location=(x,y,z);assembly.rotation_euler.z=angle
def castor(n,x,y,z,r=.12):
    cyl(n+'_Tyre',(x,y,z),r,.09,rubber,(0,math.pi/2,0),16)
    cyl(n+'_Hub',(x,y,z),r*.55,.095,steel,(0,math.pi/2,0),16)
def bed(n,x,y,z=0,trolley=False):
    w=.85 if trolley else 1.25;d=2.15
    box(n+'_Base',(x,y,z+.64),(w,d,.18),steel,.06,True)
    box(n+'_Mattress',(x,y,z+.85),(w-.06,d-.06,.26),white,.1)
    box(n+'_Blanket',(x,y-.34,z+1),(w-.09,1.3,.09),sage,.055)
    box(n+'_Pillow',(x,y+.7,z+1.06),(w*.78,.44,.16),linen,.075)
    for s in [-1,1]:
        tube(n+'_SideRail',(x+s*w*.52,y-.68,z+1.12),(x+s*w*.52,y+.65,z+1.12),.025,steel)
        for yy in [-.65,.65]:tube(n+'_RailSupport',(x+s*w*.52,y+yy,z+.65),(x+s*w*.52,y+yy,z+1.12),.022,steel)
        for yy in [-.78,.78]:
            tube(n+'_Leg',(x+s*w*.38,y+yy,z+.17),(x+s*w*.38,y+yy,z+.62),.03,steel)
            castor(n,x+s*w*.38,y+yy,z+.15)
    for yy in [-1.06,1.06]:box(n+'_EndBoard',(x,y+yy,z+1.03),(w,.08,.42),white,.07)
    if not trolley:
        tube(n+'_IV',(x+.95,y+.7,z+.1),(x+.95,y+.7,z+2.35),.023,steel)
        for a in range(5):
            ang=a*math.tau/5;tube(n+'_IVBase',(x+.95,y+.7,z+.1),(x+.95+.35*math.cos(ang),y+.7+.35*math.sin(ang),z+.1),.02,steel)
        tube(n+'_IVHook',(x+.95,y+.7,z+2.35),(x+.65,y+.7,z+2.35),.016,steel)
        box(n+'_FluidBag',(x+.67,y+.7,z+2.1),(.18,.06,.3),white,.05)
        tube(n+'_IVLine',(x+.67,y+.7,z+1.95),(x+.65,y+.7,z+1.35),.006,blue)
        box(n+'_MonitorStand',(x-.94,y+.65,z+.65),(.52,.5,1.3),cream,.04,True)
        box(n+'_ECG',(x-.94,y+.65,z+1.54),(.62,.16,.42),dark,.04)
        box(n+'_ECGScreen',(x-.94,y+.555,z+1.54),(.51,.012,.31),blue,.005)
        points=[(-.23,0),(-.12,0),(-.07,.06),(-.02,-.06),(.025,.12),(.065,0),(.22,0)]
        for (a,b),(c,dz) in zip(points,points[1:]):tube(n+'_ECGTrace',(x-.94+a,y+.54,z+1.54+b),(x-.94+c,y+.54,z+1.54+dz),.004,screen)
def cabinet(n,x,y,z,w=1.6,h=.9):
    box(n,(x,y,z+h/2),(w,.6,h),cream,.025,True)
    box(n+'_Top',(x,y,z+h+.035),(w+.06,.66,.07),white)
    for sx in [-1,1]:
        box(n+'_Door',(x+sx*w*.24,y-.315,z+h/2),(w*.46,.025,h-.12),sage,.008)
        tube(n+'_Pull',(x+sx*w*.08,y-.35,z+h*.42),(x+sx*w*.08,y-.35,z+h*.65),.012,brass)
def sink(n,x,y,z):
    cabinet(n,x,y,z)
    # raised rim and recessed dark bowl rather than a flat box.
    box(n+'_Bowl',(x,y-.03,z+.925),(.57,.39,.025),dark,.09)
    for yy in [-.25,.2]:box(n+'_Rim',(x,y+yy,z+.95),(.65,.07,.065),white,.03)
    for xx in [-.31,.31]:box(n+'_Rim',(x+xx,y-.025,z+.95),(.07,.42,.065),white,.03)
    tube(n+'_Tap',(x,y+.23,z+.96),(x,y+.23,z+1.23),.023,steel)
    tube(n+'_TapSpout',(x,y+.23,z+1.23),(x,y+.03,z+1.23),.023,steel)
def plant(n,x,y,z=0):
    cyl(n+'_Pot',(x,y,z+.28),.33,.55,cream)
    for i in range(7):
        a=i*2.4;tip=(x+.4*math.cos(a),y+.4*math.sin(a),z+1+i*.065)
        tube(n+'_Stem',(x,y,z+.45),tip,.009,green)
        bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=6,location=tip);o=bpy.context.object;o.scale=(.12,.3,.055);o.rotation_euler=(.4,.2,a);finish(o,n+'_Leaf',green)
def lightpanel(n,x,y,z):
    box(n+'_Housing',(x,y,z),(2,.6,.12),dark)
    box(n+'_Diffuser',(x,y,z-.075),(1.87,.5,.035),glow)
    for xx in [x-.7,x+.7]:tube(n+'_CeilingMount',(xx,y,z+.06),(xx,y,5.73 if z<6 else 11.75),.013,steel)

# Downstairs: coherent furnished zones and uninterrupted entrance-to-exit spine.
box('Ground terrazzo',(0,0,-.075),(39.6,39.6,.15),floorM,.0)
for x in range(-18,20,4):
    for y in range(-18,20,4):
        box('Terrazzo joint',(x,y,.004),(3.98,.012,.006),steel,0)
        box('Terrazzo joint',(x,y,.004),(.012,3.98,.006),steel,0)
# low waiting courtyard, timber back wall and grounded reception lettering.
box('Reception island',(9,-9,.62),(5.4,1.7,1.24),oak,.14,True)
box('Reception sage front',(9,-9.86,.65),(5,.055,.85),sage,.025)
box('Reception worktop',(9,-9,1.29),(5.65,1.95,.12),cream,.06)
text('Reception inlaid lettering','RECEPTION',(9,-9.898,.69),.29,brass)
for x in [7.5,10.5]:
    box('Computer',(x,-8.9,1.68),(.7,.11,.45),dark)
    box('Computer screen',(x,-8.965,1.68),(.62,.01,.37),blue,.005)
    tube('Monitor neck',(x,-8.9,1.31),(x,-8.9,1.5),.04,steel)
    box('Keyboard',(x,-9.35,1.365),(.55,.2,.03),dark,.01)
    chair('Reception staff chair',x,-7)
for y in [-14,-17]:
    for x in [4,5.15,6.3,10,11.15,12.3]:chair('Waiting chair',x,y)
for x in [5.15,11.15]:
    box('Waiting table',(x,-15.5,.42),(1.8,.75,.12),oak,.09)
    feet('Table legs',x,-15.5,0,1.8,.75,steel,.38)
    for i in range(3):box('Magazine',(x-.5+i*.4,-15.5,.5),(.27,.36,.03),[sage,linen,red][i],.007)
for p in [(2,-18),(14,-18),(16,-6),(-4,-17)]:plant('Indoor plant',*p)
box('Reception rear screen',(9,-5,1.6),(7,.2,3.2),oak,.04,True)
for x in [6,7,8,9,10,11,12]:box('Oak slat',(x,-5.12,1.6),(.075,.04,2.9),brass,.005)
# Two quiet exam rooms and a central urgent-treatment room.
for n,x,y,w,d in [('Exam_A',-12,-12,13,11),('Exam_B',-12,1,13,11),('Treatment',1,9,10,11)]:
    room(n,x,y,w,d);bed(n+'_PatientBed',x-1,y+1)
    sink(n+'_Handwash',x+w/2-1.1,y+d/2-.5,0)
    cabinet(n+'_Supplies',x-w/2+2,y+d/2-.5,0,2.4,1.65)
    chair(n+'_Visitor',x+2.4,y-1)
    cyl(n+'_ClinicalBin',(x+3,y+2,.35),.22,.7,white)
    box(n+'_SharpsContainer',(x+3,y+2,.8),(.32,.3,.2),yellow)
    lightpanel(n+'_ClinicalLight',x,y,3.8)
# Nursing counter and equipment bay.
cabinet('Nursing station',-1,-2,0,4)
for x in [-2,0]:box('Nursing workstation',(x,-2,1.25),(.65,.1,.42),dark)
bed('Transport stretcher',14,-1,trolley=True)
for x in [15,17]:
    box('Wheelchair seat',(x,2,.59),(.62,.62,.12),teal,.06)
    box('Wheelchair back',(x,2.3,.98),(.62,.1,.7),teal,.055)
    for s in [-1,1]:
        tube('Wheelchair frame',(x+s*.33,1.7,.17),(x+s*.33,2.3,.93),.025,steel)
        torus('Wheelchair tyre',(x+s*.39,2.16,.45),.39,.035,rubber,(0,math.pi/2,0))
        torus('Wheelchair handrim',(x+s*.44,2.16,.45),.33,.013,steel,(0,math.pi/2,0))
        for i in range(8):
            a=i*math.tau/8;tube('Wheel spokes',(x+s*.39,2.16,.45),(x+s*.39,2.16+.37*math.cos(a),.45+.37*math.sin(a)),.007,steel)
        castor('Wheelchair front caster',x+s*.25,1.55,.12,.09)
        box('Wheelchair armrest',(x+s*.37,2,.82),(.055,.65,.075),dark)
        box('Wheelchair footrest',(x+s*.2,1.4,.2),(.24,.28,.04),steel)
    tube('Wheelchair axle',(x-.4,2.16,.45),(x+.4,2.16,.45),.027,steel)
for x in [-16,-13]:cabinet('Rear clinical storage',x,17,0,2.4,1.8)
for x,y in [(0,-13),(8,-12),(-3,0),(8,1),(-11,13)]:lightpanel('Hospital overhead',x,y,5.55)

# Upper deck, with genuine stair opening and circular pole opening.
root=roots['FireStation_Upper']
def deck_patch(n,x0,x1,y0,y1):
    if x1>x0 and y1>y0:box(n,((x0+x1)/2,(y0+y1)/2,5.87),(x1-x0,y1-y0,.26),upperM,0)
# Partition grid produces non-overlapping slabs; omit stair and pole tiles.
xs=[-19.8,-9.2,-6.8,10,18,19.8];ys=[-19.8,5,14,13.8,16.2,19.8];ys=sorted(set(ys))
for a,b in zip(xs,xs[1:]):
    for c,d in zip(ys,ys[1:]):
        if a>=10 and b<=18 and c>=5 and d<=14:continue
        if a>=-9.2 and b<=-6.8 and c>=13.8 and d<=16.2:continue
        deck_patch('Upper deck',(a),(b),(c),(d))
# square-to-circle ring around pole: actual open hole, not an overlaid disk.
verts=[];faces=[];N=48
for i in range(N):
    a=i*math.tau/N;co,si=math.cos(a),math.sin(a);extent=1.2/max(abs(co),abs(si))
    verts.extend([(-8+co*1.02,15+si*1.02,6),(-8+co*extent,15+si*extent,6),(-8+co*1.02,15+si*1.02,5.74),(-8+co*extent,15+si*extent,5.74)])
for i in range(N):
    j=(i+1)%N; a=i*4;b=j*4
    faces.extend([(a,b,b+1,a+1),(a+2,a+3,b+3,b+2),(a,a+2,b+2,b)])
me=bpy.data.meshes.new('Pole opening mesh');me.from_pydata(verts,[],faces);me.update();o=bpy.data.objects.new('Upper deck pole opening',me);bpy.context.collection.objects.link(o);finish(o,o.name,upperM)
for x in range(-19,20):
    # Decorative seams kept outside openings.
    box('South oak floor seam',(x,-7.4,6.005),(.012,24.7,.009),oak,0)
# Crew mess and kitchen along southern wall.
for x in [-16,-13,-10,-7]:cabinet('Station kitchen',x,-18.5,6,2.8)
sink('Kitchen sink',-16,-18.5,6)
box('Range',(-10,-18.5,6.95),(1.9,.62,.08),steel)
for x in [-10.5,-9.5]:
    for y in [-18.7,-18.3]:torus('Cooktop ring',(x,y,7.01),.12,.018,dark)
box('Extractor',(-10,-18.5,8.1),(2.2,.9,.24),steel)
box('Fridge',(-3.7,-18.5,7.05),(1.05,.8,2.1),white,.08,True)
tube('Fridge handle',(-3.4,-18.94,6.8),(-3.4,-18.94,7.7),.018,steel)
box('Mess table',(-11,-12.5,6.78),(4,1.5,.12),oak,.07,True)
feet('Mess table leg',-11,-12.5,6.1,4,1.5,dark)
for x in [-12.4,-11,-9.6]:
    chair('Mess chair',x,-13.8,6);chair('Mess chair',x,-11.2,6,math.pi)
    cyl('Coffee mug',(x,-12.5,6.99),.07,.16,cream)
# Lounge, supported side tables and mounted briefing screen.
for x in [-.8,2.2]:
    box('Crew sofa base',(x,-11,6.35),(2.65,1,.42),oak,.12,True)
    box('Crew sofa seat',(x,-11,6.62),(2.4,.9,.2),teal,.1)
    box('Crew sofa back',(x,-10.55,7.02),(2.65,.24,.9),teal,.12)
    for s in [-1,1]:box('Crew sofa arm',(x+s*1.22,-11,6.84),(.2,1,.5),teal,.07)
box('Lounge coffee table',(1,-13,6.48),(3.2,1.25,.13),oak,.08)
feet('Lounge table leg',1,-13,6,3.2,1.25,steel,.43)
box('Briefing partition',(1,-8,7.55),(7,.16,3.1),cream,.015,True)
box('Mounted briefing monitor',(1,-8.11,8),(2.5,.12,1.3),dark,.05)
box('Briefing screen',(1,-8.18,8),(2.33,.01,1.12),blue,.01)
# Dormitory west; six made beds, lockers, partition and working doorway.
room('CrewDorm',-12,1,13,12,6)
for x in [-16,-12,-8]:
    for y in [-2,3]:
        box('Crew bed frame',(x,y,6.3),(1.35,2.25,.25),oak,.05,True)
        box('Crew mattress',(x,y,6.53),(1.28,2.15,.23),linen,.1)
        box('Crew blanket',(x,y-.4,6.68),(1.3,1.3,.1),red,.065)
        box('Crew pillow',(x,y+.75,6.76),(.95,.4,.17),white,.08)
        box('Bedside locker',(x+.94,y+.65,6.4),(.45,.55,.8),oak,.025)
# Dispatch office east/south, overlooking front street in future shell.
room('Dispatch',14,-12,10,10,6)
box('Dispatch desk',(14,-10,6.76),(4,1.1,.15),oak,.06,True);feet('Dispatch desk legs',14,-10,6,4,1.1,steel)
for x in [12.8,14,15.2]:
    box('Dispatch monitor',(x,-9.8,7.24),(.85,.12,.5),dark)
    box('Dispatch screen',(x,-9.87,7.24),(.75,.015,.4),blue,.008)
    tube('Monitor stand',(x,-9.8,6.84),(x,-9.8,7.05),.025,steel)
chair('Dispatch chair',14,-11.6,6)
box('Radio base',(16,-10.2,6.91),(.5,.3,.14),dark)
tube('Radio aerial',(16.17,-10.2,6.96),(16.17,-10.2,7.46),.01,dark)
# Ready area beside pole: boots, coats, helmets, hose and extinguishers.
for x in [-4,-2,0,2,4]:
    for s in [-1,1]:box('Gear locker side',(x+s*.76,18.1,7.2),(.08,.65,2.4),dark,.015,True)
    for z in [6.06,8.34]:box('Gear locker cap',(x,18.1,z),(1.6,.65,.12),dark,.025)
    box('Locker backing',(x,18.43,7.2),(1.5,.04,2.25),red)
    box('Locker shelf',(x,18.1,8.02),(1.48,.58,.045),steel)
    box('Turnout coat',(x,18.08,7.22),(.64,.25,.82),linen,.08)
    for s in [-1,1]:
        o=box('Coat sleeve',(x+s*.44,18.08,7.24),(.25,.25,.72),linen,.07);o.rotation_euler.y=s*.24
        box('Reflective cuff',(x+s*.5,17.94,6.98),(.2,.015,.07),yellow,.005)
        box('Firefighter boot',(x+s*.23,17.95,6.26),(.25,.45,.45),rubber,.045)
    box('Coat reflective band',(x,17.94,7.08),(.6,.015,.06),yellow,.005)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=20,ring_count=10,location=(x,18.05,8.3));o=bpy.context.object;o.scale=(.31,.28,.22);finish(o,'Fire helmet',yellow)
    box('Helmet brim',(x,18.01,8.2),(.7,.62,.045),yellow,.07)
for y in [10.5,12.5]:
    cyl('Extinguisher',(6,y,6.48),.18,.83,red)
    tube('Extinguisher grip',(6,y,6.9),(6.25,y,6.9),.035,dark)
    tube('Extinguisher hose',(6.12,y,6.88),(6.25,y,6.4),.026,rubber)
for i in range(5):torus('Coiled hose',(3,15,6.18+i*.045),.63-i*.1,.045,linen)
box('Hose shelf',(3,15,6.1),(1.7,1.7,.17),oak,.04,True)
# Fitness nook and rear handwashing facilities.
sink('Crew wash',-16,17.7,6)
for x in [-17,-14]:box('Crew storage', (x,12,7.15),(1.7,.65,2.3),oak,.04,True)
for x in [-1,1]:
    box('Exercise mat',(x,6,6.025),(1.25,2.8,.045),teal,.04)
    tube('Dumbbell',(x-.22,6,6.16),(x+.22,6,6.16),.025,steel)
    for s in [-1,1]:cyl('Dumbbell weight',(x+s*.2,6,6.16),.13,.08,dark,(0,math.pi/2,0))
for p in [(-5,-17),(7,-16),(7,16)]:plant('Crew plant',*p,z=6)
for x,y in [(-12,-12),(0,-12),(14,-12),(-12,1),(-1,9),(2,17)]:lightpanel('Station overhead',x,y,11.4)

# Switchback staircase: 36 x 166.7mm risers, 300mm going, two 2.4m-wide flights.
root=roots['Stairs_And_Pole']; stair_tops=[]
for flight,x in [(0,11.4),(1,15)]:
    for i in range(18):
        y=5.3+(i+.5)*.3 if flight==0 else 10.7-(i+.5)*.3
        z=(i+1)/6 if flight==0 else 3+(i+1)/6
        box('Stair_%d_Tread_%02d'%(flight,i+1),(x,y,z-.06),(2.4,.3,.12),oak,.01)
        box('Stair brass nosing',(x,y+(-.143 if flight==0 else .143),z+.006),(2.4,.035,.015),brass,.003)
        stair_tops.append({'center':[x,z,-y],'size':[2.4,.3],'flight':flight})
    for side in [-1,1]:
        xx=x+side*1.2;start=5.15 if flight==0 else 10.85;end=10.85 if flight==0 else 5.15
        z0=.05 if flight==0 else 3;z1=3 if flight==0 else 6
        tube('Stair stringer',(xx,start,z0-.1),(xx,end,z1-.1),.075,dark)
        tube('Stair handrail',(xx,start,z0+1.02),(xx,end,z1+1.02),.036,brass)
        for i in range(10):
            t=i/9; yy=start+(end-start)*t;zz=z0+(z1-z0)*t
            tube('Stair baluster',(xx,yy,zz),(xx,yy,zz+1),.018,dark)
box('Stair half landing',(13.2,11.925,2.93),(6,2.45,.14),oak,.015)
box('Stair top threshold',(15,5.15,5.93),(2.4,.3,.14),oak,.01)
for yy in [13.1]:
    tube('Landing railing',(10.2,yy,4.05),(16.2,yy,4.05),.035,brass)
    for xx in [10.2,11.2,12.2,13.2,14.2,15.2,16.2]:tube('Landing post',(xx,yy,3),(xx,yy,4.05),.018,dark)
# Landing guard only far edge; inner y=10.85 flight entrances remain open.
for xx in [10,18]:
    tube('Upper stair opening guard',(xx,5,7.1),(xx,14,7.1),.035,brass)
    for yy in [5,6,7,8,9,10,11,12,13,14]:tube('Upper stair post',(xx,yy,6),(xx,yy,7.1),.018,dark)
tube('Upper opening end guard',(10,14,7.1),(18,14,7.1),.035,brass)
# Gold fireman's pole, hole rim and three-sided guard with southern entry.
cyl('FirePole_Gold',(-8,15,5.8),.075,11.4,brass,verts=32)
torus('Pole hole brass rim',(-8,15,6.025),1.04,.045,brass)
cyl('Pole landing rubber pad',(-8,15,.022),.85,.045,rubber,verts=48)
cyl('Pole roof fixing',(-8,15,11.47),.23,.05,brass,verts=24)
for a,b in [((-9.2,13.8,7.1),(-9.2,16.2,7.1)),((-9.2,16.2,7.1),(-6.8,16.2,7.1)),((-6.8,16.2,7.1),(-6.8,13.8,7.1))]:tube('Pole guardrail',a,b,.035,brass)
for x,y in [(-9.2,13.8),(-9.2,16.2),(-6.8,16.2),(-6.8,13.8)]:tube('Pole guard post',(x,y,6),(x,y,7.1),.025,dark)

scene=bpy.context.scene;scene.frame_set(1)
manifest={'license':'CC0-1.0','units':'metres','placement_world':[-73,0,20],'gltf_axes':'X east, Y up, Z south',
 'footprint_local':{'min':[-20,0,-20],'max':[20,12,20]},'upper_floor_y':6,
 'front_door_world':[-53,0,30],'rear_door_world':[-83,0,0],
 'pole':{'node':'FirePole_Gold','local':[-8,0,-15],'world':[-81,0,5],'hole_radius':1.02,'entry_upper_y':6,'landing_y':0,'drop_is_runtime_behavior':True},
 'stairs':{'risers':36,'riser_height':1/6,'going':.3,'width':2.4,'treads':stair_tops,'half_landing':{'center':[13.2,3,-11.925],'size':[6,2.45]},'top_threshold':{'center':[15,6,-5.15],'size':[2.4,.3]}},
 'doors':doors,'static_boxes':colliders,'notes':['Furniture and partitions only: retain existing exterior shell and external doors.', 'GLB is visual geometry; implement collision, stair walking, pole sliding and door interactions later.', 'Door clips open in 1 second; reverse the clip for closing.','Upper floor has physical stairwell and pole holes.','Root nodes allow floor-by-floor culling. No door signs.']}
with open(os.path.join(OUT,'layout.json'),'w') as f:json.dump(manifest,f,indent=2)
# Editable source retains furniture parts and semantic object names.
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'hospital-fire-station.blend'))
# Batch static geometry by root/material for low draw calls. Keep door hierarchies.
groups={}
for o in list(scene.objects):
    if o.type!='MESH' or o.name=='FirePole_Gold':continue
    ancestor=o
    hinged=None
    while ancestor.parent:
        ancestor=ancestor.parent
        if ancestor.name.endswith('_Hinge'):hinged=ancestor
    if ancestor not in roots.values():continue
    target=hinged or ancestor
    world=o.matrix_world.copy();o.parent=target;o.matrix_world=world
    groups.setdefault((target.name,o.data.materials[0].name),[]).append(o)
for (p,m),obs in groups.items():
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs:o.select_set(True)
    bpy.context.view_layer.objects.active=obs[0]
    if len(obs)>1:bpy.ops.object.join()
    bpy.context.object.name=p+'__'+m
def export(filename,subset):
    bpy.ops.object.select_all(action='DESELECT')
    for o in scene.objects:
        ancestor=o
        while ancestor.parent:ancestor=ancestor.parent
        if ancestor in subset:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,filename),export_format='GLB',use_selection=True,export_yup=True,export_extras=True,export_animations=True,export_animation_mode='ACTIONS',export_cameras=False,export_lights=False)
export('hospital-fire-station.glb',list(roots.values()))
export('hospital-ground.glb',[roots['Hospital_Ground']])
export('fire-station-upper.glb',[roots['FireStation_Upper']])
export('stairs-and-pole.glb',[roots['Stairs_And_Pole']])
# Presentation studio excluded from exports; save a second editable render scene.
scene.world.use_nodes=True;bg=scene.world.node_tree.nodes['Background'];bg.inputs[0].default_value=(.32,.38,.4,1);bg.inputs[1].default_value=.65
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1500;scene.render.resolution_y=1100;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX'
for loc,power,size in [((0,0,22),19000,25),((8,-18,16),12000,18),((-20,15,15),14000,18)]:
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,3))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(43,-51,54));cam=bpy.context.object;scene.camera=cam;cam.data.type='ORTHO';cam.data.ortho_scale=60
def render(name,loc,target,scale,visible):
    for o in scene.objects:
        a=o
        while a.parent:a=a.parent
        if a in roots.values():o.hide_render=a.name not in visible
    cam.location=loc;cam.rotation_euler=(Vector(target)-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=scale
    scene.render.filepath=os.path.join(OUT,name+'.png');bpy.ops.render.render(write_still=True)
render('hospital-overview',(43,-51,54),(0,0,0),57,['Hospital_Ground','Stairs_And_Pole'])
render('fire-station-overview',(43,-51,54),(0,0,6),57,['FireStation_Upper','Stairs_And_Pole'])
render('hospital-reception',(23,-26,13),(8,-8,1),22,['Hospital_Ground'])
render('pole-and-stairs',(28,-28,25),(3,10,4),38,['FireStation_Upper','Stairs_And_Pole'])
print('EMERGENCY INTERIOR COMPLETE '+OUT)
