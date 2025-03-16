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
    <section className="bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left w-full lg:w-auto">
            Our Services
          </h2>
          <div className="max-w-lg para-text text-center lg:text-left">
            <p className="text-gray-400">
              Addressing complicated digital tech challenges with customized solutions to streamline processes and improve.
            </p>
            <button className="mt-4 flex justify-center lg:justify-start items-center gap-2 bg-gray-950 text-gray-100 border border-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 w-full sm:w-auto">
              ALL SERVICES →
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-sm transition duration-300 cursor-pointer bg-white text-gray-900 hover:bg-orange-500"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
