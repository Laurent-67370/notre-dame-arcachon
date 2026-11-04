# Notre-Dame d’Arcachon — Visite 3D

Maquette interactive (Three.js) de l’église Notre-Dame d’Arcachon, interprétée à partir de photographies.
Les volumes principaux, la brique, la pierre, le clocher, le portail et les rosaces sont représentés ; les zones
non visibles sur les photos sont reconstituées de manière cohérente, sans valeur de relevé architectural.

## Visite

Glisser pour tourner, molette ou pincement pour zoomer, clic droit ou deux doigts pour déplacer le point de vue.
Cadrages extérieurs (vue d’ensemble, parvis, clocher, rosace), visite de la **nef** (sept piliers de pierre
de chaque côté, voûtes d’ogives aux voûtains rouges, tribune d’orgue, chœur) et de la **Chapelle des Marins**
vue depuis le hall d’entrée à travers ses parois vitrées. À l’intérieur, glisser fait tourner la tête.
Rotation automatique, deux ambiances lumineuses, galerie de photos et enregistrement d’une image.

## Contenu

- `index.html`, `assets/`, `photos/` : version compilée, servie telle quelle par GitHub Pages (branche `main`, dossier racine).
- `source/` : sources Vite (`src/church.js` extérieur et Chapelle des Marins, `src/nave.js` intérieur de la nef,
  `src/gallery.js` galerie de photos, `src/scene.js` scène et interface).

## Recompiler

```sh
cd source
mkdir -p public && cp -r ../photos public/
npm ci && npx vite build
rm -rf ../assets && cp -r dist/index.html dist/assets ..
```
