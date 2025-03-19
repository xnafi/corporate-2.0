"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi"; 
import { BsCheckCircle } from "react-icons/bs";

const BannerThree = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-12 ">
      {/* Left Section */}
      <div className="md:w-2/3 text-center md:text-left ">
        <p className="text-gray-500 text-sm font-medium mt-16 md:mt-2 lg:mt-0">#1 SEO Campaign.</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
          Grow Traffic and <br /> Leads through <br /> Search
        </h1>
        <p className=" banner-para-text ">
          Boost your online presence and attract the right audience to grow
          <br />
          your business successfully.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full  font-semibold text-lg flex items-center gap-2 hover:bg-blue-700 transition">
            How It Works <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 relative flex justify-center">
        {/* Orange Background Shape */}
        {/* <div className="absolute top-20 -z-10 w-80 h-80 bg-orange-500 rounded-full blur-xl opacity-30"></div> */}

        {/* Image */}
        <Image
          src="https://i.postimg.cc/85qGmD23/portrait-confident-young-businessman-with-his-arms-crossed.jpg"
          alt="Businessman"
          width={350}
          height={350}
          className="rounded-lg  h-[400px] mr-4"
        />

        {/* Review Card */}
        <div className="absolute top-6 right-2 bg-white shadow-lg px-5 py-3 rounded-lg flex items-center gap-3 border border-gray-200">
          <BsCheckCircle className="text-orange-500 text-2xl" />
          <div>
            <p className="text-xl font-bold">97%</p>
            <p className="text-gray-600 text-sm">Positive Reviews</p>
          </div>
        </div>

        {/* Analytics Card (Bottom Left) */}
        <div className="absolute bottom-6 -left-2 bg-white shadow-lg px-5 py-3 rounded-lg flex items-center gap-3 border border-gray-200">
          <FiTrendingUp className="text-blue-500 text-2xl" />
          <div>
            <p className="text-xl font-bold">1,240</p>
            <p className="text-gray-600 text-sm">Avg Minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
