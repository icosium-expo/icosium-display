import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-lg mb-1">ICOSIUM DISPLAY</p>
          <p>Atelier & Showroom : Bachdjerah, Alger · Algérie</p>
          <p className="mt-1 text-slate-300">Tél : +213 (0) 550 88 66 40 / +213 (0) 552 94 00 09</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-white font-medium">info@icosium-expo.com / contact@icosium-expo.com</p>
          <p className="mt-2">© 2026 Icosium Display. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}