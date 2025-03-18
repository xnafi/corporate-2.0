import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PromotionEngagement = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Promotion Challenges</h2>
        <p className="text-gray-700 mb-4">
          One of the primary challenges in social platform promotion is the 
          sheer volume of content competing for user attention. Brands must 
          find unique ways to differentiate themselves in a crowded marketplace.
        </p>

        <div>
          <Image
            src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
            alt="Market Research"
            width={500}
            height={300}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Market Research Outcomes</p>
          <FaArrowRight className="text-xl text-gray-800" />
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Engagement Solutions</h2>
        <p className="text-gray-700 mb-4">
          Partnering with influencers or other brands can amplify reach and 
          credibility. By leveraging established audiences, businesses can 
          enhance their visibility and gain new followers.
        </p>

        <div>
          <Image
            src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
            alt="Business Strategy"
            width={500}
            height={300}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Business Strategy Consulting</p>
          <FaArrowRight className="text-xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default PromotionEngagement;
