import React from 'react';
import logoSvg from '../assets/logo.svg';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#atelier', label: 'Atelier' },
  { href: '#salons', label: 'Salons & Foires' },
  { href: '#realisations', label: 'Réalisations' }
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A94F14] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-6">
        <a
          href="#accueil"
          className={`shrink-0 rounded-lg ${focusRing}`}
          aria-label="Icosium Display, retour à l'accueil"
        >
          <img
            src={logoSvg}
            alt="Icosium Display"
            width="76"
            height="76"
            className="h-[4.5rem] w-[4.5rem] sm:h-[5.5rem] sm:w-[5.5rem] object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold text-slate-700 rounded-lg transition-colors duration-200 hover:bg-[#142850] hover:text-white focus-visible:bg-[#142850] focus-visible:text-white ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+213550886640"
            className={`hidden xl:block text-sm font-semibold text-slate-700 hover:text-[#1F2430] transition-colors tabular-nums rounded ${focusRing}`}
          >
            +213 (0) 550 88 66 40
          </a>
          <a
            href="#contact"
            className={`btn-shine inline-flex items-center gap-2 bg-[#DF7D23] text-[#1F2430] px-5 py-2.5 rounded-full font-bold text-sm transition hover:bg-[#F2A03A] hover:text-black hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 ${focusRing}`}
          >
            Demander un devis
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden text-[#1F2430] hover:text-black p-2.5 rounded-lg ${focusRing}`}
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-mobile"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="menu-mobile" className="lg:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6">
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-3.5 text-lg font-semibold text-[#1F2430] rounded-lg transition-colors duration-200 hover:bg-[#142850] hover:text-white active:bg-[#142850] active:text-white ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-5 space-y-2 text-sm text-slate-600">
            <p>Atelier &amp; Showroom&nbsp;: Bachdjerah, Alger</p>
            <p className="tabular-nums">
              <a href="tel:+213550886640" className="hover:text-[#1F2430]">+213 (0) 550 88 66 40</a>
              {' / '}
              <a href="tel:+213552940009" className="hover:text-[#1F2430]">+213 (0) 552 94 00 09</a>
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`btn-shine mt-3 block w-full bg-[#DF7D23] text-[#1F2430] hover:text-black px-5 py-3.5 rounded-full font-bold text-center ${focusRing}`}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
