"use client";

import { FaCog, FaEnvelope} from "react-icons/fa";
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
    <section className="max-w-[1440px] mx-auto px-4 lg:px-12 py-4 lg:py-8 bg-gray-100">
      <div className="text-left">
        <h2 className="headings">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col "
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${service.bgColor} mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-left">{service.title}</h3>
              <p className="para-text mb-4">{service.description}</p>
              <a
                href="#"
                className="text-black font-medium inline-flex items-center gap-2 hover:underline border-b-2 border-gray-400 pb-1"
              >
                View More Details <IoIosArrowRoundForward className="text-4xl" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
