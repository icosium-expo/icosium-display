import React, { useState } from 'react';
import {
  standsImages,
  showroomImages,
  enseignesImages,
  salonsImages
} from '../galerie/imagesConfig';

const categories = [
  {
    id: 'stands',
    label: 'Stands',
    images: standsImages,
    title: 'Stands institutionnels',
    text: 'Salons et foires professionnelles : conception architecturale sur mesure, structures bois, éclairage LED intégré et mobilier dédié.'
  },
  {
    id: 'enseignes',
    label: 'Enseignes',
    images: enseignesImages.length ? enseignesImages : standsImages.slice(0, 6),
    title: 'Enseignes lumineuses & LED',
    text: 'Caissons lumineux, lettres relief LED, totems et signalétique extérieure. Visibilité optimale de jour comme de nuit.'
  },
  {
    id: 'showrooms',
    label: 'Showrooms',
    images: showroomImages,
    title: 'Aménagement commercial',
    text: 'Agencement haut de gamme pour showrooms et espaces de vente, avec un éclairage étudié et un mobilier sur mesure.'
  },
  {
    id: 'salons',
    label: 'Salons régionaux',
    images: salonsImages,
    title: 'Salons régionaux',
    text: 'DJAZAGRO, FPA, FIA : structures bois, éclairage LED intégré et finitions haut de gamme pour valoriser votre marque.'
  }
];

// Rythme de formats pour un rendu « mosaïque » sans décalage de mise en page
const ratios = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/3]'];
const PAGE = 12;

export default function GallerySection({ onImageClick }) {
  const [active, setActive] = useState('stands');
  const [shown, setShown] = useState(PAGE);
  const cat = categories.find((c) => c.id === active);
  const visible = cat.images.slice(0, shown);

  const select = (id) => {
    setActive(id);
    setShown(PAGE);
  };

  const onKeyDown = (e) => {
    const i = categories.findIndex((c) => c.id === active);
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % categories.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + categories.length) % categories.length;
    if (next !== null) {
      e.preventDefault();
      select(categories[next].id);
      document.getElementById(`tab-${categories[next].id}`)?.focus();
    }
  };

  return (
    <section id="realisations" className="py-20 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-3xl mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A94F14]">Portfolio</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1F2430] text-balance leading-[1.08]">
            Nos réalisations, en images.
          </h2>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            Choisissez une catégorie puis cliquez sur une photo pour l’agrandir.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Catégories de réalisations"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="galerie-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => select(c.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A94F14] focus-visible:ring-offset-2 ${
                  on
                    ? 'bg-[#142850] text-white'
                    : 'bg-[#F1F3F6] text-[#1F2430] hover:bg-[#142850] hover:text-white'
                }`}
              >
                {c.label}
                <span className={`text-xs tabular-nums ${on ? 'text-[#F2A03A]' : 'text-slate-500'}`}>{c.images.length}</span>
              </button>
            );
          })}
        </div>

        <div id="galerie-panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`}>
          <div className="grid lg:grid-cols-12 gap-6 mb-8 items-end">
            <h3 className="lg:col-span-5 font-display text-2xl font-bold text-[#1F2430]">{cat.title}</h3>
            <p className="lg:col-span-7 text-slate-600 text-pretty">{cat.text}</p>
          </div>

          <ul className="columns-2 lg:columns-3 gap-3 sm:gap-4 [&>li]:mb-3 sm:[&>li]:mb-4">
            {visible.map((src, i) => (
              <li key={`${cat.id}-${i}`} className="break-inside-avoid">
                <button
                  onClick={() => onImageClick({ list: cat.images, index: i })}
                  aria-label={`Agrandir ${cat.title}, image ${i + 1} sur ${cat.images.length}`}
                  className={`group relative block w-full overflow-hidden rounded-2xl bg-slate-200 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A94F14] focus-visible:ring-offset-2 ${ratios[i % ratios.length]}`}
                >
                  <img
                    src={src}
                    alt={`${cat.title} – image ${i + 1}`}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1F2430] opacity-0 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    ⤢
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {shown < cat.images.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShown((n) => n + PAGE)}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#DF7D23] px-8 py-3.5 font-bold text-[#1F2430] transition hover:bg-[#F2A03A] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A94F14] focus-visible:ring-offset-2"
              >
                Voir plus de photos
                <span className="text-sm tabular-nums">({cat.images.length - shown})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
