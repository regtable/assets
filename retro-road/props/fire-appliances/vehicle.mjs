export async function createVehicle(loader, name) {
  const {scene} = await loader.loadAsync(new URL(name + '.glb', import.meta.url).href)
  return scene
}
