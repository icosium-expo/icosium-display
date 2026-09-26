import React from 'react';

const items = [
  {
    num: '01',
    title: 'Salons et foires professionnelles',
    desc: 'Déploiement et installation de stands à travers les 69 wilayas. Logistique intégrée, montage rapide et respect absolu des délais pour tous vos événements professionnels.'
  },
  {
    num: '02',
    title: 'Enseignes lumineuses & signalétique',
    desc: 'Fabrication de caissons lumineux, lettres en relief (LED), totems et signalétique extérieure pour une visibilité optimale de jour comme de nuit.'
  },
  {
    num: '03',
    title: 'Modélisation 3D & découpe CNC',
    desc: 'Visualisation 3D photoréaliste avant fabrication. Usinage de précision sur bois, PVC, aluminium et panneaux pour des finitions irréprochables.'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-24 lg:py-32 bg-[#F1F3F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div data-reveal className="lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A94F14]">Solutions sur mesure</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1F2430] text-balance leading-[1.08]">
              L’excellence, de la conception à l’installation.
            </h2>
          </div>
          <p data-reveal style={{ '--d': '120ms' }} className="lg:col-span-5 text-lg text-slate-600 leading-relaxed text-pretty">
            Des espaces et des enseignes pensés pour maximiser votre visibilité et refléter votre identité visuelle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article
              key={item.num}
              data-reveal
              style={{ '--d': `${i * 100}ms` }}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-[#DDE1E8] overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/10 hover:border-transparent"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#DF7D23]/25 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#DF7D23] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-display text-6xl font-extrabold text-slate-200 transition-colors duration-500 group-hover:text-[#A94F14] tabular-nums">
                {item.num}
              </span>
              <h3 className="font-display mt-8 text-2xl font-bold text-[#1F2430] leading-snug text-balance">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-pretty">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
