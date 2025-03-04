"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  "/img/logiciel-1.png",
  "/img/logiciel-2.png",
  "/img/logiciel-3.png",
  "/img/logiciel-4.png",
  "/img/logiciel-5.png",
  "/img/logiciel-6.png",
  "/img/logiciel-7.png",
  "/img/logiciel-8.png",
];

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="flex flex-col items-center p-6 bg-blue-800">
      <div className="text-center mb-6 gallery__text">
        <h2 className="text-red-500 font-lobster">
          Découvrez notre solution de gestion optimisée ! 🚀
        </h2>
        <p className="mt-2 text-white max-w-2xl">
          Grâce à une interface intuitive et des fonctionnalités avancées, notre
          logiciel simplifie la gestion de votre activité. Suivi des clients,
          gestion des stocks, rapports détaillés… Tout est à portée de main !
        </p>
        <p className="font-semibold mt-4 text-yellow-300 text-xl">
          Explorez l’interface ci-dessous : 👇
        </p>
      </div>
      <br />

      {/* Swiper Carousel */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={-180}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 250,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl min-h-[60vh] flex items-center py-6 capture_swiper review__swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="bg-white p-1 rounded-2xl shadow-xl cursor-pointer capture-container"
              onClick={() => setSelectedImage(src)} // Ouvre la modale avec l'image sélectionnée
            >
              <Image
                src={src}
                alt={`Capture d'écran ${index + 1}`}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modale d'affichage de l'image en grand */}
      {selectedImage && (
        <div
          className="gallery__text fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Ferme la modale au clic
        >
          <div className="relative">
            {/* Bouton de fermeture */}
            <button
              className="w-[30px] h-[30px] flex justify-center items-center absolute top-2 right-2 bg-red-500 shadow-sm  px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>

            {/* Image en grand */}
            <Image
              src={selectedImage}
              alt="Image en grand"
              width={900}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
