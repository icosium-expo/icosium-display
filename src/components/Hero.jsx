import React from 'react';
import { heroImages } from '../galerie/imagesConfig';

export default function Hero({ currentSlide, setCurrentSlide }) {
  return (
    <section id="accueil" className="relative bg-[#0B132B] text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-[#FF6B00]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse"></span>
              <span>Agence Publicitaire Spécialisée dans les Stands, Showrooms et Enseignes Lumineuses</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              Donnez une envergure <span className="text-[#FF6B00]">Exceptionnelle</span> à Votre Marque.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-normal">
              De la Conception 3D Jusqu'à la Fabrication de Vos Stands, Showrooms et Enseignes Lumineuses Dans Notre Atelier à Alger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#FF6B00] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-center transition shadow-xl shadow-orange-500/30 flex items-center justify-center space-x-2">
                <span>Lancer votre projet 3D</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#expertise" className="bg-[#1C2541] hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl text-center transition border border-slate-700 flex items-center justify-center">
                Explorer nos services
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-[#FF6B00]/30 shadow-2xl bg-slate-900">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <img src={img} alt={`Stand d'exposition ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-60"></div>
                </div>
              ))}

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#FF6B00] w-8' : 'bg-white/50 hover:bg-white w-3'}`}
                    aria-label={`Aller à la diapositive ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}