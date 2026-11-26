# Fire appliance manoeuvre correction

The old fleet used straight waypoint legs, assigned yaw immediately from the next waypoint, then added 180 degrees on its last leg. That caused hard turns and a visible forward-to-reverse facing jump.

The replacement keeps the existing fleet API, bay centres X=-27.5 / -20 and parked centre Z=-13.5. It uses arc-length-sampled cubic curves and tangential vehicle headings, acceleration/braking, and a separate reverse gear. Each returning engine drives west past its bay to X=bay−8 at Z=-30, stops for 1.1 seconds, reverses on a curve to line up north-facing at Z=-25.7, and reverses straight to the original parked pose. Reverse never begins by facing the wrong way or by driving into the door forwards. Both pickup and pump use the same manoeuvre stages and remain queued one at a time.

Garage doors must be at least 96% open before departing or manoeuvring near a bay. Doors stay requested until the final parked stop. Beacon and siren behavior remain encapsulated; ambient mute and visibility silence audio. No global pointerdown/keydown audio handlers.

The tunnel remains an off-site dispatch portal: the appliance moves fully past the tunnel mouth, becomes hidden, waits five seconds, and is placed on the inbound lane while hidden. This transport is not performed on the visible road or during parking.

Run `node test-motion.mjs` and `node test-fleet.mjs`. Tests cover smooth visible heading/position changes, forward/reverse travel direction, the stopped gear change, exact final parking, closed-door wait, sequential dispatch, muting and cleanup. Tests are deterministic simulation checks; final appearance should be checked in the space.

Update only the external fleet module and its manifest. No changes to the existing cleanup, merchant, Zen or upstairs-room patch schedules are required.
