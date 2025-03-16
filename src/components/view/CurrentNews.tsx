"use client";
import { useState } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

const newsItems = [
  {
    image:
      "https://i.postimg.cc/gjBRQjNj/jj-englert-n9-CAmj-Xls-Vk-unsplash.jpg",
    title: "Tactics for Boosting Engagement and Conversions",
    author: "Esther Howard",
    readTime: "6 min read",
    date: "03 OCT",
  },
  {
    image:
      "https://i.postimg.cc/rwRC6G6k/business-advisor-giving-his-opinion.jpg",
    title: "Content Marketing Strategies to Improve Engagement",
    author: "Jacky Smith",
    readTime: "3 min read",
    date: "07 OCT",
  },
];

const CurrentNews = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <h2 className="text-5xl font-bold text-gray-900">
            Current News and <br /> Updates
          </h2>
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-col items-start gap-4 text-start">
            <p className="para-text max-w-lg">
              Stay informed with the latest news and updates, covering
              everything from global events to local happenings, including
              significant developments in various fields and industries.
            </p>
            <button className="bg-black text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-lime-500">
              ALL PROJECTS
              <HiArrowUpRight className="text-xl transition-transform duration-300 hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover rounded-t-2xl"
                />
                {/* Date Badge */}
                <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-500 text-sm">
                  {item.author} / {item.readTime}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover Effect Button */}
              <div className="absolute bottom-6 right-6 transition-all duration-300">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300 ${
                    hoverIndex === index
                      ? "bg-lime-500 transform -translate-y-1"
                      : ""
                  }`}
                >
                  {hoverIndex === index ? (
                    <HiArrowUpRight className="text-white text-lg" />
                  ) : (
                    <FiArrowRight className="text-white text-lg" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentNews;
