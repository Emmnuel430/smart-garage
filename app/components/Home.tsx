"use client";

import { useState } from "react";
import Image from "next/image";

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
              <br /> été aussi <span className="text-red-500">simple</span> !
            </h1>
            <p className="text-slate-300 font-Lobster">
              Optimisez la gestion de votre garage avec Smart Garage&copy; :
              suivi des réparations, gestion des clients, facturation et bien
              plus encore !
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-3 xl:pt-5">
              <button className="btn">
                <span>Essayer gratuitement</span>{" "}
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

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-15 rounded-lg">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Obtenez votre devis personnalisé
                  </h2>
                  <form>
                    <label className="block text-gray-700">
                      Nom de l&apos;entreprise
                    </label>
                    <input
                      type="text"
                      className="text-gray-900 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre entreprise"
                    />

                    <label className="block text-gray-700 mt-3">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      className="text-gray-900 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre numéro"
                    />

                    <p className="text-gray-700 mb-2 mt-3">Je désire un(e):</p>
                    <div className="mb-4 space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-gray-900"
                        />
                        <span className="text-gray-500">Application</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-500"
                        />
                        <span className="text-gray-500">Site web</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-500"
                        />
                        <span className="text-gray-500">
                          Application mobile client
                        </span>
                      </label>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-300 rounded-md"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                      >
                        Soumettre
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

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
              src="/img/Capturennn-removebg-preview.png"
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
