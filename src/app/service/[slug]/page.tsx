"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import DigitalMarketingAgency from "@/components/view/DigitalMarketingAgency";
import ServicesOfferings from "@/components/view/ServicesOfferings";
import PricingCard from "@/components/re-ui/PricingCard";
import { HiStar, HiOutlineFilter } from "react-icons/hi";
import { FaDiamond } from "react-icons/fa6";
import CollaborateWork from "@/components/view/CollaborateWork";

// Dummy data for services
const servicesData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Delivering efficient, user-centric digital solutions through minimal, functional, and responsive interface designs.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Engaging audiences through innovative online marketing tactics.",
  },
  "content-marketing": {
    title: "Content Marketing",
    description:
      "Driving customer engagement with strategic content creation efforts.",
  },
  "product-evaluation": {
    title: "Product Evaluation",
    description:
      "Conducting assessments to identify strengths and weaknesses of products.",
  },
  "search-engine-ranking": {
    title: "Search Engine Ranking",
    description:
      "Increasing organic traffic by optimizing search engine rankings strategically.",
  },
  "digital-social-campaigns": {
    title: "Digital Social Campaigns",
    description:
      "Driving engagement with innovative digital social marketing strategies.",
  },
};

const SingleService = () => {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service)
    return <p className="text-center text-red-500">Service not found</p>;

  const pricingOptions = [
    {
      plan: "Basic Plan",
      price: 15,
      description: "Monthly Packages for Single Person",
      features: [
        { text: "Unique Websites Design", included: true },
        { text: "Customer support limited to email", included: true },
        { text: "Support Your Business", included: true },
        { text: "Monthly review of item Performance", included: false },
        { text: "Keyword research", included: false },
      ],
      bgColor: "bg-green-100",
      badgeIcon: <HiOutlineFilter className="text-green-500 text-lg" />,
      borderColor: "border-green-500",
      textColor: "text-green-800",
      btnColor: "bg-green-500 text-white hover:bg-green-600",
    },
    {
      plan: "Standard Plan",
      price: 79,
      description: "Monthly Packages for Team",
      features: [
        { text: "Unique Websites Design", included: true },
        { text: "Customer support limited to email", included: true },
        { text: "Support Your Business", included: true },
        { text: "Monthly review of item Performance", included: true },
        { text: "Keyword research", included: false },
      ],
      bgColor: "bg-orange-100",
      badgeIcon: <HiStar className="text-orange-500 text-lg" />,
      borderColor: "border-orange-500",
      textColor: "text-orange-800",
      btnColor: "bg-orange-500 text-white hover:bg-orange-600",
    },
    {
      plan: "Premium Plan",
      price: 145,
      description: "Monthly Packages for Enterprise",
      features: [
        { text: "Unique Websites Design", included: true },
        { text: "Customer support limited to email", included: true },
        { text: "Support Your Business", included: true },
        { text: "Monthly review of item Performance", included: true },
        { text: "Keyword research", included: true },
      ],
      bgColor: "bg-yellow-100",
      badgeIcon: <FaDiamond className="text-yellow-500 text-lg" />,
      borderColor: "border-yellow-500",
      textColor: "text-yellow-800",
      btnColor: "bg-yellow-500 text-white hover:bg-yellow-600",
    },
  ];
  return (
    <div className="container mx-auto">
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
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            {service.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base">Home / {service.title}</p>
        </div>
      </div>

      <div>
        <DigitalMarketingAgency />
      </div>
      <div>
        <ServicesOfferings />
      </div>
      <div>
        <section className="text-center py-4">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-wide">
            Pricing Plan
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            Choose Your Best Option
          </h2>
          <p className="para-text mt-3 mb-2">
            Take a look at our comprehensive pricing plan to find the best
            option <br /> that suits your needs.
          </p>
        </section>
        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-2 sm:px-4">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
      {/* Collaboration Section */}
      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default SingleService;
