"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviews } from "./data/reviewsData";

const ReviewsSection = () => {
  return (
    <section id="review" className="relative overflow-hidden">
      {/* Décoration feuille */}
      <div className="review__leaf absolute -top-8 -left-12 opacity-50 review__leaf">
        <Image
          src="/img/leaf-4.png"
          alt="leaf_image"
          width={150}
          height={150}
        />
      </div>

      {/* Titre */}
      <div className="review__top flex flex-col items-center gap-3 text-center mb-10">
        <h2 className="font-Lobster text-red-500">Avis clients</h2>
        <p className="max-w-2xl">Nos clients en témoignent</p>
      </div>

      {/* Carrousel des avis */}
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          speed={400}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper review__swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-blue-900 rounded-md p-6 min-h-64 justify-evenly shadow-lg text-white">
                <p className="font-Lobster">{`"${review.text}"`}</p>
                <div className="flex items-center">
                  <Image
                    src={review.imgSrc}
                    alt="review_image"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-red-500 uppercase">{review.name}</p>
                    <p>{review.role}</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination Swiper */}
          <div className="swiper-pagination mt-6"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
