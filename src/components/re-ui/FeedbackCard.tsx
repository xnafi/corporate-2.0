import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

interface FeedbackProps {
  name: string;
  country: string;
  image: string;
  feedback: string;
  rating: number;
}

const FeedbackCard = ({ name, country, image, feedback, rating }: FeedbackProps) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 flex flex-col gap-4 transition hover:scale-[1.02]">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* User Image */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-300">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>

          {/* Country Flag */}
          <div className="relative w-10 h-10">
            <Image src={country} alt="Country Flag" layout="fill" objectFit="cover" className="rounded-full" />
          </div>
        </div>

        {/* Quote Icon */}
        <FaQuoteRight className="text-lime-500 text-3xl sm:text-4xl" />
      </div>

      {/* Feedback Text */}
      
      <p className="text-gray-700 text-sm sm:text-base italic">{feedback}</p>

      {/* Name & Rating */}
      <div className="flex items-center justify-between mt-2">
        <p className="font-semibold text-gray-900">{name}</p>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-orange-400 text-lg">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
