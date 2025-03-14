"use client";

import React from "react";
import { FaUserTie, FaChartLine } from "react-icons/fa";

const ChooseUs: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section (Text + Button) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-sm text-orange-500 uppercase font-semibold">
            Why Choose Us
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
            We are the Top Ad <br className="hidden sm:block" /> Agency.
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            We are a premier advertising agency dedicated to delivering outstanding
            marketing solutions that elevate your brand & drive results in today’s
            competitive landscape.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600 transition flex items-center space-x-2 border-2 border-black border-b-4">
              <span>View Details</span>
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Right Section (Cards & Circle) */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-end mt-12 lg:mt-0">
          {/* Background Circle (Now Responsive) */}
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gray-100 rounded-full -z-10"></div>

          {/* Floating Cards (Centered in Mobile, Right-Aligned in Large Screens) */}
          <div className="relative w-full flex flex-col items-center lg:items-end space-y-6 sm:space-y-10">
            {/* First Card */}
            <div className="bg-white rounded-xl p-5 sm:p-6 w-64 sm:w-72 flex flex-col items-center lg:items-start text-center lg:text-left shadow-lg lg:mr-24">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <FaChartLine size={24} />
              </div>
              <h3 className="text-lg font-semibold mt-2">Proven Success Record</h3>
              <p className="text-sm mt-2">
                We boast a team of leading experts in their respective industries.
              </p>
            </div>

            {/* Second Card */}
            <div className="bg-white rounded-xl p-5 sm:p-6 w-64 sm:w-72 flex flex-col items-center lg:items-end text-center lg:text-right shadow-lg">
              <div className="bg-purple-500 text-white p-3 rounded-full">
                <FaUserTie size={24} />
              </div>
              <h3 className="text-lg font-semibold mt-2">We have Top Experts</h3>
              <p className="text-sm mt-2">
                We boast a team of leading experts in their respective industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
