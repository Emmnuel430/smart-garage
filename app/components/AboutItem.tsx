import Image from "next/image";

interface AboutItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  scrollClass: string;
  scrollClass2: string;
  reverse?: boolean;
}

const AboutItem = ({
  imgSrc,
  imgAlt,
  title,
  description,
  reverse,
  scrollClass,
  scrollClass2,
}: AboutItemProps) => {
  return (
    <div
      className={`flex flex-col items-center lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-5`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={300}
          className={`w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto rounded-3xl ${scrollClass}`}
        />
      </div>
      {/* Contenu */}
      <div className={`w-full lg:w-1/2 space-y-5 ${scrollClass2}`}>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-slate-300 font-Lobster">{description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
