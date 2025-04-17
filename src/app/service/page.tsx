import {
  FaLayerGroup,
  FaChartLine,
  FaFileAlt,
  FaSearch,
  FaGlobe,
  FaClipboardList,
} from "react-icons/fa";

import Link from "next/link";
import ServiceCard from "@/components/re-ui/ServiceCard";

const services = [
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Delivering efficient, user-centric digital solutions through minimal, functional, and responsive interface designs.",
    icon: (
      <FaLayerGroup className="text-3xl text-gray-800 group-hover:text-white" />
    ),
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Engaging audiences through innovative online marketing tactics.",
    icon: (
      <FaChartLine className="text-3xl text-gray-800 group-hover:text-white" />
    ),
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description:
      "Driving customer engagement with strategic content creation efforts.",
    icon: (
      <FaFileAlt className="text-3xl text-gray-800 group-hover:text-white" />
    ),
  },
  {
    title: "Product Evaluation",
    slug: "product-evaluation",
    description:
      "Conducting assessments to identify strengths and weaknesses of products.",
    icon: (
      <FaClipboardList className="text-3xl text-gray-800 group-hover:text-white" />
    ),
  },
  {
    title: "Search Engine Ranking",
    slug: "search-engine-ranking",
    description:
      "Increasing organic traffic by optimizing search engine rankings strategically.",
    icon: (
      <FaSearch className="text-3xl text-gray-800 group-hover:text-white" />
    ),
  },
  {
    title: "Digital Social Campaigns",
    slug: "digital-social-campaigns",
    description:
      "Driving engagement with innovative digital social marketing strategies.",
    icon: <FaGlobe className="text-3xl text-gray-800 group-hover:text-white" />,
  },
];

const OurServicePage2 = () => {
  return (
    <section className="bg-white container">
      <div>
        <h2 className="title-header-text text-gray-900 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              href={`/service/${service.slug}`}
              key={index}
              
              className="cursor-pointer"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicePage2;
