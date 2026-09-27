import React, { useEffect } from 'react';
import useDialog from '../hooks/useDialog';

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';

function ImageDialog({ modalImage, setModalImage }) {
  const dialogRef = useDialog();

  const goPrev = () =>
    setModalImage((m) => ({
      ...m,
      index: m.index === 0 ? m.list.length - 1 : m.index - 1
    }));

  const goNext = () =>
    setModalImage((m) => ({ ...m, index: (m.index + 1) % m.list.length }));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalImage(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [setModalImage]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overscroll-contain"
      onClick={() => setModalImage(null)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Agrandissement de l'image"
        tabIndex={-1}
        className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={modalImage.list[modalImage.index]}
          alt={`Réalisation ${modalImage.index + 1} sur ${modalImage.list.length}`}
          className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-700"
        />

        <button
          onClick={goPrev}
          className={`absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#DF7D23] hover:text-black text-white rounded-full flex items-center justify-center text-2xl transition-colors ${focusRing}`}
          aria-label="Image précédente"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          onClick={goNext}
          className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#DF7D23] hover:text-black text-white rounded-full flex items-center justify-center text-2xl transition-colors ${focusRing}`}
          aria-label="Image suivante"
        >
          <span aria-hidden="true">›</span>
        </button>
        <button
          onClick={() => setModalImage(null)}
          className={`absolute top-2 right-2 text-white bg-black/60 hover:bg-[#DF7D23] hover:text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors ${focusRing}`}
          aria-label="Fermer"
        >
          <span aria-hidden="true">✕</span>
        </button>
        <span
          aria-live="polite"
          className="absolute top-2 left-2 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full tabular-nums"
        >
          {modalImage.index + 1} / {modalImage.list.length}
        </span>
      </div>
    </div>
  );
}

export default function ImageModal({ modalImage, setModalImage }) {
  if (!modalImage) return null;
  return <ImageDialog modalImage={modalImage} setModalImage={setModalImage} />;
}
