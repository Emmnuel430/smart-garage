"use client";

import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import ImageGallery from "./components/Galerie";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PopularModules from "./components/PopularModules";
import PartnersSection from "./components/PartnersSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import WhatsApp from "./components/whatsApp";
import useScrollReveal from "./components/hooks/useScrollReveal";
import useNavbarInteractions from "./components/hooks/main";

export default function Home() {
  useScrollReveal(); // Active l'animation
  useNavbarInteractions(); // Active le hook

  return (
    <div>
      <Navbar />
      <HomeComponent />
      <ImageGallery />
      <ServicesSection />
      <AboutSection />
      <PopularModules />
      <PartnersSection />
      <ReviewsSection />
      <Footer />
      <WhatsApp />
      {/* <!--~~~~~~~~~~~~~~~ Scroll Up ~~~~~~~~~~~~~~~--> */}
      <a
        href="#"
        className="fixed right-2 bottom-16 bg-red-500 shadow-lg px-3 py-2 md:px-4 md:py-3 rounded-md text-lg z-50 
    invisible opacity-0 translate-y-4 transition-all duration-300 ease-in-out"
        id="scroll-up"
      >
        <i className="ri-arrow-up-line text-white"></i>
      </a>
    </div>
  );
}
