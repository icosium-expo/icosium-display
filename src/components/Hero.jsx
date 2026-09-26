import React from 'react';
import { heroImages } from '../galerie/imagesConfig';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B132B]';

export default function Hero({ currentSlide, setCurrentSlide, heroPaused, setHeroPaused }) {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[#0B132B] text-white min-h-[min(calc(100svh-6rem),52rem)] flex items-center"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/85 to-[#0B132B]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-[#0B132B]/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p
            data-reveal
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-[#FF8A3D] mb-8"
          >
            <span className="h-px w-10 bg-[#FF8A3D]" aria-hidden="true" />
            Stands · Showrooms · Enseignes lumineuses
          </p>

          <h1
            data-reveal
            style={{ '--d': '100ms' }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-balance"
          >
            Donnez une envergure <span className="text-[#FF6B00]">exceptionnelle</span> à votre marque.
          </h1>

          <p
            data-reveal
            style={{ '--d': '200ms' }}
            className="mt-8 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl text-pretty"
          >
            De la conception 3D à la fabrication, nous réalisons vos stands, showrooms et enseignes
            lumineuses dans notre atelier d’Alger.
          </p>

          <div data-reveal style={{ '--d': '300ms' }} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className={`group inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-[#0B132B] font-bold px-8 py-4 rounded-full transition hover:bg-[#ff8533] hover:-translate-y-0.5 shadow-xl shadow-orange-500/25 ${focusRing}`}
            >
              Lancer votre projet 3D
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#realisations"
              className={`inline-flex items-center justify-center gap-2 border border-white/30 bg-white/5 backdrop-blur text-white font-semibold px-8 py-4 rounded-full transition hover:bg-white/15 ${focusRing}`}
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
            className={`w-11 h-11 rounded-full border border-white/30 bg-black/30 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors ${focusRing}`}
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
                    index === currentSlide ? 'w-10 bg-[#FF6B00]' : 'w-5 bg-white/40 group-hover:bg-white/80'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="ml-auto text-sm font-semibold text-slate-200 tabular-nums" aria-hidden="true">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
