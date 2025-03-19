import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PromotionEngagement = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-6">
      {/* Left Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center md:text-left">
          Promotion Challenges
        </h2>
        <p className="text-gray-700 mb-4 text-center md:text-left">
          One of the primary challenges in social platform promotion is the 
          sheer volume of content competing for user attention. Brands must 
          find unique ways to differentiate themselves in a crowded marketplace.
        </p>

        <div className="flex justify-center">
          <Image
            src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
            alt="Market Research"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-md rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm sm:text-lg font-semibold">Market Research Outcomes</p>
          <FaArrowRight className="text-lg sm:text-xl text-gray-800" />
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center md:text-left">
          Engagement Solutions
        </h2>
        <p className="text-gray-700 mb-4 text-center md:text-left">
          Partnering with influencers or other brands can amplify reach and 
          credibility. By leveraging established audiences, businesses can 
          enhance their visibility and gain new followers.
        </p>

        <div className="flex justify-center">
          <Image
            src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
            alt="Business Strategy"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-md rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm sm:text-lg font-semibold">Business Strategy Consulting</p>
          <FaArrowRight className="text-lg sm:text-xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default PromotionEngagement;
