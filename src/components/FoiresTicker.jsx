import React, { useState } from 'react';
import { foiresFutures, formatCompteARebours } from '../data/foires';
import FoiresModal from './FoiresModal';

export default function FoiresTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [...foiresFutures, ...foiresFutures];

  const couleursBadge = {
    red: 'bg-red-500 text-white',
    orange: 'bg-[#FF6B00] text-white',
    yellow: 'bg-yellow-400 text-yellow-900',
    blue: 'bg-blue-500 text-white',
    gray: 'bg-slate-200 text-slate-700'
  };

  return (
    <>
      <section className="py-6 sm:py-8 bg-[#0B132B] border-y border-slate-800 relative overflow-hidden">
        {/* Titre */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF6B00] animate-pulse shrink-0"></span>
              <span className="text-[#FF6B00] font-bold text-xs sm:text-sm uppercase tracking-wider truncate">
                Prochains Salons & Foires
              </span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs text-slate-400 hover:text-[#FF6B00] transition font-semibold whitespace-nowrap shrink-0"
            >
              Voir tout ({foiresFutures.length}) →
            </button>
          </div>
        </div>

        {/* Ticker */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <div
            className="flex space-x-3 sm:space-x-4 whitespace-nowrap"
            style={{
              animation: 'ticker 60s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {items.map((foire, i) => {
              const compte = formatCompteARebours(foire.dateSort);
              return (
                <div
                  key={i}
                  className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#16223d] border border-slate-700 hover:border-[#FF6B00] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 transition shrink-0"
                >
                  <span className={`${couleursBadge[compte.couleur]} text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap`}>
                    ⏱ {compte.texteCourt}
                  </span>
                  <span className="text-[#FF6B00] text-xs font-bold whitespace-nowrap">{foire.date}</span>
                  <span className="text-white font-bold text-xs sm:text-sm whitespace-nowrap">{foire.nom}</span>
                  <span className="text-slate-400 text-xs hidden sm:inline whitespace-nowrap">• {foire.wilaya}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isModalOpen && <FoiresModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}