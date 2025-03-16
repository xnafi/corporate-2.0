import { FC } from "react";
import { HiCheck, HiX } from "react-icons/hi";

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
  bgColor,
  badgeIcon,
//   borderColor,
  textColor,
  btnColor,
}) => {
  return (
    <div
      className={`relative  p-6 sm:p-8 rounded-2xl shadow-md border border-black border-b-4 border-r-4  ${bgColor}`}
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
      <button
        className={`mt-4 w-full rounded-full  py-2 text-sm font-semibold border border-black transition ${btnColor}`}
      >
        PURCHASE NOW <span className="text-2xl ml-8">→</span>
      </button>
    </div>
  );
};

export default PricingCard;
