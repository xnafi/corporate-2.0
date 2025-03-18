"use client";

import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
        alt="Our Projects Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority 
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Our Projects
        </h1>
        <p className="mt-2 text-sm sm:text-base lg:text-lg">
          Home / Pages / Our Projects
        </p>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
    </div>
  );
};

export default BannerSection;
