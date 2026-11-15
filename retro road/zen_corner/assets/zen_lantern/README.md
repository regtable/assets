# Zen lantern

Standalone 1.5 m lantern, reconstructed from the supplied partially corrupted TypeScript. The Blender file contains editable parts; append its objects or use the GLB for a static copy. The warm Blender point light is optional.

Browser module:

```js
import { createZenLantern, disposeZenLantern } from './zen_lantern.mjs';
const lantern = createZenLantern({ position: [0, 0, 0], rotationY: 0, scale: 1, addPointLight: true });
scene.add(lantern);
// When removed: disposeZenLantern(lantern);
```

The TS version imports `three` as a package; the MJS version imports Three.js r180 from jsDelivr. Point lights can be disabled for performance. The lantern is not automatically added to the Zen Corner module and has no built-in collision.
