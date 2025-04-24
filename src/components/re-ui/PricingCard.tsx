import { FC } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import SecondaryButton from "./SecondaryButton";

interface PricingCardProps {
  plan: string;
  price: number;
  description: string;
  features: { text: string; included: boolean }[];
  bgColor: string;
  badgeIcon: React.ReactNode;
  borderColor: string;
  textColor: string;
  btnColor: string;
}

const PricingCard: FC<PricingCardProps> = ({
  plan,
  price,
  description,
  features,
  badgeIcon,
  textColor,
}) => {
  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl shadow-md border border-black border-b-4 border-r-4`}
    >
      {/* Badge Icon */}
      <div className="absolute top-2 right-3 bg-white p-4 border border-black border-b-4 rounded-full shadow-lg">
        {badgeIcon}
      </div>

      {/* Plan & Price */}
      <h3 className="text-sm font-bold uppercase">{plan}</h3>
      <p className="text-6xl font-bold mt-2">{`$${price}`}</p>
      <p className="text-sm text-gray-600">{description}</p>

      {/* Border between Plan & Features */}
      <div className="border-t my-6"></div>

      {/* Features */}
      <ul className="mt-4 space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {feature.included ? (
              <HiCheck className="text-green-500" />
            ) : (
              <HiX className="text-gray-400 opacity-50" />
            )}
            <span
              className={`${feature.included ? textColor : "text-gray-400"}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Purchase Button */}
      <div className="mx-auto self-center my-3 flex w-full text-center">
        <SecondaryButton text=" PURCHASE NOW" withArrow />
      </div>
    </div>
  );
};

export default PricingCard;
