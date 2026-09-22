import React, { useEffect } from 'react';

export default function ImageModal({ modalImage, setModalImage }) {
  useEffect(() => {
    if (!modalImage) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalImage(null);
      if (e.key === 'ArrowRight') {
        setModalImage((m) => ({ ...m, index: (m.index + 1) % m.list.length }));
      }
      if (e.key === 'ArrowLeft') {
        setModalImage((m) => ({
          ...m,
          index: m.index === 0 ? m.list.length - 1 : m.index - 1
        }));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImage, setModalImage]);

  if (!modalImage) return null;

  const goPrev = () =>
    setModalImage((m) => ({
      ...m,
      index: m.index === 0 ? m.list.length - 1 : m.index - 1
    }));

  const goNext = () =>
    setModalImage((m) => ({ ...m, index: (m.index + 1) % m.list.length }));

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={() => setModalImage(null)}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={modalImage.list[modalImage.index]}
          alt="Agrandissement"
          className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-700"
        />

        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#FF6B00] text-white rounded-full flex items-center justify-center text-2xl transition"
          aria-label="Image précédente"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#FF6B00] text-white rounded-full flex items-center justify-center text-2xl transition"
          aria-label="Image suivante"
        >
          ›
        </button>
        <button
          onClick={() => setModalImage(null)}
          className="absolute -top-12 right-0 text-white bg-white/20 hover:bg-[#FF6B00] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition"
          aria-label="Fermer"
        >
          ✕
        </button>
        <span className="absolute -top-12 left-0 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
          {modalImage.index + 1} / {modalImage.list.length}
        </span>
      </div>
    </div>
  );
}