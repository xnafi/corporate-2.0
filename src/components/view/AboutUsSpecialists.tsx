"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const AboutUsSpecialists = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
      {/* Left Side Content */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h4 className="text-orange-500 uppercase font-semibold">About Us</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Specialists in Tech Hurdles.
        </h2>
        <p className="text-gray-600">
          Solving complex digital challenges with tailored solutions to optimize workflows, enhance efficiency.
        </p>

        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center justify-center md:justify-start">
            ✔ Virtual Operations Oversight
          </li>
          <li className="flex items-center justify-center md:justify-start">
            ✔ Oversight of Online Resource Management
          </li>
          <li className="flex items-center justify-center md:justify-start">
            ✔ Remote Management Strategies
          </li>
        </ul>

        <button className="flex items-center mx-auto md:mx-0 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-orange-600 transition-all border border-b-4 border-black">
          ABOUT US <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Right Side - Image and 97% Badge */}
      <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        {/* Background Shape */}
        <div className="absolute -z-10 bg-purple-300 w-[220px] h-[280px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px] rounded-[40px]"></div>

        {/* Image - Adjusting size on different screens */}
        <Image
          src="https://i.postimg.cc/fTjQSdWG/julia-potter-T7-XG8-QAn0-Mw-unsplash.jpg"
          alt="Specialist Woman"
          width={350}
          height={400}
          className="rounded-lg object-cover w-[220px] h-[280px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px]"
        />

        {/* 97% Success Rate - Hidden on small screens */}
        <div className="absolute bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded-lg flex-col items-center sm:flex hidden">
          <span className="text-4xl sm:text-6xl font-bold">97%</span>
          <span className="text-sm text-gray-600">SUCCESS RATE</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSpecialists;
