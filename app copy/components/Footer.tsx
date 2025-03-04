import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-100 text-blue-950 mt-20 pt-20 pb-10 md:pt-28 relative">
      {/* Newsletter */}
      <div className="container mx-auto text-white absolute top-auto right-0 left-0 -translate-y-1/2">
        <div className="bg-blue-900 px-10 pt-5 pb-10 -space-y-5 rounded-md">
          <h3>
            <span className="text-red-500">Souscrivez</span> à notre newsletter
          </h3>
          <br />
          <br />
          <div className="flex flex-col md:flex-row gap-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 text-blue-900 rounded-md outline-none bg-white"
            />
            <button className="flex items-center justify-center gap-1 bg-blue-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
              <span>S&apos;abonner</span>
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer__icon container mt-16 mb-10 mx-auto px-6">
        <div className="service__card border-b border-blue-500 relative">
          <div className="absolute top-4 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
            <div className="bg-red-100 text-lg text-center space-x-2">
              <i className="ri-facebook-fill hover:text-red-500 duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line hover:text-red-500 duration-300 cursor-pointer text-base"></i>
              <i className="ri-instagram-line hover:text-red-500 duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill hover:text-red-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer__content container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-center md:text-start">
        {/* Logo */}
        <div>
          <div className="text-7xl text-blue-700 text-center inline-block">
            <Image
              src="/img/logo (1).png"
              alt="logo"
              width={200}
              height={80}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <p className="mb-5 font-bold text-xl">Liens Rapides</p>
          <div className="flex flex-col gap-2">
            <Link href="#home">Accueil</Link>
            <Link href="#about">À propos</Link>
            <Link href="#popular">Fonctionnalités</Link>
            <Link href="https://smartgarage.asnumeric.com/pricing">Tarifs</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        {/* Services populaires */}
        <div>
          <p className="mb-5 font-bold text-xl">Nos Services</p>
          <div className="flex flex-col gap-2">
            <Link href="#">Gestion des véhicules</Link>
            <Link href="#">Facturation et paiements</Link>
            <Link href="#">Planification des rendez-vous</Link>
            <Link href="#">Suivi des réparations</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 font-bold text-xl">Nous Contacter</p>
          <div className="flex flex-col gap-2">
            <Link href="#">📞 +225 01 40 00 7932</Link>
            <Link href="#">📧 info@asnumeric.com</Link>
            <Link href="#">
              📍 Cocody Riviera Palmeraie, Abidjan, Côte d&apos;Ivoire
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copy__right container mx-auto px-6">
        <p className="text-center mt-10 opacity-80">
          Copyright &copy; {new Date().getFullYear()} by Asnumeric. All rights
          reserved.
        </p>
      </div>

      {/* Floral Image */}
      <div className="footer__floral absolute bottom-0 left-0 pointer-events-none">
        <Image
          src="/img/floral-1.png"
          alt="floral_image"
          width={500}
          height={250}
          className="w-full lg:w-1/2 opacity-40"
        />
      </div>
    </footer>
  );
};

export default Footer;
