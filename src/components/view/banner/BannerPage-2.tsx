import React from "react";
import Image from "next/image";
import Button from "../../re-ui/Button";

const BannerPage2 = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-gray-100 w-full -top-12 ">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="https://i.postimg.cc/657NCmj5/businesswoman-posing.jpg"
          alt="Businesswoman"
          width={600}
          height={400}
          className="rounded-lg object-fill h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[600px]"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0 md:pl-6">
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
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
          <Button text="Get Started" variant="primary" />
          <Button text="How It Works" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default BannerPage2;
