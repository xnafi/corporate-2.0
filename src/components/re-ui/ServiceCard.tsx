import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group p-6 border rounded-xl shadow-sm hover:bg-[#1a73e8] transition duration-500 cursor-pointer hover:scale-105">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 rounded-full group-hover:bg-black transition duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition duration-300">
          {title}
        </h3>
      </div>
      <p className="mt-20 text-primaryColor group-hover:text-white transition duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
