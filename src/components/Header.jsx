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
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DF7D23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142850]';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[#142850]/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-6">
        <a
          href="#accueil"
          className={`shrink-0 rounded-lg ${focusRing}`}
          aria-label="Icosium Display, retour à l'accueil"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg shadow-black/30 ring-2 ring-[#DF7D23]/70">
              <img src={logoSvg} alt="" width="64" height="64" className="h-full w-full object-contain" />
            </span>
            <span className="hidden sm:flex flex-col leading-none" translate="no">
              <span className="font-display text-lg font-extrabold tracking-wide text-white">ICOSIUM</span>
              <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.42em] text-[#F2A03A]">DISPLAY</span>
            </span>
          </span>
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
            className={`btn-shine inline-flex items-center gap-2 bg-[#DF7D23] text-[#1F2430] px-5 py-2.5 rounded-full font-bold text-sm transition hover:bg-[#F2A03A] hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 ${focusRing}`}
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
        <div id="menu-mobile" className="lg:hidden bg-[#142850] border-t border-white/10 px-6 pt-4 pb-6">
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3.5 text-lg font-semibold text-slate-100 border-b border-white/5 hover:text-[#F2A03A] transition-colors ${focusRing}`}
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
              className={`mt-3 block w-full bg-[#DF7D23] text-[#1F2430] px-5 py-3.5 rounded-full font-bold text-center ${focusRing}`}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
