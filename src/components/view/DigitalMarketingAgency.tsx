"use client";

import Image from "next/image";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";

const DigitalMarketingAgency = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Image & Content */}
        <div className="md:col-span-2">
          <div className="relative w-full h-80 md:h-96">
            <Image
              src="https://i.postimg.cc/tg01wkq5/colleagues-working-project-discussing-details.jpg"
              alt="Digital Marketing Agency"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Digital Marketing Agency
            </h2>
            <p className="text-gray-700 mt-4">
              Digital marketing encompasses a wide range of online strategies
              designed to promote a brand, product, or service. It involves
              search engine optimization.
            </p>
            <p className="text-gray-700 mt-4">
              Using a mix of web-based tools, digital marketing focuses on
              creating online visibility through tactics like content
              marketing, paid advertising, and influencer partnerships to
              attract and engage potential customers worldwide.
            </p>
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Search Box */}
          <div>
          <h2 className="text-lg font-bold mb-2">Search here</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none px-2 text-gray-800"
            />
            <FaSearch className="text-gray-600" />
          </div>
          </div>
        

          {/* Categories */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
            <ul className="mt-3 space-y-3">
              {[
                { name: "SEO Agency", count: 5 },
                { name: "Digital Marketing", count: 2 },
                { name: "SEO Campaign", count: 4 },
                { name: "Advertising Agency", count: 3 },
                { name: "Digital Agency", count: 7 },
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-700 border-b pb-2 last:border-none"
                >
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Card */}
          <div className="bg-orange-500 p-6 rounded-lg text-center text-white">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="mt-4 flex justify-center items-center space-x-3 bg-white rounded-full p-2">
              <FaPhoneAlt className="text-lg text-black" />
              <span className="text-lg font-medium text-black">+86-085-550-1539</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingAgency;
