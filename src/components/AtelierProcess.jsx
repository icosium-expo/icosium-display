import React from 'react';
import { showroomImages, enseignesImages, standsImages } from '../galerie/imagesConfig';

const points = [
  { title: 'Conception & design graphique', desc: 'Création visuelle, chartes graphiques et modélisation 3D de vos projets.' },
  { title: 'Showrooms sur mesure', desc: 'Espaces commerciaux exclusifs, agencement et mobilier dédié.' },
  { title: 'Enseignes lumineuses & signalétique', desc: 'Caissons lumineux, lettres boîtiers relief LED et totems.' },
  { title: 'Usinage CNC & découpe', desc: 'Panneaux bois, aluminium et plastiques usinés sur machine CNC.' }
];

const steps = [
  { num: '01', title: 'Brief & cahier des charges', desc: 'Analyse de vos objectifs et de votre identité.' },
  { num: '02', title: 'Conception 3D & plans cotés', desc: 'Rendus photoréalistes et validation visuelle.' },
  { num: '03', title: 'Fabrication en atelier', desc: 'Usinage CNC, éclairage LED et finitions.' },
  { num: '04', title: 'Pose & installation sur site', desc: 'Installation clé en main sur votre site ou votre salon.' }
];

const photos = [
  { src: showroomImages[4] || standsImages[0], alt: 'Showroom aménagé par Icosium Display', cls: 'row-span-2' },
  { src: enseignesImages[2] || standsImages[1], alt: 'Enseigne lumineuse fabriquée en atelier', cls: 'aspect-square' },
  { src: standsImages[8] || standsImages[0], alt: 'Stand d’exposition monté sur site', cls: 'aspect-square' }
];

export default function AtelierProcess() {
  return (
    <section id="atelier" className="py-20 sm:py-24 lg:py-32 bg-white border-y border-[#DDE1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Texte + savoir-faire */}
          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A94F14]">Savoir-faire local</p>
            <h2 className="font-display mt-4 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1F2430] text-balance leading-[1.08]">
              Notre atelier et showroom à Bachdjerah, Alger.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-prose text-pretty">
              Contrairement aux intermédiaires, nous maîtrisons toute la chaîne de production : de la première
              esquisse sur écran jusqu’à l’assemblage en atelier et l’installation sur site.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {points.map((p) => (
                <li key={p.title} className="rounded-2xl bg-[#F1F3F6] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                  <span aria-hidden="true" className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#DF7D23] text-sm font-bold text-[#1F2430]">✓</span>
                  <h3 className="font-bold text-[#1F2430]">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Mosaïque photo */}
          <div data-reveal style={{ '--d': '150ms' }} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {photos.map((p, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl bg-slate-200 ${p.cls}`}>
                  {p.src && (
                    <img
                      src={p.src}
                      alt={p.alt}
                      width="800"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-6 rounded-2xl bg-[#142850] px-5 py-3 text-white shadow-xl">
              <p className="font-display text-2xl font-extrabold text-[#F2A03A] tabular-nums">100&nbsp;%</p>
              <p className="text-xs font-semibold text-slate-200">fabriqué en atelier à Alger</p>
            </div>
          </div>
        </div>

        {/* Méthode en 4 étapes */}
        <div data-reveal className="mt-24">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1F2430]">Notre méthode en 4 étapes</h3>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.num} className="group relative rounded-2xl border border-[#DDE1E8] p-6 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-slate-900/10">
                <span className="font-display text-5xl font-extrabold text-slate-200 transition-colors duration-500 group-hover:text-[#A94F14] tabular-nums">{s.num}</span>
                <h4 className="mt-4 font-bold text-[#1F2430]">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
