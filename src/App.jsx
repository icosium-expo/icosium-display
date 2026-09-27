import React, { useState, useEffect } from 'react';
import FoiresTicker from './components/FoiresTicker';
import { heroImages } from './galerie/imagesConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Expertise from './components/Expertise';
import StandsShowcase from './components/StandsShowcase';
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
  const [modalImage, setModalImage] = useState(null);
  const [heroPaused, setHeroPaused] = useState(false);

  useSmoothScroll();
  useReveal();

  // Diaporama du hero (6 images, toutes les 4 secondes)
  useEffect(() => {
    if (heroPaused || !heroImages.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroPaused]);

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
        <StandsShowcase onImageClick={setModalImage} />
        <AtelierProcess />
        <SalonsSection />
        <FoiresTicker />
        <GallerySection onImageClick={setModalImage} />
        <ImageModal modalImage={modalImage} setModalImage={setModalImage} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
