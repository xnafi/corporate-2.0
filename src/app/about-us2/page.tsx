"use client";

import AboutUs3 from "@/components/view/AboutUs3";
import CollaborateWork from "@/components/view/CollaborateWork";
import CurrentNews from "@/components/view/CurrentNews";
import Feedback2 from "@/components/view/Feedback2";
import HappyCustomer from "@/components/view/HappyCustomer";
import OurService3 from "@/components/view/OurService3";
import Image from "next/image";

const AboutUs2 = () => {
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
          <h1 className="text-4xl lg:text-6xl font-extrabold sm:text-base">About Us</h1>
          <p className="mt-2">Home / Pages / About Us</p>
        </div>
      </div>

      {/* Content Section */}
      <AboutUs3 />
      <HappyCustomer />
      <OurService3 />
      <Feedback2 />
      <CurrentNews />
      <CollaborateWork />
    </div>
  );
};

export default AboutUs2;
