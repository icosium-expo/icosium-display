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
      <section className="py-8 bg-[#0B132B] border-y border-slate-800 relative overflow-hidden">
        {/* Titre */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#FF6B00] animate-pulse"></span>
              <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">
                Prochains Salons & Foires
              </span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs text-slate-400 hover:text-[#FF6B00] transition font-semibold"
            >
              Voir tout ({foiresFutures.length}) →
            </button>
          </div>
        </div>

        {/* Ticker défilant */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <div
            className="flex space-x-4 whitespace-nowrap"
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
                  className="inline-flex items-center space-x-3 bg-[#16223d] border border-slate-700 hover:border-[#FF6B00] rounded-xl px-4 py-3 transition"
                >
                  <span className={`${couleursBadge[compte.couleur]} text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap`}>
                    ⏱ {compte.texteCourt}
                  </span>
                  <span className="text-[#FF6B00] text-xs font-bold">{foire.date}</span>
                  <span className="text-white font-bold text-sm">{foire.nom}</span>
                  <span className="text-slate-400 text-xs">• {foire.wilaya}</span>
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