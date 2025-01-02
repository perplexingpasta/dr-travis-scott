import Image from "next/image";

type ServiceCardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const ServiceCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col font-lexendDeca items-center space-y-4 rounded-lg border-2 bg-white p-6 shadow-lg md:border-0">
      <div className="relative h-48 w-48">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={192}
          height={192}
          className="rounded-lg aspect-square object-cover"
        />
      </div>
      <h3 className="text-lg md:text-xl">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
