import React from 'react';
import CarouselCard from './CarouselCard';
import {
  standsImages,
  showroomImages,
  enseignesImages,
  salonsImages
} from '../galerie/imagesConfig';

export default function GallerySection({
  standSlide, setStandSlide,
  enseigneSlide, setEnseigneSlide,
  showroomSlide, setShowroomSlide,
  salonSlide, setSalonSlide,
  isPaused, setIsPaused,
  onImageClick
}) {
  return (
    <section id="realisations" className="py-20 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-3xl mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2410C]">Portfolio</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B132B] text-balance leading-[1.08]">
            Nos réalisations : stands, showrooms &amp; enseignes.
          </h2>
          <p className="mt-5 text-lg text-slate-600 text-pretty">
            Cliquez sur une image pour l’agrandir en plein écran, ou parcourez nos conceptions avec les flèches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* 1. STANDS */}
          <CarouselCard
            images={standsImages}
            slide={standSlide}
            setSlide={setStandSlide}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            enableAutoPause={true}
            onImageClick={onImageClick}
            category="Stand d'Exposition"
            title="Stands Institutionnels"
             description="Salons et foires professionnelles sur tout le territoire national : conception architecturale sur mesure, structures bois, éclairage LED intégré et mobilier dédié."

          />

          {/* 2. SUPPORT PUBLICITAIRE */}
          <CarouselCard
            images={enseignesImages.length ? enseignesImages : standsImages.slice(0, 3)}
            slide={enseigneSlide}
            setSlide={setEnseigneSlide}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            enableAutoPause={true}
            onImageClick={onImageClick}
            category="Support Publicitaire"
            title="Enseignes Lumineuses & LED"
            description="Fabrication de caissons lumineux, lettres relief LED, totems et signalétique extérieure. Visibilité optimale de jour comme de nuit pour attirer l'attention sur votre façade commerciale."
          />

          {/* 3. SHOWROOMS */}
          <CarouselCard
            images={showroomImages}
            slide={showroomSlide}
            setSlide={setShowroomSlide}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            enableAutoPause={true}
            onImageClick={onImageClick}
            category="Showroom Permanent"
            title="Aménagement Commercial"
            description="Agencement haut de gamme pour showrooms et espaces de vente. Mise en valeur de vos produits grâce à un éclairage étudié et un mobilier sur mesure adapté à votre identité."
          />

          {/* 4. SALONS RÉGIONAUX */}
          <CarouselCard
            images={salonsImages}
            slide={salonSlide}
            setSlide={setSalonSlide}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            enableAutoPause={true}
            onImageClick={onImageClick}
            category="Événements Wilayas"
            title="Salons Régionaux"
            description="Conception architecturale sur mesure pour salons professionnels (DJAZAGRO, FPA, FIA). Structures bois, éclairage LED intégré, mobilier dédié et finitions haut de gamme pour valoriser votre marque auprès des visiteurs."
          />
        </div>
      </div>
    </section>
  );
}