# Notre-Dame d’Arcachon — Visite 3D

Maquette interactive (Three.js) de l’église Notre-Dame d’Arcachon, interprétée à partir de photographies.
Les volumes principaux, la brique, la pierre, le clocher, le portail et les rosaces sont représentés ; les zones
non visibles sur les photos sont reconstituées de manière cohérente, sans valeur de relevé architectural.

## Visite

Glisser pour tourner, molette ou pincement pour zoomer, clic droit ou deux doigts pour déplacer le point de vue.
Quatre cadrages (vue d’ensemble, parvis, clocher, rosace), rotation automatique, deux ambiances lumineuses,
les photos sources et l’enregistrement d’une image.

## Contenu

- `index.html`, `assets/`, `photos/` : version compilée, servie telle quelle par GitHub Pages (branche `main`, dossier racine).
- `source/` : sources Vite (`src/church.js` pour la géométrie, `src/scene.js` pour la scène et l’interface).

## Recompiler

```sh
cd source
mkdir -p public && cp -r ../photos public/
npm ci && npx vite build
rm -rf ../assets && cp -r dist/index.html dist/assets ..
```
