import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const AboutUs2 = () => {
  return (
    <section className=" bg-white">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between lg:gap-52">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide">About Us</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
            Marketing Agencies are Essential for Success.
          </h2>
          <p className="para-text mt-4">
            Addressing complicated digital tech challenges with customized solutions to streamline processes and improve.
          </p>
          <p className="para-text mt-2">
            Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability.
          </p>
          <button className="mt-8 px-6 py-3 bg-lime-400 text-black font-semibold rounded-full shadow-md hover:bg-lime-500 transition">
            ABOUT US
          </button>
        </div>

        {/* Right Side - Image & Badges */}
        <div className="relative md:w-1/2">
          {/* Next.js Optimized Image */}
          <div className="relative w-full h-[450px]">
            <Image
              src="https://i.postimg.cc/q7h8dzj4/professional-woman-stylish.jpg"
              alt="Professional Woman"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Award Badge */}
          <div className="absolute top-5 right-5 bg-lime-400 text-black font-bold text-lg px-4 py-2 rounded-xl shadow-md">
            <span className="text-2xl">07</span> <br />
            <span className="text-sm">Times Award Winner</span>
          </div>

          {/* Satisfied Clients Badge */}
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
            <div>
              <p className="text-gray-900 font-semibold">120k+ Satisfied Client</p>
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
