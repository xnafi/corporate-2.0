"use client";

import React from "react";
import { FaCheckCircle, FaUserTie, FaChartLine } from "react-icons/fa";

const ChooseUs: React.FC = () => {
  return (
    <section className="container">
    <div className=" flex flex-col lg:flex-row items-center justify-between ">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-sm text-orange-500 uppercase font-semibold">
          Why Choose Us
        </h3>
        <h1 className="text-5xl font-bold mt-2 leading-tight">
          We are the Top Ad <br /> Agency.
        </h1>
        <p className="text-gray-600 mt-4">
          We are a premier advertising agency dedicated to delivering
          outstanding marketing solutions that elevate your brand & drive
          results in today’s competitive landscape.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600 transition flex items-center space-x-2 border-2 border-black border-b-4">
          <span>View Details</span>
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative mb-96  flex justify-center">
        {/* Background Circle */}
        <div className="absolute w-96 h-96 bg-gray-100 rounded-full -z-10"></div>

        {/* Floating Cards */}
        <div className="relative w-full flex flex-col items-center">
          {/* First Card (Left Side) */}
          <div className="bg-white  rounded-xl p-6 w-72 flex flex-col items-start space-x-4 absolute -top-0 left-0">
            <div className="bg-green-500 text-white p-3 rounded-full ml-4">
              <FaChartLine size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mt-2">Proven Success Record</h3>
              <p className="para-text text-sm mt-4">
                We boast a team of leading experts <br /> in their respective industries.
              </p>
            </div>
          </div>

          {/* Second Card (Left Side) */}
          <div className="bg-white  rounded-xl p-6 w-72 flex flex-col items-start space-x-4 absolute top-56 left-0">
            <div className="bg-orange-500 text-white p-3 rounded-full ml-4">
              <FaCheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-lg text-start font-semibold mt-2">Top Notch Service</h3>
              <p className="para-text text-sm mt-4">
                Superior services that consistently <br /> exceed client expectations.
              </p>
            </div>
          </div>

          {/* Third Card (Right Side) */}
          <div className="bg-white  rounded-xl p-6 w-72 flex flex-col items-start space-x-4 absolute top-24 right-4">
            <div className="bg-purple-500 text-white p-3 rounded-full ml-4">
              <FaUserTie size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mt-2">We have Top Experts</h3>
              <p className="para-text text-sm mt-4">
                We boast a team of leading experts in their respective industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ChooseUs;
