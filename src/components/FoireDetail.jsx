import React, { useEffect } from 'react';
import { formatCompteARebours } from '../data/foires';

// Icônes SVG (réutilisées)
const IconClose = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconRepeat = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default function FoireDetail({ foire, onClose }) {
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

  const compte = formatCompteARebours(foire.dateSort);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="bg-gradient-to-r from-[#0B132B] to-[#16223d] text-white px-8 py-6 flex items-start justify-between shrink-0 border-b-4 border-[#FF6B00]">
          <div className="flex-1">
            <h2 className="text-2xl font-black tracking-tight mb-2">
              {foire.nom}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {foire.wilaya}
              </span>
              <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                {foire.periodicite}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-[#FF6B00] text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg ml-4"
            aria-label="Fermer"
          >
            <IconClose />
          </button>
        </div>

        {/* Contenu défilant */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-[#FF6B00] uppercase tracking-wider mb-3">
              À propos de ce salon
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              {foire.descriptionLongue || foire.description}
            </p>
          </div>

          {/* Informations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <IconCalendar />
                <span className="text-xs font-bold uppercase tracking-wider">Date de début</span>
              </div>
              <p className="text-lg font-black text-[#0B132B]">{foire.date}</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <IconClock />
                <span className="text-xs font-bold uppercase tracking-wider">Durée</span>
              </div>
              <p className="text-lg font-black text-[#0B132B]">{foire.duree || 'À confirmer'}</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 md:col-span-2">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <IconMapPin />
                <span className="text-xs font-bold uppercase tracking-wider">Lieu</span>
              </div>
              <p className="text-lg font-black text-[#0B132B]">{foire.lieu}</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <IconRepeat />
                <span className="text-xs font-bold uppercase tracking-wider">Périodicité</span>
              </div>
              <p className="text-lg font-black text-[#0B132B]">{foire.periodicite}</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-2">
                <IconClock />
                <span className="text-xs font-bold uppercase tracking-wider">Compte à rebours</span>
              </div>
              <p className="text-lg font-black text-[#FF6B00]">{compte.texte}</p>
            </div>
          </div>
        </div>

        {/* Pied */}
        <div className="bg-slate-100 px-8 py-4 text-xs text-slate-500 text-center border-t border-slate-200 shrink-0">
          Source : <a href="https://www.eventseye.com/fairs/c0_salons_algerie.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B00] font-semibold">eventseye.com</a>
        </div>
      </div>
    </div>
  );
}