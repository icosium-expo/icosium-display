import React from 'react';
import logoSvg from '../assets/logo.svg';

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    const links = [
        {
            href: '#accueil',
            label: 'Accueil',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        },
        {
            href: '#expertise',
            label: 'Stands & Enseignes',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        },
        {
            href: '#atelier',
            label: 'Atelier',
            icon: (
                <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
            )
        },
        {
            href: '#salons',
            label: 'Salons et Foires',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        },
        {
            href: '#realisations',
            label: 'Réalisations',
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        }
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#0B132B] border-b border-slate-800 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-36 flex items-center justify-between">
                <div className="flex items-center shrink-0 py-2">
                    <a href="#accueil" className="block transition-transform hover:scale-105" aria-label="Icosium Display Accueil">
                        <img src={logoSvg} alt="Icosium Display Logo" className="h-32 sm:h-36 w-auto object-contain drop-shadow-lg" />
                    </a>
                </div>

                <nav className="hidden lg:flex items-center space-x-4 text-xs font-semibold text-slate-200">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group flex items-center space-x-1.5 bg-slate-900/40 hover:bg-[#FF6B00] px-3 py-2 rounded-xl transition duration-300"
                        >
                            <svg className="w-4 h-4 text-[#FF6B00] group-hover:text-black transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {link.icon}
                            </svg>
                            <span className="group-hover:text-black transition whitespace-nowrap">{link.label}</span>
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center space-x-6">
                    <div className="text-right text-xs text-slate-400 border-r border-slate-700 pr-6">
                        <p className="font-semibold text-white">Atelier & Showroom :</p>
                        <p>Bachdjerah, Alger</p>
                        <p className="text-[#FF6B00] font-medium mt-0.5">+213 (0) 550 88 66 40</p>
                        <p className="text-[#FF6B00] font-medium mt-0.5">info@icosium-expo.com</p>
                    </div>
                    <a href="#contact" className="bg-[#FF6B00] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/25 inline-flex items-center space-x-2 text-sm">
                        <span>Demander un Devis</span>
                    </a>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-300 hover:text-white focus:outline-none p-2"
                        aria-label="Ouvrir le menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#0B132B] border-t border-slate-800 px-6 pt-4 pb-6 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-200 hover:text-[#FF6B00] transition py-1 text-base font-semibold"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-slate-800 space-y-2">
                        <p className="text-xs text-slate-400 font-semibold">Atelier & Showroom : Bachdjerah, Alger</p>
                        <p className="text-xs text-slate-300">Tél : +213 (0) 550 88 66 40 / +213 (0) 552 94 00 09</p>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full bg-[#FF6B00] text-white px-5 py-3.5 rounded-xl font-bold hover:bg-orange-600 transition inline-block text-center text-sm shadow-lg shadow-orange-500/25 mt-2"
                        >
                            Demander un Devis
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}