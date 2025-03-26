import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import React from "react";

const OurProjectNewly = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Top section: Title & Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="title-header-text text-gray-900">Our Projects</h2>
        <button className="flex items-center gap-2 border border-black px-5 py-2 rounded-full text-black hover:bg-black hover:text-white transition">
          ALL PROJECTS <FaArrowRight />
        </button>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image with Badge */}
        <div className="relative">
          <Image
            src="https://i.postimg.cc/qv9ZCqtm/teammates-working-late-office.jpg"
            alt="Teammates working late"
            width={500}
            height={350}
            className="rounded-lg"
          />
          {/* Badge */}
          <div className="absolute bottom-5 right-20 bg-white shadow-lg px-4 py-4 rounded-lg flex items-center gap-2">
            <div className="flex -space-x-2">
              <Image src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg" alt="User" width={30} height={30} className="rounded-full border" />
              <Image src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg" alt="User" width={30} height={30} className="rounded-full border" />
              <Image src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg" alt="User" width={30} height={30} className="rounded-full border" />
            </div>
            <span className="text-sm font-medium">120k+ Satisfied Client</span>
          </div>
        </div>

        {/* Right side: Text & Stats */}
        <div>
          <div className="text-sm text-blue-500 space-x-2">
            <span>Social Advertising</span> <span className="text-gray-500">·</span> <span>Web Marketing</span>
          </div>
          <h3 className="text-3xl font-bold mt-3">Web Development and SEO</h3>
          <p className="text-gray-600 mt-4">
            Effective website development combined with targeted SEO strategies enhances visibility, improves user experience.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <h4 className="text-3xl font-bold">90+</h4>
              <p className="text-gray-500 text-sm">Expert Members</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">1.2m+</h4>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>

          {/* Explore More Button */}
          <button className=" mt-10 flex items-center gap-2 font-medium text-black hover:text-orange-500 cursor-pointer">
            EXPLORE MORE <ArrowRight className="w-10 h-10  text-6xl text-orange-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProjectNewly;
