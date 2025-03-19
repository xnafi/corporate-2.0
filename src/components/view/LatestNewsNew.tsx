import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const LatestNewsNew = () => {
  return (
    <section className="container mx-auto mt-10 mb-6 px-4 sm:px-6">
      {/* Top Section - Title & Button */}
      <div className="flex items-center justify-between mb-6 sm:mb-10 flex-col sm:flex-row text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Latest News
        </h2>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition mt-2 sm:mt-0">
          ALL BLOGS <FaArrowRight className="ml-2 text-sm sm:text-base" />
        </button>
      </div>

      {/* Main Content - Image & Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Side - Featured News */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://i.postimg.cc/hPZcsHkK/male-female-office-workers.jpg"
            alt="Latest News"
            width={800}
            height={500}
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 text-white">
            <span className="bg-white text-black text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full">
              Digital Marketing
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mt-2">
              Creating a Successful Strategy for Effective SEO Marketing.
            </h3>
            <FaArrowRight className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-3xl sm:text-5xl bg-orange-500 p-2 sm:p-4 rounded-full cursor-pointer shadow-lg" />
          </div>
        </div>

        {/* Right Side - Blog List */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
          {/* Blog Item 1 */}
          <div className="flex flex-col border-b pb-4">
            <span className="text-gray-500 text-xs sm:text-sm pb-16 sm:pb-20">
              Social Advertising
            </span>
            <h3 className="text-base sm:text-lg font-semibold">
              Innovative ways to Captivate <br className="hidden sm:block" /> your Audience.
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-400 text-xs sm:text-sm">
                Jain Smith / 05 Oct 2024
              </p>
              <FaArrowRight className="text-orange-500 text-2xl sm:text-4xl cursor-pointer" />
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs sm:text-sm pb-16 sm:pb-20">
              Web Traffic
            </span>
            <h3 className="text-base sm:text-lg font-semibold">
              Optimizing for Better Search Engine rankings.
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-400 text-xs sm:text-sm">
                Jain Smith / 05 Oct 2024
              </p>
              <FaArrowRight className="text-orange-500 text-2xl sm:text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsNew;
