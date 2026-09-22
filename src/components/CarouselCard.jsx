import React from 'react';

export default function CarouselCard({
  images,
  slide,
  setSlide,
  isPaused,
  setIsPaused,
  enableAutoPause = false,
  onImageClick,
  category,
  title,
  description
}) {
  const goPrev = (e) => {
    e.stopPropagation();
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition duration-300 flex flex-col h-full">
      {/* IMAGE - hauteur fixe */}
      <div
        className="h-64 bg-slate-900 overflow-hidden relative group cursor-pointer shrink-0"
        onMouseEnter={enableAutoPause ? () => setIsPaused(true) : undefined}
        onMouseLeave={enableAutoPause ? () => setIsPaused(false) : undefined}
        onClick={() => onImageClick({ list: images, index: slide })}
      >
        <img
          src={images[slide]}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md font-medium">
          {slide + 1} / {images.length}
        </span>
        <div className="absolute bottom-3 right-3 flex space-x-1 z-10">
          <button
            onClick={goPrev}
            aria-label="Image précédente"
            className="w-8 h-8 bg-black/60 hover:bg-[#FF6B00] text-white rounded-full flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Image suivante"
            className="w-8 h-8 bg-black/60 hover:bg-[#FF6B00] text-white rounded-full flex items-center justify-center transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* TEXTE - titre réduit + description enrichie */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-base font-bold text-[#0B132B] mt-1 mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}