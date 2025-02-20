import ServiceCard from "./ServiceCard";
import { services } from "./data/servicesData";

const ServicesSection = () => {
  return (
    <section className="bg-white text-blue-950 py-20">
      <div className="service__top flex flex-col items-center gap-3 text-center mb-10">
        <h2 className="font-Lobster text-blue-950 text-2xl">Nos Modules</h2>
        <p className="max-w-2xl text-gray-600 font-Jost">
          Smart Garage&copy; intègre les modules suivants
        </p>
      </div>

      <div className="container px-6 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
