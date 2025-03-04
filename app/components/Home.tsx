"use client";

import { useState } from "react";
import Image from "next/image";
import QuoteModal from "../components/QuoteModal"; // Import du modal

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* Content */}
          <div className="home__data w-full space-y-5 lg:w-1/2">
            <h1>
              La <span className="text-red-500">gestion</span> de votre <br />
              <span className="text-red-500">garage</span> n’a jamais
              <br /> été aussi <span className="text-yellow-500">simple</span> !
            </h1>
            <p className="text-slate-300 font-Lobster">
              Optimisez la gestion de votre garage avec{" "}
              <span className="text-2xl text-yellow-500">
                Smart Garage&copy;
              </span>{" "}
              : suivi des réparations, gestion des clients, facturation et bien
              plus encore !
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-3 xl:pt-5">
              {/* https://drive.google.com/uc?export=download&id=184GmLFNgj_EJ3TS317zr0BOXcxK_QgJU */}
              <button
                className="btn"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/uc?export=download&id=184GmLFNgj_EJ3TS317zr0BOXcxK_QgJU",
                    "_blank"
                  )
                }
              >
                <span>Voir la brochure</span>{" "}
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                className="btn btn_outline text-center"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Demander un devis</span>{" "}
                <i className="ri-information-line"></i>
              </button>
            </div>

            {/* Affichage du Modal */}
            <QuoteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            <p className="text-xs font-Lobster text-slate-300">
              Profitez d’un essai gratuit de 30 jours sans engagement.
            </p>
            {/* Ajout des hashtags de façon stylée */}
            <div className="text-sm text-gray-400 font-semibold italic space-x-2">
              <span>#ConcessionnaireAuto</span>
              <span>#Garagiste</span>
              <br />
              <span>#VentePiècesDétachées</span>
            </div>

            <div className="flex items-center gap-5 text-lg lg:pt-8">
              <i className="text-slate-300 hover:text-red-500 duration-300 cursor-pointer ri-facebook-fill"></i>
              <i className="text-slate-300 hover:text-red-500 duration-300 text-base cursor-pointer ri-twitter-x-line"></i>
              <i className="text-slate-300 hover:text-red-500 duration-300 cursor-pointer ri-instagram-line"></i>
              <i className="text-slate-300 hover:text-red-500 duration-300 cursor-pointer ri-linkedin-fill"></i>
            </div>
          </div>

          {/* Image */}
          <div className="home__image w-full relative lg:w-1/2 p-4 border-4 border-dotted border-red-500 rounded-full overflow-hidden">
            <Image
              src="/img/home-img.png"
              alt="home_image"
              layout="responsive"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
