import React, { useState, useEffect } from 'react';
import { foiresFutures, foiresPassees, wilayasStats, formatCompteARebours } from '../data/foires';
import FoireDetail from './FoireDetail';

// ========== ICÔNES SVG PROFESSIONNELLES ==========
const IconCalendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconFolder = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconRepeat = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IconCalendarDays = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
  </svg>
);

const IconClose = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ========== COMPOSANT ==========
export default function FoiresModal({ onClose }) {
  const [filtreWilaya, setFiltreWilaya] = useState('Toutes');
  const [onglet, setOnglet] = useState('futures');
  const [foireSelectionnee, setFoireSelectionnee] = useState(null);  // ← 3.2 AJOUTÉ

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (foireSelectionnee) {
          setFoireSelectionnee(null);
        } else {
          onClose();
        }
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, foireSelectionnee]);

  const listeSource = onglet === 'futures' ? foiresFutures : foiresPassees;
  const wilayas = Object.entries(wilayasStats).sort((a, b) => b[1] - a[1]);
  const foiresFiltrees = filtreWilaya === 'Toutes'
    ? listeSource
    : listeSource.filter((f) => f.wilaya === filtreWilaya);

  const couleursBadge = {
    red: 'bg-red-500 text-white',
    orange: 'bg-[#FF6B00] text-white',
    yellow: 'bg-yellow-400 text-yellow-900',
    blue: 'bg-blue-500 text-white',
    gray: 'bg-slate-200 text-slate-700'
  };

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
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF6B00]/20 border-2 border-[#FF6B00]/30 rounded-xl flex items-center justify-center text-[#FF6B00]">
              <IconCalendarDays />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">
                Calendrier des Salons & Foires
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                <span className="text-[#FF6B00] font-bold">{foiresFutures.length}</span> événements à venir
                {foiresPassees.length > 0 && (
                  <> · <span className="text-slate-500">{foiresPassees.length} passés</span></>
                )}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-[#FF6B00] text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Fermer"
          >
            <IconClose />
          </button>
        </div>

        {/* ===== ONGLETS ===== */}
        <div className="bg-white px-8 pt-4 pb-2 border-b border-slate-200 shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => { setOnglet('futures'); setFiltreWilaya('Toutes'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                onglet === 'futures'
                  ? 'bg-[#0B132B] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <IconCalendar />
              <span>Foires à venir</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                onglet === 'futures' ? 'bg-[#FF6B00] text-white' : 'bg-white text-slate-600'
              }`}>
                {foiresFutures.length}
              </span>
            </button>

            <button
              onClick={() => { setOnglet('passees'); setFiltreWilaya('Toutes'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                onglet === 'passees'
                  ? 'bg-[#0B132B] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <IconCheck />
              <span>Foires passées</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                onglet === 'passees' ? 'bg-[#FF6B00] text-white' : 'bg-white text-slate-600'
              }`}>
                {foiresPassees.length}
              </span>
            </button>
          </div>
        </div>

        {/* ===== FILTRES WILAYA ===== */}
        <div className="bg-white px-8 py-4 border-b border-slate-200 shrink-0 shadow-sm">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setFiltreWilaya('Toutes')}
              className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md ${
                filtreWilaya === 'Toutes'
                  ? 'bg-gradient-to-r from-[#FF6B00] to-[#ff8c33] text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#FF6B00] hover:text-[#FF6B00]'
              }`}
            >
              <IconFolder />
              <span>Toutes</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                filtreWilaya === 'Toutes' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {listeSource.length}
              </span>
            </button>

            {wilayas.map(([wilaya]) => {
              const isActive = filtreWilaya === wilaya;
              const countInList = listeSource.filter((f) => f.wilaya === wilaya).length;
              if (countInList === 0) return null;
              return (
                <button
                  key={wilaya}
                  onClick={() => setFiltreWilaya(wilaya)}
                  className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B00] to-[#ff8c33] text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                  }`}
                >
                  <IconMapPin />
                  <span>{wilaya}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {countInList}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== LISTE ===== */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-slate-50">
          {foiresFiltrees.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 text-slate-400">
                <IconCalendar />
              </div>
              <p className="text-slate-500 font-semibold">
                Aucune foire pour cette wilaya.
              </p>
            </div>
          ) : (
            foiresFiltrees.map((foire, i) => {
              const compte = formatCompteARebours(foire.dateSort);
              const estPassee = onglet === 'passees';
              return (
                <div
                  key={i}
                  onClick={() => setFoireSelectionnee(foire)}  // ← 3.3 AJOUTÉ
                  className={`group bg-white border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                    estPassee
                      ? 'border-slate-200 opacity-80 hover:opacity-100'
                      : 'border-slate-100 hover:border-[#FF6B00] hover:bg-gradient-to-r hover:from-orange-50 hover:to-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    {/* ===== COLONNE GAUCHE : Infos ===== */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-black mb-2 transition ${
                        estPassee ? 'text-slate-500' : 'text-[#0B132B] group-hover:text-[#FF6B00]'
                      }`}>
                        {foire.nom}
                        {estPassee && (
                          <span className="ml-2 text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                            Terminé
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {foire.description}
                      </p>

                      {/* === ALIGNEMENT PARFAIT : icône + texte === */}
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 text-slate-600">
                          <span className="text-[#FF6B00] flex items-center justify-center shrink-0">
                            <IconMapPin />
                          </span>
                          <span className="font-medium">{foire.lieu}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-slate-600">
                          <span className="text-[#FF6B00] flex items-center justify-center shrink-0">
                            <IconCalendar />
                          </span>
                          <span className="font-medium">{foire.duree || 'À confirmer'}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-slate-600">
                          <span className="text-[#FF6B00] flex items-center justify-center shrink-0">
                            <IconRepeat />
                          </span>
                          <span className="font-medium">{foire.periodicite}</span>
                        </span>
                      </div>
                    </div>

                    {/* ===== COLONNE DROITE : Badge + Date + Wilaya ===== */}
                    <div className="text-right shrink-0 space-y-3">
                      {!estPassee && (
                        <div className={`${couleursBadge[compte.couleur]} text-xs font-black px-3 py-1.5 rounded-full shadow-md whitespace-nowrap inline-flex items-center gap-1.5`}>
                          <span className="flex items-center justify-center shrink-0">
                            <IconClock />
                          </span>
                          <span>{compte.texte}</span>
                        </div>
                      )}
                      <div className={`text-sm font-black px-4 py-2 rounded-xl shadow-lg whitespace-nowrap ${
                        estPassee
                          ? 'bg-slate-300 text-slate-600 shadow-none'
                          : 'bg-gradient-to-br from-[#FF6B00] to-[#ff8c33] text-white shadow-orange-500/30'
                      }`}>
                        {foire.date}
                      </div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        {foire.wilaya}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ===== PIED ===== */}
        <div className="bg-slate-100 px-8 py-4 text-xs text-slate-500 text-center border-t border-slate-200 shrink-0">
          Source : <a href="https://www.eventseye.com/fairs/c0_salons_algerie.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B00] font-semibold">eventseye.com</a> · Mise à jour : 22/09/2026
        </div>
      </div>

      {/* ===== MODALE DE DÉTAIL (3.4 AJOUTÉ) ===== */}
      {foireSelectionnee && (
        <FoireDetail
          foire={foireSelectionnee}
          onClose={() => setFoireSelectionnee(null)}
        />
      )}
    </div>
  );
}