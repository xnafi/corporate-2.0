"use client";

import { useParams } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

// Dummy data for services
const servicesData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Delivering efficient, user-centric digital solutions through minimal, functional, and responsive interface designs.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Engaging audiences through innovative online marketing tactics.",
  },
  "content-marketing": {
    title: "Content Marketing",
    description: "Driving customer engagement with strategic content creation efforts.",
  },
  "product-evaluation": {
    title: "Product Evaluation",
    description: "Conducting assessments to identify strengths and weaknesses of products.",
  },
  "search-engine-ranking": {
    title: "Search Engine Ranking",
    description: "Increasing organic traffic by optimizing search engine rankings strategically.",
  },
  "digital-social-campaigns": {
    title: "Digital Social Campaigns",
    description: "Driving engagement with innovative digital social marketing strategies.",
  },
};

const SingleService = () => {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return <p className="text-center text-red-500">Service not found</p>;

  return (
    <div className="bg-white">
      {/* Hero Section */}

      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
              <Image
                src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
                alt="Service Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
              />
              <div className="absolute text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-extrabold">{service.title}</h1>
                <p className="mt-2 text-sm sm:text-base">Home / {service.title}</p>
              </div>
            </div>

      {/* Service Details */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
        <p className="mt-4 text-gray-700">{service.description}</p>

        {/* Contact Box */}
        <div className="mt-8 p-6 bg-orange-500 text-white rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <div className="flex items-center gap-2 mt-2">
            <FaPhoneAlt />
            <span>+123 456 7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
