import ScrollAnimation from "@/utils/scrollAnimation";
import Link from "next/link";
import {
  FaLayerGroup,
  FaChartLine,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa";

const services = [
  {
    title: "Media Advertising Solutions",
    description:
      "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaLayerGroup className="text-3xl text-orange-500" />,
    highlight: true,
  },
  {
    title: "SEO Keyword Exploration",
    description:
      "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaFileAlt className="text-3xl text-orange-500" />,
  },
  {
    title: "Analysis of Market Trends",
    description:
      "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaChartLine className="text-3xl text-orange-500" />,
  },
  {
    title: "Infographics Simplify Data",
    description:
      "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaClipboardList className="text-3xl text-orange-500" />,
  },
];

const OurService3 = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
          <ScrollAnimation
            direction="left"
            className="title-header-text text-center lg:text-left w-full lg:w-auto"
          >
            Our Services
          </ScrollAnimation>
          <ScrollAnimation
            direction="right"
            className="max-w-lg para-text text-center lg:text-left"
          >
            <Link
              href="/services"
              className="mt-4 flex justify-center lg:justify-start items-center gap-2 bg-gray-950 text-gray-100 border border-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1A73E8] w-full sm:w-auto"
            >
              ALL SERVICES →
            </Link>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation
              direction="popIn"
              key={index}
              className="p-6 rounded-xl shadow-sm transition duration-300 cursor-pointer bg-white text-gray-900 hover:bg-[#1A73E8] hover:text-white"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-4">{service.description}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService3;
