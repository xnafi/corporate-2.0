import { FaCheckCircle, FaSearch, FaGlobe, FaBoxOpen } from "react-icons/fa";
import { ReactNode } from "react";
import ScrollAnimation from "@/utils/scrollAnimation";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const serviceOfferings: string[] = [
  "Tracking website performance through data analysis and detailed reporting.",
  "Managing and overseeing the use of online resources effectively.",
  "Enhancing online presence via effective search engine ranking techniques.",
  "Product promotions led by influential social media personalities.",
  "Strategies to enhance website visitor-to-customer conversion effectiveness.",
];

const services: Service[] = [
  {
    title: "Product Evaluation",
    description:
      "Conducting assessments to identify strengths and weaknesses of products.",
    icon: <FaBoxOpen className="text-white text-2xl" />,
  },
  {
    title: "Search Engine Ranking",
    description:
      "Increasing organic traffic by optimizing search engine rankings strategically.",
    icon: <FaSearch className="text-white text-2xl" />,
  },
  {
    title: "Digital Social Campaigns",
    description:
      "Driving engagement with innovative digital social marketing strategies.",
    icon: <FaGlobe className="text-white text-2xl" />,
  },
];

export default function ServicesOfferings() {
  return (
    <section className="container mx-auto">
      {/* Service Offerings List */}
      <div>
        <ScrollAnimation direction="right">
         <h2 className="title-header-text mb-4">Services Offering</h2> 
        </ScrollAnimation>
        
        <ScrollAnimation direction="popIn">
          <ul className="space-y-2">
            {serviceOfferings.map((service, index) => (
              <li
                key={index}
                className="flex items-start space-x-2 text-sm sm:text-base"
              >
                <FaCheckCircle className="text-orange-500 mt-1" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>

      {/* Services Cards */}
      <ScrollAnimation
        direction="popIn"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg text-start shadow-sm"
          >
            <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </ScrollAnimation>
    </section>
  );
}
