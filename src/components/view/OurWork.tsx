"use client";
import { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

const workItems = [
  {
    image: "https://i.postimg.cc/59nVKbJT/modern-equipped-computer-lab-1.jpg",
    title: "Creative Digital Strategy",
    description: "We boast a team of leading experts in their respective industries.",
  },
  {
    image: "https://i.postimg.cc/tg303HDr/people-working-as-team-company.jpg",
    title: "Business Strategy Consulting",
    description: "We boast a team of leading experts in their respective industries.",
  },
  {
    image: "https://i.postimg.cc/76wFXQWq/people-working-as-team-company-1.jpg",
    title: "Market Research Outcomes",
    description: "We boast a team of leading experts in their respective industries.",
  },
  {
    image: "https://i.postimg.cc/cHhVzMpw/medium-shot-colleagues-working-together-1.jpg",
    title: "Social Media Ads",
    description: "We boast a team of leading experts in their respective industries.",
  },
];

const OurWork = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Recent Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
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
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div></div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                      hoverIndex === index ? "bg-lime-500" : "bg-gray-200"
                    }`}
                  >
                    {hoverIndex === index ? (
                      <HiArrowUpRight className="text-white text-lg" />
                    ) : (
                      <FiArrowRight className="text-gray-800 text-lg" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
