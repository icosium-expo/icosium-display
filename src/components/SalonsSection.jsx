import React from 'react';
import { salonsSafexImages } from '../galerie/imagesConfig';

export default function SalonsSection() {
  const salons = [
    {
      badge: 'Production Nationale',
      img: salonsSafexImages.fpaImg,
      alt: 'Foire de la Production Algérienne FPA',
      title: 'FPA 2026',
      subtitle: 'Industrie & Économie',
      date: 'Fin 2026',
      footer: 'Safex, Alger'
    },
    {
      badge: 'Agroalimentaire',
      img: salonsSafexImages.jazagroImg,
      alt: 'Salon DJAZAGRO',
      title: 'Salon DJAZAGRO',
      subtitle: 'Production Agroalimentaire',
      date: 'Printemps 2027',
      footer: 'Safex, Alger'
    },
    {
      badge: 'Événement Phare',
      img: salonsSafexImages.fiaImg,
      alt: "58e Édition Algiers International Fair",
      title: "FIA (Foire d'Alger)",
      subtitle: 'Commerce & Industrie',
      date: 'Juin 2027',
      footer: 'Exhibition Center, Pins Maritimes'
    }
  ];

  return (
    <section id="salons" className="py-20 sm:py-24 lg:py-32 bg-[#0A2A33] text-white">
      <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFC24D]">Présence nationale</p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 text-balance leading-[1.08] max-w-3xl">Au cœur des grands rendez-vous professionnels.</h2>
        <p className="text-slate-300 text-lg max-w-2xl text-pretty">De la FPA à DJAZAGRO et la FIA, nous accompagnons les exposants avec une rigueur absolue sur les délais.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {salons.map((s, i) => (
          <div
            key={i}
            className="group bg-[#0F3540] rounded-2xl border-2 border-slate-700 hover:border-[#FFB020] text-center flex flex-col justify-between relative shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer"
          >
            {/* Badge */}
            <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-slate-700 group-hover:bg-[#FFB020] text-[#0A2A33] text-xs font-extrabold px-3 py-0.5 rounded-full uppercase tracking-widest z-10 whitespace-nowrap transition duration-300 shadow-lg">
              {s.badge}
            </span>

            {/* Image */}
            <div className="w-full h-32 sm:h-36 bg-slate-900 overflow-hidden relative">
              <img
                src={s.img}
                alt={s.alt}
                width="400"
                height="288"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3540] via-transparent to-transparent"></div>
            </div>

            {/* Contenu */}
            <div className="p-4 sm:p-6 pt-2">
              <p className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-[#FFB020] transition-colors duration-300">
                {s.title}
              </p>
              <span className="text-xs text-[#FFB020] font-semibold uppercase tracking-wider block mb-2 transition duration-300 group-hover:text-amber-300">
                {s.subtitle}
              </span>
              <p className="text-xs text-slate-300 font-medium bg-black/30 py-1.5 px-2 rounded-lg mt-2 group-hover:bg-[#FFB020]/20 transition duration-300">
                {s.date}
              </p>
            </div>

            {/* Pied */}
            <div className="mx-4 sm:mx-6 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-700/60 text-xs text-slate-300 group-hover:text-slate-300 group-hover:border-[#FFB020]/30 transition duration-300">
              {s.footer}
            </div>
          </div>
        ))}

        {/* 4ème carte : Salons Régionaux */}
        <div className="group bg-[#123E4A] rounded-2xl border-2 border-slate-800 hover:border-[#FFB020] text-center flex flex-col justify-between transition duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
          {/* Badge */}
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-[#FFB020] text-[#0A2A33] text-xs font-extrabold px-3 py-0.5 rounded-full uppercase tracking-widest z-10 whitespace-nowrap shadow-lg">
            Déploiement National
          </span>

          <div className="w-full h-32 sm:h-36 bg-slate-900 overflow-hidden relative">
            {salonsSafexImages.algeriaImg && (
              <>
                <img
                  src={salonsSafexImages.algeriaImg}
                  alt="Carte de l'Algérie - 58 Wilayas couvertes"
                  width="400"
                  height="288"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123E4A] via-transparent to-transparent"></div>
              </>
            )}
          </div>

          <div className="p-4 sm:p-6 pt-2">
            <p className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#FFB020] transition-colors duration-300">
              Salons Régionaux
            </p>
            <span className="text-xs text-[#FFB020] font-semibold uppercase tracking-wider block mb-2 transition duration-300 group-hover:text-amber-300">
              Événements sur mesure
            </span>
            <p className="text-xs text-slate-300 font-medium bg-black/30 py-1.5 px-2 rounded-lg mt-2 group-hover:bg-[#FFB020]/20 transition duration-300">
              69 Wilayas couvertes
            </p>
          </div>

          <div className="mx-4 sm:mx-6 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-800 group-hover:border-[#FFB020]/30 text-xs text-slate-300 group-hover:text-slate-300 transition duration-300">
            Logistique intégrée · Déploiement national
          </div>
        </div>
      </div>
    </section>
  );
}