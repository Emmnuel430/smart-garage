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
// import WhatsApp from "./components/whatsApp";
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
      {/* <WhatsApp /> */}
      {/* <!--~~~~~~~~~~~~~~~ Scroll Up ~~~~~~~~~~~~~~~--> */}
      <a
        href="#"
        className="fixed right-8 -bottom-1/2 bg-red-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
        id="scroll-up"
      >
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}
