"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { partners } from "./data/partnersData";

const PartnersSection = () => {
  return (
    <section id="partners" className="bg-blue-900 py-10">
      {/* Titre */}
      <div className="partner__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
        <h2 className="font-Lobster text-red-500">Partenaires</h2>
        <p className="max-w-2xl text-white">
          Ces entreprises utilisent déjà Smart Garage&copy;.
        </p>
      </div>

      {/* Carrousel */}
      <div className="container mx-auto px-6 py-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper review__swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg logo-container">
                  <Image
                    src={partner.imgSrc}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSection;
