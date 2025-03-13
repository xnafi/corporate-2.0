"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
      {/* Left Side - Image and Badge */}
      <div className="relative md:w-1/2 flex justify-center pr-40">
        {/* Background Shape */}
        <div className="absolute -z-10 bg-yellow-300 w-[280px] h-[340px] md:w-[400px] md:h-[500px] rounded-[40px]"></div>

        {/* Image */}
        <Image
          src="https://i.postimg.cc/HkFhnsDJ/young-businessman-confidently-standing-with-arms.png"
          alt="Confident Businessman"
          width={350}
          height={400}
          className="rounded-lg object-fill h-[500px] w-[400px] "
        />

        {/* Badge with Rating */}
        <div className="absolute bottom-4 right-16 bg-white shadow-lg px-4 py-4 rounded-lg flex flex-col items-center border border-black border-b-4 border-r-4">
          <span className="text-lg font-semibold">50k+ Satisfied Clients</span>
          <div className="flex text-orange-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 space-y-4 mt-10 md:mt-0">
        <h4 className="text-orange-500 uppercase font-semibold">Why Choose Us</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          What we Offer our Clients.
        </h2>
        <p className="para-text">
          Solving complex digital challenges with tailored solutions to optimize workflows, enhance efficiency.
        </p>

        {/* List of Features */}
        <div className="space-y-3">
          <div className="flex items-center border rounded-lg p-3 cursor-pointer transition-all hover:bg-orange-500 hover:text-white">
            <span className="font-semibold">01. </span>
            <span className="ml-2">Documented Record of Achievement</span>
          </div>
          <div className="flex items-center border rounded-lg p-3 cursor-pointer transition-all hover:bg-orange-500 hover:text-white">
            <span className="font-semibold">02. </span>
            <span className="ml-2">We provide access to highly skilled experts.</span>
          </div>
          <div className="flex items-center border rounded-lg p-3 cursor-pointer transition-all hover:bg-orange-500 hover:text-white">
            <span className="font-semibold">03. </span>
            <span className="ml-2">High-caliber service for all needs.</span>
          </div>
          <div className="flex items-center border rounded-lg p-3 cursor-pointer transition-all hover:bg-orange-500 hover:text-white">
            <span className="font-semibold">04. </span>
            <span className="ml-2">Non-stop assistance around the clock.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
