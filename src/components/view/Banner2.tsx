import React from "react";
import Image from "next/image";
import Button from "../re-ui/Button";

const Banner2 = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-gray-100 w-full -top-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-start items-center">
        <Image
          src="https://i.postimg.cc/657NCmj5/businesswoman-posing.jpg"
          alt="Businesswoman"
          width={600}
          height={400}
          className="rounded-lg h-[600px] object-fill mb-6"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 pl-6">
        <p className="text-sm text-gray-500">#1 Digital Marketing Agency</p>
        <h1 className="text-6xl font-extrabold text-black leading-tight">
          Web Campaign <br /> and Strategy
        </h1>
        <p className="Para-text">
          Web-based campaign solutions for targeted audience growth <br /> and improved brand visibility online.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 pt-8">
          <Button text="Get Started" variant="primary" />
          <Button text="How It Works" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
