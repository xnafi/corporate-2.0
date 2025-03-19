import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const LatestNewsNew = () => {
  return (
    <section className="container mx-auto mt-16 mb-8">
      {/* Top Section - Title & Button */}
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Latest News</h2>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
          ALL BLOGS <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Main Content - Image & Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Featured News */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://i.postimg.cc/hPZcsHkK/male-female-office-workers.jpg"
            alt="Latest News"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
              Digital Marketing
            </span>
            <h3 className="text-lg md:text-xl font-bold mt-2">
              Creating a Successful Strategy for Effective SEO Marketing.
            </h3>
            <FaArrowRight className="absolute bottom-6 right-6 text-6xl bg-orange-500 p-4 rounded-full cursor-pointer" />

          </div>
        </div>

        {/* Right Side - Blog List */}
        <div className="flex flex-col space-y-6">
          {/* Blog Item 1 */}
          <div className="flex flex-col border-b pb-4">
            <span className="text-gray-500 text-sm pb-20">Social Advertising</span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Innovative ways to Captivate <br /> your Audience.
              </h3>
              
            </div>
            <div className="flex items-center justify-between">

            <p className="text-gray-400 text-sm mt-1">Jain Smith / 05 Oct 2024</p>
            <FaArrowRight className="text-orange-500 text-4xl cursor-pointer" />
          </div>
            </div>

          {/* Blog Item 2 */}
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm pb-20">Web Traffic</span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Optimizing for Better Search Engine rankings.
              </h3>
            </div>
            <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm mt-1">Jain Smith / 05 Oct 2024</p>
              <FaArrowRight className="text-orange-500 text-4xl cursor-pointer" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsNew;
