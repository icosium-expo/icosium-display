import React, { useState, useEffect } from 'react';
import { foiresFutures, wilayasStats } from '../data/foires';

export default function FoiresModal({ onClose }) {
  const [filtreWilaya, setFiltreWilaya] = useState('Toutes');

  // Fermer avec Échap
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const wilayas = Object.entries(wilayasStats).sort((a, b) => b[1] - a[1]);
  const foiresFiltrees = filtreWilaya === 'Toutes'
    ? foiresFutures
    : foiresFutures.filter((f) => f.wilaya === filtreWilaya);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="bg-[#0B132B] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold">Calendrier des Salons & Foires</h2>
            <p className="text-xs text-slate-400 mt-1">
              {foiresFutures.length} événements à venir en Algérie
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-[#FF6B00] text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl transition"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Filtres */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 overflow-x-auto">
          <div className="flex space-x-2">
            <button
              onClick={() => setFiltreWilaya('Toutes')}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                filtreWilaya === 'Toutes'
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-[#FF6B00]'
              }`}
            >
              Toutes ({foiresFutures.length})
            </button>
            {wilayas.map(([wilaya, count]) => (
              <button
                key={wilaya}
                onClick={() => setFiltreWilaya(wilaya)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  filtreWilaya === wilaya
                    ? 'bg-[#FF6B00] text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#FF6B00]'
                }`}
              >
                {wilaya} ({count})
              </button>
            ))}
          </div>
        </div>

        {/* Liste */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {foiresFiltrees.length === 0 ? (
            <p className="text-center text-slate-500 py-12">
              Aucune foire pour cette wilaya.
            </p>
          ) : (
            foiresFiltrees.map((foire, i) => (
              <div
                key={i}
                className="bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-[#FF6B00] rounded-xl p-5 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#0B132B] mb-1">
                      {foire.nom}
                    </h3>
                    <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                      {foire.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                      <span>📍 {foire.lieu}</span>
                      <span>🗓 {foire.duree || 'À confirmer'}</span>
                      <span>🔁 {foire.periodicite}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                      {foire.date}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 font-semibold">
                      {foire.wilaya}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pied */}
        <div className="bg-slate-100 px-6 py-3 text-xs text-slate-500 text-center border-t border-slate-200">
          Source : <a href="https://www.eventseye.com/fairs/c0_salons_algerie.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B00]">eventseye.com</a> · Mise à jour : 22/09/2026
        </div>
      </div>
    </div>
  );
}