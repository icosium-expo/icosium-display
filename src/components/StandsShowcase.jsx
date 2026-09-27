import React from 'react';
import { standsImages } from '../galerie/imagesConfig';

// Sélection de 5 stands répartis dans la galerie
const pick = (n) => Math.min(standsImages.length - 1, n);
const tiles = [
  { i: pick(2), cls: 'col-span-2 lg:row-span-2', label: 'Stand institutionnel' },
  { i: pick(15), cls: '', label: 'Structure bois & LED' },
  { i: pick(31), cls: '', label: 'Accueil & mobilier sur mesure' },
  { i: pick(52), cls: '', label: 'Écrans & signalétique' },
  { i: pick(70), cls: '', label: 'Éclairage intégré' }
];

export default function StandsShowcase({ onImageClick }) {
  if (!standsImages.length) return null;
  return (
    <section id="stands" className="py-20 sm:py-24 lg:py-32 bg-[#142850] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <div data-reveal className="lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F2A03A]">Stands d’exposition</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-balance leading-[1.08]">
              Des stands qui font <span className="text-gradient-gold">la différence</span>.
            </h2>
          </div>
          <p data-reveal style={{ '--d': '120ms' }} className="lg:col-span-5 text-lg text-slate-200 text-pretty">
            Conception 3D, fabrication en atelier et installation clé en main : chaque stand est pensé pour attirer,
            accueillir et convertir vos visiteurs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 sm:gap-4 lg:auto-rows-[15rem]">
          {tiles.map((t, k) => (
            <button
              key={k}
              data-reveal
              style={{ '--d': `${k * 80}ms` }}
              onClick={() => onImageClick({ list: standsImages, index: t.i })}
              aria-label={`Agrandir : ${t.label}`}
              className={`group relative overflow-hidden rounded-2xl bg-[#0D1B3A] cursor-zoom-in aspect-[4/3] lg:aspect-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A03A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142850] ${t.cls}`}
            >
              <img
                src={standsImages[t.i]}
                alt={t.label}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0D1B3A]/85 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-left">
                <span className="block h-0.5 w-8 bg-[#DF7D23] mb-2 transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                <span className="font-display text-sm sm:text-lg font-bold">{t.label}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#realisations"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#DF7D23] px-8 py-3.5 font-bold text-[#1F2430] transition hover:bg-[#F2A03A] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A03A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142850]"
          >
            Voir toute la galerie <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
