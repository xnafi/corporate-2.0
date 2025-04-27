import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

interface WorkItem {
  image: string;
  title: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    image: "https://i.postimg.cc/59nVKbJT/modern-equipped-computer-lab-1.jpg",
    title: "Creative Digital Strategy",
    description:
      "We boast a team of leading experts in their respective industries.",
  },
  {
    image: "https://i.postimg.cc/tg303HDr/people-working-as-team-company.jpg",
    title: "Business Strategy Consulting",
    description:
      "We boast a team of leading experts in their respective industries.",
  },
  {
    image: "https://i.postimg.cc/76wFXQWq/people-working-as-team-company-1.jpg",
    title: "Market Research Outcomes",
    description:
      "We boast a team of leading experts in their respective industries.",
  },
  {
    image:
      "https://i.postimg.cc/cHhVzMpw/medium-shot-colleagues-working-together-1.jpg",
    title: "Social Media Ads",
    description:
      "We boast a team of leading experts in their respective industries.",
  },
];

const OurWork = () => {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto text-center">
        <ScrollAnimation direction="popIn">
          <h2 className="title-header-text text-gray-900 mb-2 lg:mb-10">
            Our Recent Work
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 py-4 overflow-visible">
          {workItems.map((item, index) => (
            <ScrollAnimation
              direction="popIn"
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-1000"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div></div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-[#1a73e8] transition-all duration-1000 ease-linear">
                    <FiArrowRight className="text-gray-800 group-hover:hidden text-lg" />
                    <HiArrowUpRight className="text-white hidden group-hover:block text-lg" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
