"use client";

import { FaCog, FaEnvelope } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Strategic content creation that drives audience engagement and boosts brand awareness through valuable, relevant information.",
    icon: <FaCog className="text-white text-3xl" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Content Marketing",
    description:
      "Strategic content creation that drives audience engagement and boosts brand awareness through valuable, relevant information.",
    icon: <MdOutlineVideoLibrary className="text-white text-3xl" />,
    bgColor: "bg-purple-500",
  },
  {
    title: "Email Marketing",
    description:
      "Strategic content creation that drives audience engagement and boosts brand awareness through valuable, relevant information.",
    icon: <FaEnvelope className="text-white text-3xl" />,
    bgColor: "bg-green-500",
  },
];

const OurService = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center sm:items-start text-center sm:text-left transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${service.bgColor} mb-4`}
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {service.description}
              </p>

              {/* View More Button */}
              <a
                href="#"
                className="text-black font-medium inline-flex items-center gap-2 hover:underline border-b-2 border-gray-400 pb-1"
              >
                View More Details{" "}
                <IoIosArrowRoundForward className="text-2xl md:text-3xl" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
