import Image from "next/image";
import { HiStar, HiOutlineFilter } from "react-icons/hi";
import { FaDiamond } from "react-icons/fa6";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import PricingCard from "@/components/re-ui/PricingCard";
import { ReactNode } from "react";

// Define TypeScript types for pricing options
interface Feature {
  text: string;
  included: boolean;
}

interface PricingOption {
  plan: string;
  price: number;
  description: string;
  features: Feature[];
  bgColor: string;
  badgeIcon: ReactNode;
  borderColor: string;
  textColor: string;
  btnColor: string;
}

const PricingPlan = () => {
  const pricingOptions: PricingOption[] = [
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
    <>
      {" "}
      <div className="mx-auto">
        {/* Banner Section */}
        <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center bg-black mt-[100px]">
          <Image
            src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
            alt="Pricing Plan Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute text-center text-white px-4">
            <h1 className="bnr-header-text">Pricing Plan</h1>
            <p className="banner-para-text">Home / Pages / Pricing Plan</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 sm:py-12 px-2 sm:px-4">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
      {/* Collaboration Section */}
      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </>
  );
};

export default PricingPlan;
