import React from "react";
import Image from "next/image";
import banner from "../../../../public/images/banner/banner2.jpg";
import ScrollAnimation from "@/utils/scrollAnimation";
import PrimaryButton from "@/components/re-ui/PrimaryButton";
import SecondaryButton from "@/components/re-ui/SecondaryButton";

const BannerPage2 = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between  w-full h-full lg:h-screen container2">
        {/* Left Image */}

        <ScrollAnimation
          direction="popIn"
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <Image
            src={banner}
            alt="Digital Marketing"
            width={600}
            height={400}
            className="rounded-lg object-fill h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[600px]"
          />
        </ScrollAnimation>

        {/* Right Content */}
        <ScrollAnimation
          direction="popIn"
          className="w-full md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0 md:pl-6"
        >
          <p className="text-sm text-gray-500">#1 Digital Marketing Agency</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Web Campaign <br /> and Strategy
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Web-based campaign solutions for targeted audience growth{" "}
            <br className="hidden md:block" />
            and improved brand visibility online.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-3 md:space-y-0 md:space-x-4">
            <PrimaryButton text="Get Started" href="/contact-us" />
            <SecondaryButton text="How It Works" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BannerPage2;
