import React, { useState, useEffect } from 'react';
import FoiresTicker from './components/FoiresTicker';
import {
  heroImages,
  standsImages,
  enseignesImages,
  showroomImages,
  salonsImages
} from './galerie/imagesConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Expertise from './components/Expertise';
import AtelierProcess from './components/AtelierProcess';
import SalonsSection from './components/SalonsSection';
import GallerySection from './components/GallerySection';
import ImageModal from './components/ImageModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';
import useReveal from './hooks/useReveal';

export default function App() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [standSlide, setStandSlide] = useState(0);
  const [enseigneSlide, setEnseigneSlide] = useState(0);
  const [showroomSlide, setShowroomSlide] = useState(0);
  const [salonSlide, setSalonSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [heroPaused, setHeroPaused] = useState(false);

  useSmoothScroll();
  useReveal();

  // ========== AUTO-SLIDE HERO (6 images, toutes les 4 secondes) ==========
  useEffect(() => {
    if (heroPaused || !heroImages.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroPaused]);

  // ========== AUTO-SLIDE STANDS (93 images, toutes les 5 secondes) ==========
  useEffect(() => {
    if (isPaused || !standsImages.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setStandSlide((prev) => (prev + 1) % standsImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, standsImages.length]);

  // ========== AUTO-SLIDE ENSEIGNES (19 images, toutes les 5 secondes) ==========
  useEffect(() => {
    if (isPaused || !enseignesImages.length) return;
    const interval = setInterval(() => {
      setEnseigneSlide((prev) => (prev + 1) % enseignesImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, enseignesImages.length]);

  // ========== AUTO-SLIDE SHOWROOMS (28 images, toutes les 5 secondes) ==========
  useEffect(() => {
    if (isPaused || !showroomImages.length) return;
    const interval = setInterval(() => {
      setShowroomSlide((prev) => (prev + 1) % showroomImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, showroomImages.length]);

  // ========== AUTO-SLIDE SALONS RÉGIONAUX (22 images, toutes les 5 secondes) ==========
  useEffect(() => {
    if (isPaused || !salonsImages.length) return;
    const interval = setInterval(() => {
      setSalonSlide((prev) => (prev + 1) % salonsImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, salonsImages.length]);

  return (
    <div className="bg-white text-slate-800 font-sans antialiased selection:bg-[#DF7D23] selection:text-[#1F2430] min-h-screen overflow-x-hidden">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#DF7D23] focus:text-[#1F2430] focus:font-bold focus:px-5 focus:py-3 focus:rounded-full">
        Aller au contenu
      </a>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main id="contenu">
      <Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} heroPaused={heroPaused} setHeroPaused={setHeroPaused} />
      <StatsSection />
      <Expertise />
      <AtelierProcess />
      <SalonsSection />
      <FoiresTicker /> 
      <GallerySection
        standSlide={standSlide} setStandSlide={setStandSlide}
        enseigneSlide={enseigneSlide} setEnseigneSlide={setEnseigneSlide}
        showroomSlide={showroomSlide} setShowroomSlide={setShowroomSlide}
        salonSlide={salonSlide} setSalonSlide={setSalonSlide}
        isPaused={isPaused} setIsPaused={setIsPaused}
        onImageClick={setModalImage}
      />
      <ImageModal modalImage={modalImage} setModalImage={setModalImage} />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
}