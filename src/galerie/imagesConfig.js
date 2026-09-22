// src/galerie/imagesConfig.js
// Configuration automatique des images

// Tri naturel
const naturalSort = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map(([, url]) => url);

// ========== STANDS (93 images) ==========
const standsModules = import.meta.glob('./stands/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});
export const standsImages = naturalSort(standsModules);

// ========== SHOWROOMS (28 images) ==========
const showroomModules = import.meta.glob('./showrooms/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});
export const showroomImages = naturalSort(showroomModules);

// ========== ENSEIGNES (3 images) ==========
const enseignesModules = import.meta.glob('./enseignes/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});
export const enseignesImages = naturalSort(enseignesModules);

// ========== SALONS RÉGIONAUX (22 images) ==========
const salonsModules = import.meta.glob('./salons-regionaux/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});
export const salonsImages = naturalSort(salonsModules);

// ========== IMAGES HERO (depuis galerie/hero/) ==========
const heroModules = import.meta.glob('./hero/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});
export const heroImages = naturalSort(heroModules);

// ========== IMAGES SALONS SAFEX ==========
const safexModules = import.meta.glob('./images/*.{jpeg,jpg,png,webp}', {
  eager: true, query: '?url', import: 'default'
});

// On récupère spécifiquement fpa, jazagro, fia
const findByName = (modules, name) => {
  const key = Object.keys(modules).find(k => k.toLowerCase().includes(name.toLowerCase()));
  return key ? modules[key] : null;
};

export const salonsSafexImages = {
  fpaImg: findByName(safexModules, 'fpa'),
  jazagroImg: findByName(safexModules, 'jazagro'),
  fiaImg: findByName(safexModules, 'fia'),
  algeriaImg: findByName(safexModules, 'algeria')
};

// ========== LOG DEBUG ==========
if (import.meta.env.DEV) {
  console.log('🖼️ Images chargées :', {
    hero: heroImages.length,
    stands: standsImages.length,
    showrooms: showroomImages.length,
    enseignes: enseignesImages.length,
    salons: salonsImages.length
  });
  console.log('🎯 Hero:', heroImages);
  console.log('🎯 Salons SAFEX:', salonsSafexImages);
}