"use client";

import BannerSection from "@/components/re-ui/BannerSection";
import { HiStar, HiOutlineFilter } from "react-icons/hi";
import { FaDiamond } from "react-icons/fa6";
import CollaborateWork from "@/components/view/CollaborateWork";
import PricingCard from "@/components/re-ui/PricingCard";

const PricingPlan = () => {
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
      {/* Banner Section */}
      <BannerSection />

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 sm:py-12 px-2 sm:px-4">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default PricingPlan;
