import React, { useState, useEffect } from 'react';

export default function StatsSection() {
  const [count1, setCount1] = useState(0);
  const [count69, setCount69] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000;

    const animateCounters = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount1(Math.floor(progress * 100));
      setCount69(Math.floor(progress * 69));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const animationFrame = requestAnimationFrame(animateCounters);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="chiffres-cles" className="py-16 bg-[#0B132B] relative z-10 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 colonnes au lieu de 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

          {/* STAT 1 : 100% */}
          <div className="bg-[#090E1A] p-6 rounded-2xl shadow-2xl border border-slate-800 hover:border-[#FF6B00]/50 transition duration-300 group flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
              {count1}%
            </div>
            <p className="text-slate-300 text-xs font-semibold group-hover:text-[#FF6B00] transition duration-300">
              Atelier Intégré (Bachdjerah)
            </p>
          </div>

          {/* STAT 2 : 3D */}
          <div className="bg-[#090E1A] p-6 rounded-2xl shadow-2xl border border-slate-800 hover:border-[#FF6B00]/50 transition duration-300 group flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 animate-pulse drop-shadow-md">
              3D
            </div>
            <p className="text-slate-300 text-xs font-semibold group-hover:text-[#FF6B00] transition duration-300">
              Validation Visuelle Photoréaliste
            </p>
          </div>

          {/* STAT 3 : A → Z */}
          <div className="bg-[#090E1A] p-6 rounded-2xl shadow-2xl border border-slate-800 hover:border-[#FF6B00]/50 transition duration-300 group flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              A → Z
            </div>
            <p className="text-slate-300 text-xs font-semibold group-hover:text-[#FF6B00] transition duration-300">
              Design, Enseignes & Showrooms
            </p>
          </div>

          {/* STAT 4 : 69 Salons */}
          <div className="bg-[#090E1A] p-6 rounded-2xl shadow-2xl border border-slate-800 hover:border-[#FF6B00]/50 transition duration-300 group flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
              {count69}
            </div>
            <p className="text-slate-300 text-xs font-semibold group-hover:text-[#FF6B00] transition duration-300">
              Salons & Événements sur Mesure
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}