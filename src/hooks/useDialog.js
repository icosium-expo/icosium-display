import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Accessibilité des modales : focus initial, piège de focus (Tab / Maj+Tab)
 * et restauration du focus à la fermeture. Retourne la ref à poser sur le
 * conteneur du dialogue.
 */
export default function useDialog() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const previous = document.activeElement;
    node.focus({ preventScroll: true });

    const onKeyDown = (e) => {
      if (e.key !== 'Tab' || e.defaultPrevented) return;
      const items = [...node.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === node)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
      if (previous && previous.focus) previous.focus({ preventScroll: true });
    };
  }, []);

  return ref;
}
