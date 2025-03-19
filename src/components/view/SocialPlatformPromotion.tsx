import Image from "next/image";
import { FaUser, FaCalendarAlt, FaTag, FaMapMarkerAlt } from "react-icons/fa";

const SocialPlatformPromotion = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-4 sm:p-6">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
          alt="Colleagues working on a project"
          width={800}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 border-b pb-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
          <FaUser className="text-orange-500" />
          <span className="font-medium">Client:</span> Ronald Richards
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
          <FaCalendarAlt className="text-orange-500" />
          <span className="font-medium">Date:</span> 16 Oct, 2024
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
          <FaTag className="text-orange-500" />
          <span className="font-medium">Category:</span> Social Media Marketing
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-orange-500" />
          <span className="font-medium">Location:</span> 775 Rolling Green Rd, USA
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">
          Social Platform Promotion Tactics
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
          Effective strategies for promoting products and services on social media platforms involve 
          creating engaging content, leveraging influencer partnerships, utilizing targeted ads, 
          and analyzing performance metrics to enhance audience.
        </p>
        <p className="text-gray-700 mt-2 text-sm sm:text-base text-center sm:text-left">
          Social platform promotion tactics encompass various approaches to enhance brand visibility, 
          including creating shareable content, engaging with followers, running targeted advertising 
          campaigns, collaborating with influencers, and monitoring analytics to refine strategies for 
          optimal audience engagement and conversion rates.
        </p>
      </div>
    </div>
  );
};

export default SocialPlatformPromotion;
