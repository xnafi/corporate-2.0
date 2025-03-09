"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-12 py-8 flex flex-col-reverse lg:flex-row items-center justify-between ">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          #1 Advertising Agency
        </p>
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          We fuel brands <br />
          <span className="text-black">Growth and </span>
          <br />
          <span className="text-black">Success </span>
        </h1>
        <p className="text-gray-600 text-lg">
          Boost your online presence, and attract the right audience <br />
          to grow your business successfully.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <button className="bg-orange-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition">
            GET STARTED
          </button>
          <button className="flex items-center border-2 border-black text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-black hover:text-white transition">
            WATCH VIDEO
            <span className="ml-3 bg-orange-500 text-white p-2 rounded-full">
              <FaPlay size={12} />
            </span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="https://i.postimg.cc/K8C1s5Tk/fuel-brand-graph.png"
          alt="Fuel Brand Growth"
          width={600}
          height={400}
          className="max-w-full h-[200px] lg:h-[480px]"
        />
      </div>
    </section>
  );
};

export default Banner;
