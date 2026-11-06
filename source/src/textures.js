import * as THREE from 'three';

// Matières tirées des photos de l'église (dossier public/textures).
// Le chargement est asynchrone : on redessine la scène dès qu'une image arrive.
const loader = new THREE.TextureLoader();
export function photoTex(name, repeat = [1, 1], { tile = true, offset = [0, 0] } = {}) {
  const t = loader.load(`./textures/${name}.jpg`, () => dispatchEvent(new Event('scene-dirty')));
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = tile ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.repeat.set(...repeat); t.offset.set(...offset); t.anisotropy = 8;
  return t;
}
