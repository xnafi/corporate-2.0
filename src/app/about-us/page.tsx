"use client";

import AboutUsSpecialists from "@/components/view/AboutUsSpecialists";
// import OurService from "@/components/view/OurService";
import WhyChooseUs from "@/components/view/WhyChooseUs";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white">
          <h1 className="text-6xl font-extrabold">About Us</h1>
          <p className="mt-2">Home / Pages / About Us</p>
        </div>
      </div>
          
        {/* Content Section */}
        <AboutUsSpecialists />
        {/* <OurService /> */}
        <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
