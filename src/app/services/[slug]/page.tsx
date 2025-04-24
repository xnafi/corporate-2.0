import Image from "next/image";
import { HiStar, HiOutlineFilter } from "react-icons/hi";
import { FaDiamond } from "react-icons/fa6";

import DigitalMarketingAgency from "@/components/view/DigitalMarketingAgency";
import ServicesOfferings from "@/components/view/ServicesOfferings";
import PricingCard from "@/components/re-ui/PricingCard";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ScrollAnimation from "@/utils/scrollAnimation";

type ServiceKey =
  | "ui-ux-design"
  | "digital-marketing"
  | "content-marketing"
  | "product-evaluation"
  | "search-engine-ranking"
  | "digital-social-campaigns";

const servicesData: Record<
  ServiceKey,
  {
    title: string;
    description: string;
  }
> = {
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

export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceKey];

  if (!service) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Service not found
      </p>
    );
  }

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
      bgColor: "bg-white",
      badgeIcon: <HiStar className="primaryColor text-lg" />,
      borderColor: "border-[#1A73E8]",
      textColor: "text-[#1A73E8]",
      btnColor: "bg-[#1A73E8] text-white hover:bg-orange-600",
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
      badgeIcon: <FaDiamond className="primaryColor text-lg" />,
      borderColor: "border-yellow-500",
      textColor: "text-yellow-800",
      btnColor: "bg-yellow-500 text-white hover:primaryColor",
    },
  ];

  return (
    <div className="mx-auto overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black mt-[100px]">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="Service Banner"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <ScrollAnimation direction="popIn">
            <h1 className="bnr-header-text">{service.title}</h1>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="banner-para-text">Home / {service.title}</p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-4 sm:mt-6">
        <DigitalMarketingAgency />
      </div>
      <div className="mt-4 sm:mt-6">
        <ServicesOfferings />
      </div>

      {/* Pricing Section */}
      <div className="mt-4 sm:mt-6">
        <section className="text-center py-4">
          <ScrollAnimation direction="popIn">
            <p className="font-medium text-sm uppercase tracking-wide">
              Pricing Plan
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <h2 className="text-2xl sm:text-4xl font-bold mt-2">
              Choose Your Best Option
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="text-sm sm:text-base mt-3 mb-3">
              Take a look at our comprehensive pricing plan to find the best
              option that suits your needs.
            </p>
          </ScrollAnimation>
        </section>

        {/* Pricing Cards */}
        <ScrollAnimation direction="popIn" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </ScrollAnimation>
      </div>

      {/* Collaboration Section */}
      <div className="mt-8 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
}
