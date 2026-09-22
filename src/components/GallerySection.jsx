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
    <section id="realisations" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-2 mb-4">
            Nos Réalisations, Showrooms & Enseignes
          </h2>
          <p className="text-slate-600">
            Cliquez sur une image pour l'agrandir en plein écran ou naviguez à travers nos conceptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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
            description="Conception architecturale sur mesure pour salons professionnels (DJAZAGRO, FPA, FIA). Structures bois, éclairage LED intégré, mobilier dédié et finitions haut de gamme pour valoriser votre marque auprès des visiteurs."
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
            description="Déploiement et installation de stands à travers les 69 wilayas. Logistique intégrée, montage rapide et respect absolu des délais pour tous vos événements professionnels."
          />
        </div>
      </div>
    </section>
  );
}