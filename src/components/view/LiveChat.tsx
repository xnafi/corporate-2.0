import { FaHeart, FaPhoneAlt, FaComments } from "react-icons/fa";

const LiveChat = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12  ">
        {/* Help Section */}
        <div className="flex  items-center text-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full">
            <FaHeart size={20} />
          </div>
          <div>
            <p className="text-gray-700 font-medium mt-2">
              We’re always happy to help.
            </p>
            <p className="text-gray-500">ask@homy.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-400"></div>

        {/* Hotline Section */}
        <div className="flex items-center text-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
            <FaPhoneAlt size={20} />
          </div>
          <div>
            <p className="text-gray-700 font-medium mt-2">Our hotline number</p>
            <p className="text-gray-500">+757 699 4478, +991 377 9731</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-400"></div>

        {/* Live Chat Section */}
        <div className="flex items-center text-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full">
            <FaComments size={20} />
          </div>
          <div>
            <p className="text-gray-700 font-medium mt-2">Live chat</p>
            <p className="text-gray-500">www.homylivechat.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
