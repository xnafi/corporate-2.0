"use client";

import { FC } from "react";
import { HiCheck, HiX } from "react-icons/hi";

interface PricingCardProps {
  plan: string;
  price: number;
  description: string;
  features: { text: string; included: boolean }[];
  bgColor: string;
  badgeIcon: React.ReactNode;

}

const PricingCard: FC<PricingCardProps> = ({
  plan,
  price,
  description,
  features,
  bgColor,
  badgeIcon,
}) => {
  return (
    <div
      className={`relative p-6 sm:p-8 rounded-xl shadow-lg border ${bgColor}`}
    >
      {/* Badge Icon */}
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
        {badgeIcon}
      </div>

      {/* Plan & Price */}
      <h3 className="text-lg font-semibold">{plan}</h3>
      <p className="text-4xl font-bold mt-2">${price}</p>
      <p className="text-sm text-gray-600">{description}</p>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {feature.included ? (
              <HiCheck className="text-green-500" />
            ) : (
              <HiX className="text-red-500 opacity-50" />
            )}
            <span
              className={`${
                !feature.included ? "text-gray-400 line-through" : ""
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Purchase Button */}
      <button className="mt-4 w-full border rounded-lg py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
        PURCHASE NOW
      </button>
    </div>
  );
};

export default PricingCard;
