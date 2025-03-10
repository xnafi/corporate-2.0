"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HappyCustomer: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8 md:gap-16 lg:gap-20">
        {/* Happy Customers */}
        <div className="w-full sm:w-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {inView && <CountUp end={1200000} separator="," duration={3} delay={0.5} />}+
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-2">Happy Customers</p>
        </div>

        {/* Expert Members */}
        <div className="w-full sm:w-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {inView && <CountUp end={1200} separator="," duration={3} delay={0.5} />}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-2">Expert Members</p>
        </div>

        {/* Years Experience */}
        <div className="w-full sm:w-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {inView && <CountUp end={14} duration={3} delay={0.5} />}+
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-2">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
