import { FaLayerGroup, FaChartLine, FaFileAlt, FaSearch, FaGlobe, FaClipboardList } from "react-icons/fa";
import ServiceCard from "../re-ui/ServiceCard";


const services = [
  {
    title: "Ui/Ux Design",
    description: "Delivering efficient, user-centric digital solutions through minimal, functional, and responsive interface designs.",
    icon: <FaLayerGroup className="text-3xl text-gray-800 group-hover:text-white" />,
  },
  {
    title: "Digital Marketing",
    description: "Engaging audiences through innovative online marketing tactics.",
    icon: <FaChartLine className="text-3xl text-gray-800 group-hover:text-white" />,
  },
  {
    title: "Content Marketing",
    description: "Driving customer engagement with strategic content creation efforts.",
    icon: <FaFileAlt className="text-3xl text-gray-800 group-hover:text-white" />,
  },
  {
    title: "Product Evaluation",
    description: "Conducting assessments to identify strengths and weaknesses of products.",
    icon: <FaClipboardList className="text-3xl text-gray-800 group-hover:text-white" />,
  },
  {
    title: "Search Engine Ranking",
    description: "Increasing organic traffic by optimizing search engine rankings strategically.",
    icon: <FaSearch className="text-3xl text-gray-800 group-hover:text-white" />,
  },
  {
    title: "Digital Social Campaigns",
    description: "Driving engagement with innovative digital social marketing strategies.",
    icon: <FaGlobe className="text-3xl text-gray-800 group-hover:text-white" />,
  },
];

const OurService2 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService2;
