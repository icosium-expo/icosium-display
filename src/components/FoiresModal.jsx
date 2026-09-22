import React, { useState, useEffect } from 'react';
import { foiresFutures, wilayasStats } from '../data/foires';

export default function FoiresModal({ onClose }) {
  const [filtreWilaya, setFiltreWilaya] = useState('Toutes');

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
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ===== EN-TÊTE ===== */}
        <div className="bg-gradient-to-r from-[#0B132B] to-[#16223d] text-white px-8 py-6 flex items-center justify-between shrink-0 border-b-4 border-[#FF6B00]">
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              📅 Calendrier des Salons & Foires
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              <span className="text-[#FF6B00] font-bold">{foiresFutures.length}</span> événements à venir en Algérie
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-[#FF6B00] text-white w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* ===== FILTRES (FIXES + DESIGN PRO) ===== */}
        <div className="bg-white px-8 py-5 border-b border-slate-200 shrink-0 shadow-md">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {/* Bouton "Toutes" */}
            <button
              onClick={() => setFiltreWilaya('Toutes')}
              className={`group shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md ${
                filtreWilaya === 'Toutes'
                  ? 'bg-gradient-to-r from-[#FF6B00] to-[#ff8c33] text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#FF6B00] hover:text-[#FF6B00]'
              }`}
            >
              <span>🗂️</span>
              <span>Toutes</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                filtreWilaya === 'Toutes'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-[#FF6B00]'
              }`}>
                {foiresFutures.length}
              </span>
            </button>

            {/* Boutons par wilaya */}
            {wilayas.map(([wilaya, count]) => {
              const isActive = filtreWilaya === wilaya;
              return (
                <button
                  key={wilaya}
                  onClick={() => setFiltreWilaya(wilaya)}
                  className={`group shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B00] to-[#ff8c33] text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                  }`}
                >
                  <span>📍</span>
                  <span>{wilaya}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-[#FF6B00]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== LISTE (DÉFILE) ===== */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-slate-50">
          {foiresFiltrees.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-5xl">🔍</span>
              <p className="text-slate-500 mt-4 font-semibold">
                Aucune foire pour cette wilaya.
              </p>
            </div>
          ) : (
            foiresFiltrees.map((foire, i) => (
              <div
                key={i}
                className="group bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-white border-2 border-slate-100 hover:border-[#FF6B00] rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0B132B] mb-2 group-hover:text-[#FF6B00] transition">
                      {foire.nom}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {foire.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="text-[#FF6B00]">📍</span>
                        <span className="font-medium">{foire.lieu}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="text-[#FF6B00]">🗓</span>
                        <span className="font-medium">{foire.duree || 'À confirmer'}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="text-[#FF6B00]">🔁</span>
                        <span className="font-medium">{foire.periodicite}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="bg-gradient-to-br from-[#FF6B00] to-[#ff8c33] text-white text-sm font-black px-4 py-2 rounded-xl shadow-lg shadow-orange-500/30">
                      {foire.date}
                    </div>
                    <div className="text-xs text-slate-500 mt-3 font-bold uppercase tracking-wider">
                      {foire.wilaya}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ===== PIED ===== */}
        <div className="bg-slate-100 px-8 py-4 text-xs text-slate-500 text-center border-t border-slate-200 shrink-0">
          Source : <a href="https://www.eventseye.com/fairs/c0_salons_algerie.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B00] font-semibold">eventseye.com</a> · Mise à jour : 22/09/2026
        </div>
      </div>
    </div>
  );
}