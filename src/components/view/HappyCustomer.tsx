import React from "react";

const HappyCustomer: React.FC = () => {
  return (
    <div className="container flex justify-between items-center  gap-16 md:gap-32 ">
      {/* Happy Customers */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          1.2m<span className="text-4xl md:text-5xl">+</span>
        </h2>
        <p className="text-gray-500 text-lg mt-2">Happy Customer</p>
      </div>

      {/* Expert Members */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          1,200
        </h2>
        <p className="text-gray-500 text-lg mt-2">Expert Members</p>
      </div>

      {/* Years Experience */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          14<span className="text-4xl md:text-5xl">+</span>
        </h2>
        <p className="text-gray-500 text-lg mt-2">Years Experience</p>
      </div>
    </div>
  );
};

export default HappyCustomer;
