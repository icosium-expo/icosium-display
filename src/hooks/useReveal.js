import { useEffect } from 'react';

/**
 * Révèle en fondu les éléments [data-reveal] quand ils entrent dans le viewport.
 * Sans IntersectionObserver ou avec prefers-reduced-motion : tout est visible d'emblée.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
