"use client";

import { useParams } from "next/navigation";
import CollaborateWork from "@/components/view/CollaborateWork";
import Image from "next/image";

const serviceDetails = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "We create visually appealing and user-friendly digital interfaces.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "We engage audiences through strategic digital marketing techniques.",
  },
  "content-marketing": {
    title: "Content Marketing",
    description: "Creating high-quality content to boost engagement and visibility.",
  },
  "product-evaluation": {
    title: "Product Evaluation",
    description: "Assessing product strengths and weaknesses for market readiness.",
  },
  "search-engine-ranking": {
    title: "Search Engine Ranking",
    description: "Enhancing visibility with strategic SEO techniques.",
  },
  "digital-social-campaigns": {
    title: "Digital Social Campaigns",
    description: "Maximizing outreach through targeted social media strategies.",
  },
};

const SingleService = () => {
  const { serviceName } = useParams();
  const service = serviceDetails[serviceName as keyof typeof serviceDetails];

  if (!service) {
    return <div className="text-center text-2xl font-bold mt-10">Service Not Found</div>;
  }

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
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

      {/* Content Section */}
      <div className="mt-6 sm:mt-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.title}</h2>
        <p className="text-gray-600 mt-4">{service.description}</p>
      </div>

      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default SingleService;
