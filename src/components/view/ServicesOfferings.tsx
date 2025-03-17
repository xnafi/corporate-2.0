import { FaCheckCircle } from "react-icons/fa";
import { FaSearch, FaGlobe, FaBoxOpen } from "react-icons/fa";
import Image from "next/image"

const serviceOfferings = [
  "Tracking website performance through data analysis and detailed reporting.",
  "Managing and overseeing the use of online resources effectively.",
  "Enhancing online presence via effective search engine ranking techniques.",
  "Product promotions led by influential social media personalities.",
  "Strategies to enhance website visitor-to-customer conversion effectiveness.",
];

const services = [
  {
    title: "Product Evaluation",
    description: "Conducting assessments to identify strengths and weaknesses of products.",
    icon: <FaBoxOpen className="text-white text-2xl" />,
  },
  {
    title: "Search Engine Ranking",
    description: "Increasing organic traffic by optimizing search engine rankings strategically.",
    icon: <FaSearch className="text-white text-2xl" />,
  },
  {
    title: "Digital Social Campaigns",
    description: "Driving engagement with innovative digital social marketing strategies.",
    icon: <FaGlobe className="text-white text-2xl" />,
  },
];

export default function ServicesOfferings() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Service Offerings List */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Services Offering</h2>
        <ul className="space-y-2">
          {serviceOfferings.map((service, index) => (
            <li key={index} className="flex items-start space-x-2">
              <FaCheckCircle className="text-orange-500 mt-1" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg text-start shadow-sm">
            <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full  mb-12">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Previous & Next Services */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
  <div className="w-full md:w-1/2 flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
    <div className="w-16 h-16 relative">
      <Image
        src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
        alt="Previous Service"
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
    <div>
      <p className="text-orange-500 text-sm">Prev Service</p>
      <h4 className="text-lg font-semibold">Content Marketing</h4>
    </div>
  </div>

  <div className="w-full md:w-1/2 flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
    <div className="w-16 h-16 relative">
      <Image
        src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
        alt="Next Service"
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
    <div>
      <p className="text-orange-500 text-sm">Next Service</p>
      <h4 className="text-lg font-semibold">Email Marketing</h4>
    </div>
  </div>
</div>;
    </section>
  );
}
