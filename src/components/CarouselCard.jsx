import React from 'react';

const ring =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black';

export default function CarouselCard({
  images,
  slide,
  setSlide,
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

  const open = () => onImageClick({ list: images, index: slide });

  return (
    <article className="group/card flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 transition duration-500 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1">
      <div
        className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-zoom-in group"
        role="button"
        tabIndex={0}
        aria-label={`Agrandir l'image : ${title}`}
        onMouseEnter={enableAutoPause ? () => setIsPaused(true) : undefined}
        onMouseLeave={enableAutoPause ? () => setIsPaused(false) : undefined}
        onFocus={enableAutoPause ? () => setIsPaused(true) : undefined}
        onBlur={enableAutoPause ? () => setIsPaused(false) : undefined}
        onClick={open}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        }}
      >
        <img
          src={images[slide]}
          alt={`${title} – image ${slide + 1} sur ${images.length}`}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />

        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full tabular-nums">
          {slide + 1} / {images.length}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#0A2A33] flex items-center justify-center text-base opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
        >
          ⤢
        </span>

        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <button
            onClick={goPrev}
            aria-label="Image précédente"
            className={`w-11 h-11 bg-black/60 backdrop-blur hover:bg-[#FFB020] hover:text-[#0A2A33] text-white rounded-full flex items-center justify-center text-xl transition-colors ${ring}`}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            onClick={goNext}
            aria-label="Image suivante"
            className={`w-11 h-11 bg-black/60 backdrop-blur hover:bg-[#FFB020] hover:text-[#0A2A33] text-white rounded-full flex items-center justify-center text-xl transition-colors ${ring}`}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>

      <div className="p-7 lg:p-8 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">{category}</p>
        <h3 className="font-display mt-2 text-2xl font-bold text-[#0A2A33] leading-snug">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed text-pretty">{description}</p>
      </div>
    </article>
  );
}
