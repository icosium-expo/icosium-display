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
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B132B]';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0B132B]/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-6">
        <a
          href="#accueil"
          className={`shrink-0 rounded-lg ${focusRing}`}
          aria-label="Icosium Display, retour à l'accueil"
        >
          <img
            src={logoSvg}
            alt="Icosium Display"
            width="120"
            height="64"
            className="h-[4.5rem] sm:h-20 w-auto object-contain"
          />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold text-slate-200 rounded-lg transition-colors hover:text-white hover:bg-white/10 ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+213550886640"
            className={`hidden xl:block text-sm font-semibold text-slate-200 hover:text-white transition-colors tabular-nums rounded ${focusRing}`}
          >
            +213 (0) 550 88 66 40
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 bg-[#FF6B00] text-[#0B132B] px-5 py-2.5 rounded-full font-bold text-sm transition hover:bg-[#ff8533] hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 ${focusRing}`}
          >
            Demander un devis
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden text-slate-200 hover:text-white p-2.5 rounded-lg ${focusRing}`}
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
        <div id="menu-mobile" className="lg:hidden bg-[#0B132B] border-t border-white/10 px-6 pt-4 pb-6">
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3.5 text-lg font-semibold text-slate-100 border-b border-white/5 hover:text-[#FF6B00] transition-colors ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-5 space-y-2 text-sm text-slate-300">
            <p>Atelier &amp; Showroom&nbsp;: Bachdjerah, Alger</p>
            <p className="tabular-nums">
              <a href="tel:+213550886640" className="hover:text-white">+213 (0) 550 88 66 40</a>
              {' / '}
              <a href="tel:+213552940009" className="hover:text-white">+213 (0) 552 94 00 09</a>
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-3 block w-full bg-[#FF6B00] text-[#0B132B] px-5 py-3.5 rounded-full font-bold text-center ${focusRing}`}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
