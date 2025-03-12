"use client"; // Add this at the top

import React from "react";
import CountUp from "react-countup";

const Member2 = () => {
  return (
    <section className="lg:mt-24 bg-white  ">
      {/* Title and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Statistics show <br />
          <span className="text-black">Reliability.</span>
        </h2>
        <p className="text-gray-600 md:w-1/2 mt-4 md:mt-0">
          Attaining wealth success hinges on receiving expert counsel and implementing
          sound financial strategies for long-term prosperity.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-2">
        {/* Card 1 */}
        <div className="p-8 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={20} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2">Years of Excellence</p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={1379} duration={3} separator="," />+
          </h3>
          <p className="text-gray-600 mt-2">Expert Members</p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            <CountUp start={0} end={72} duration={3} separator="," />k
          </h3>
          <p className="text-gray-600 mt-2">Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Member2;
