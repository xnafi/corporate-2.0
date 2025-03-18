"use client";

import CollaborateWork from "@/components/view/CollaborateWork";
import OurService2 from "@/components/view/OurService2";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <h1 className="bnr-header-text">
            Our Services
          </h1>
          <p className="banner-para-text">Home / Pages / Our Services</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <OurService2 />
      </div>

      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default OurServices;
