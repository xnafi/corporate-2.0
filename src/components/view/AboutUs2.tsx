import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const AboutUs2 = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between lg:gap-20">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide mb-8">About Us</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
            Marketing Agencies are Essential for Success.
          </h2>
          <p className="text-gray-600 mt-4">
            Addressing complicated digital tech challenges with customized solutions to streamline processes and improve.
          </p>
          <p className="text-gray-600 mt-2">
            Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability.
          </p>
          <button className="mt-8 px-6 py-3 bg-lime-400 text-black font-semibold rounded-full shadow-md hover:bg-lime-500 transition">
            ABOUT US
          </button>
        </div>

        {/* Right Side - Image & Badges */}
        <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
          {/* Next.js Optimized Image */}
          <div className="relative w-full h-[400px] sm:h-[450px]">
            <Image
              src="https://i.postimg.cc/q7h8dzj4/professional-woman-stylish.jpg"
              alt="Professional Woman"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Award Badge */}
          <div className="absolute top-5 right-5 bg-lime-400 text-black font-bold text-lg px-4 py-2 rounded-xl shadow-md hidden lg:block">
            <span className="text-2xl">07</span> <br />
            <span className="text-sm">Times Award Winner</span>
          </div>

          {/* Satisfied Clients Badge */}
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
            <div>
              <p className="text-gray-900 font-semibold">120k+ Satisfied Clients</p>
              <div className="flex items-center -space-x-2">
                <Image src="https://randomuser.me/api/portraits/women/44.jpg" width={32} height={32} alt="Client 1" className="rounded-full border-2 border-white" />
                <Image src="https://randomuser.me/api/portraits/men/45.jpg" width={32} height={32} alt="Client 2" className="rounded-full border-2 border-white" />
                <Image src="https://randomuser.me/api/portraits/men/46.jpg" width={32} height={32} alt="Client 3" className="rounded-full border-2 border-white" />
                <div className="w-8 h-8 bg-lime-400 flex items-center justify-center rounded-full text-white">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
