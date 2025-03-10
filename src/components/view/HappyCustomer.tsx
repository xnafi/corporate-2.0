"use client";

import React from "react";
import CountUp from "react-countup";

const HappyCustomer: React.FC = () => {
  return (
    <div className="container flex justify-between items-center gap-10 md:gap-20">
      {/* Happy Customers */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          <CountUp end={1200000} separator="," duration={3} />+
        </h2>
        <p className="text-gray-500 text-lg mt-2">Happy Customers</p>
      </div>

      {/* Expert Members */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          <CountUp end={1200} separator="," duration={3} />
        </h2>
        <p className="text-gray-500 text-lg mt-2">Expert Members</p>
      </div>

      {/* Years Experience */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          <CountUp end={14} duration={3} />+
        </h2>
        <p className="text-gray-500 text-lg mt-2">Years Experience</p>
      </div>
    </div>
  );
};

export default HappyCustomer;
