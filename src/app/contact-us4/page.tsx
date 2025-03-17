"use client";

import ContactUsEmail from "@/components/re-ui/ContactUsEmail";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";

import Image from "next/image";


const ContactUs2 = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-2 text-sm sm:text-base">Home / Pages / Contact Us</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <ContactUs />
      </div>
      <div className="">
        <ContactUsEmail />
      </div>
      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default ContactUs2;
