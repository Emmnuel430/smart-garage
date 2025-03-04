import Image from "next/image";
import AboutItem from "./AboutItem";
import { aboutItems } from "./data/aboutData";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Image feuille décorative */}
      <div className="about__leaf absolute -top-8 -right-12 opacity-50">
        <Image
          src="/img/leaf-3.png"
          alt="leaf_image"
          width={250}
          height={250}
          className="w-40 md:w-52 xl:w-64"
        />
      </div>

      {/* Titre */}
      <div className="about__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
        <h2 className="font-Lobster text-red-500">À propos</h2>
        <p className="max-w-2xl">
          Découvrez comment Smart Garage&copy; simplifie la gestion de votre
          garage.
        </p>
      </div>

      {/* Sections dynamiques */}
      <div className="container space-y-10 xl:space-y-0 px-6 mx-auto">
        {aboutItems.map((item, index) => (
          <AboutItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
