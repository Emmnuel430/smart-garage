import { modules } from "./data/modulesData";

const PopularModules = () => {
  return (
    <section id="popular" className="bg-white py-10">
      {/* Titre */}
      <div className="popular__top flex flex-col items-center gap-3 text-center mb-10">
        <h2 className="font-Lobster text-blue-950 text-2xl">
          Nos Modules Premium
        </h2>
        <p className="max-w-2xl text-gray-600">
          Découvrez les fonctionnalités premium de Smart Garage&copy;
        </p>
      </div>

      {/* Grid des modules */}
      <div className="container w-full mx-auto px-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`popular__card p-6 rounded-md text-white text-center flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 duration-300 ${module.bgColor}`}
          >
            <i className={`${module.icon} text-3xl`}></i>
            <span className="ml-2">{module.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularModules;
