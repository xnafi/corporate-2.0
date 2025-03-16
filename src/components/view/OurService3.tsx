import { FaLayerGroup, FaChartLine, FaFileAlt, FaClipboardList } from "react-icons/fa";


const services = [
  {
    title: "Media Advertising Solutions",
    description: "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaLayerGroup className="text-3xl text-orange-500" />,
    highlight: true, 
  },
  {
    title: "SEO Keyword Exploration",
    description: "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaFileAlt className="text-3xl text-orange-500" />,
  },
  {
    title: "Analysis of Market Trends",
    description: "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaChartLine className="text-3xl text-orange-500" />,
  },
  {
    title: "Infographics Simplify Data",
    description: "Perform a detailed technical audit to optimize website functionality and search engine health.",
    icon: <FaClipboardList className="text-3xl text-orange-500" />,
  },
];

const OurService3 = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
          <div className="max-w-lg para-text  text-start lg:text-left mt-4 lg:mt-0">
            <p>
              Addressing complicated digital tech challenges with customized solutions to streamline processes and improve.
            </p>
            <button className="mt-4 flex items-center gap-2 bg-gray-950 text-gray-100 border border-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500">
              ALL SERVICES →
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-sm transition duration-300 cursor-pointer ${
                service.highlight
                  ? "bg-white text-gray-900 hover:bg-orange-500"
                  : "bg-white text-gray-900 hover:bg-orange-500"
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-full">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService3;
