import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 100, suffix: '%', label: 'Atelier intégré à Bachdjerah' },
  { value: '3D', label: 'Validation visuelle photoréaliste' },
  { value: 'A → Z', label: 'Design, enseignes & showrooms' },
  { value: 69, label: 'Salons & événements sur mesure' }
];

function useCountUp(target, start) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start || typeof target !== 'number') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    const t0 = Date.now();
    const id = setInterval(() => {
      const p = Math.min((Date.now() - t0) / 1600, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p >= 1) clearInterval(id);
    }, 32);
    return () => clearInterval(id);
  }, [target, start]);
  return n;
}

function Stat({ stat, start }) {
  const n = useCountUp(stat.value, start);
  const display = typeof stat.value === 'number' ? `${n}${stat.suffix || ''}` : stat.value;
  return (
    <div className="px-6 py-8 sm:py-10 text-center lg:text-left">
      <div className="font-display text-5xl lg:text-6xl font-extrabold text-gradient-gold tracking-tight tabular-nums">
        {display}
      </div>
      <p className="mt-3 text-sm sm:text-base text-slate-300 font-medium max-w-[16rem] mx-auto lg:mx-0 text-pretty">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    // Filet de sécurité : si l'observateur ne se déclenche pas, on lance quand même les compteurs
    const fallback = setTimeout(() => setVisible(true), 3000);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <section
      id="chiffres-cles"
      ref={ref}
      aria-label="Chiffres clés"
      className="bg-[#142850] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-white/10 lg:divide-x [&>*:nth-child(odd)]:border-r [&>*:nth-child(odd)]:border-white/10 lg:[&>*:nth-child(odd)]:border-r-0 [&>*:nth-child(n+3)]:border-t [&>*:nth-child(n+3)]:border-white/10 lg:[&>*:nth-child(n+3)]:border-t-0">
          {stats.map((s) => (
            <Stat key={s.label} stat={s} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
