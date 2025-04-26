"use client";

import ContactUsEmail from "@/components/re-ui/ContactUsEmail";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ContactUs from "@/components/view/contact-us/ContactUsPage-1";
import ScrollAnimation from "@/utils/scrollAnimation";

import Image from "next/image";

const ContactUs4 = () => {
  return (
    <div className="mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px]  flex items-center justify-center bg-black mt-[100px]">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <ScrollAnimation direction="popIn">
            <h1 className="bnr-header-text">Contact Us</h1>
          </ScrollAnimation>

          <ScrollAnimation direction="popIn">
            <p className="banner-para-text">Home / Pages / Contact Us</p>
          </ScrollAnimation>
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

export default ContactUs4;
