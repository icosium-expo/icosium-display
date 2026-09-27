import React from 'react';
import { heroImages } from '../galerie/imagesConfig';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A94F14] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function Hero({ currentSlide, setCurrentSlide, heroPaused, setHeroPaused }) {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-white text-[#1F2430] min-h-[min(calc(100svh-6rem),52rem)] flex items-center"
    >
      {/* Diaporama plein cadre */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            width="1600"
            height="900"
            {...(index === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-out ${
              index === currentSlide ? 'opacity-100 hero-zoom' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-white/85 lg:bg-transparent" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/92 to-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p
            data-reveal
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-[#A94F14] mb-8"
          >
            <span className="h-px w-10 bg-[#A94F14]" aria-hidden="true" />
            Stands · Showrooms · Enseignes lumineuses
          </p>

          <h1
            data-reveal
            style={{ '--d': '100ms' }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-balance"
          >
            Donnez une envergure <span className="text-gradient-orange">exceptionnelle</span> à votre marque.
          </h1>

          <p
            data-reveal
            style={{ '--d': '200ms' }}
            className="mt-8 text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl text-pretty"
          >
            De la conception 3D à la fabrication, nous réalisons vos stands, showrooms et enseignes
            lumineuses dans notre atelier d’Alger.
          </p>

          <div data-reveal style={{ '--d': '300ms' }} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className={`btn-shine group inline-flex items-center justify-center gap-3 bg-[#DF7D23] text-[#1F2430] font-bold px-8 py-4 rounded-full transition hover:bg-[#F2A03A] hover:text-black hover:-translate-y-0.5 shadow-xl shadow-amber-500/25 ${focusRing}`}
            >
              Lancer votre projet 3D
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#realisations"
              className={`inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-[#1F2430] font-semibold px-8 py-4 rounded-full transition hover:bg-slate-100 hover:border-slate-400 ${focusRing}`}
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

      {/* Contrôles du diaporama */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <button
            onClick={() => setHeroPaused(!heroPaused)}
            aria-label={heroPaused ? 'Reprendre le diaporama' : 'Mettre le diaporama en pause'}
            className={`w-11 h-11 rounded-full border border-slate-300 bg-white/90 text-[#1F2430] flex items-center justify-center hover:bg-slate-100 transition-colors ${focusRing}`}
          >
            <span aria-hidden="true" className="text-sm leading-none">{heroPaused ? '▶' : '❚❚'}</span>
          </button>
          <div className="flex items-center" role="group" aria-label="Choisir une diapositive">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Diapositive ${index + 1} sur ${heroImages.length}`}
                aria-current={index === currentSlide ? 'true' : undefined}
                className={`h-11 px-1.5 flex items-center group rounded-full ${focusRing}`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'w-10 bg-[#DF7D23]' : 'w-5 bg-slate-300 group-hover:bg-slate-500'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="ml-auto text-sm font-semibold text-slate-600 tabular-nums" aria-hidden="true">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
