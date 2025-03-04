interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service__card border border-blue-500 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
      <div className="flex items-center gap-5">
        <i className={`${icon} text-3xl md:text-4xl xl:text-5xl`}></i>
        <p className="md:text-lg font-bold">{title}</p>
      </div>
      <p className="font-Lobster">{description}</p>
    </div>
  );
};

export default ServiceCard;
