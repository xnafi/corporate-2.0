"use client";

import LatestNews2 from "@/components/re-ui/LatestNews2";
import CollaborateWork from "@/components/view/CollaborateWork";
import Image from "next/image";

const OurBlogs = () => {
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
          <h1 className="text-6xl font-extrabold">Our Blogs</h1>
          <p className="mt-2">Home / Pages / Our Blogs</p>
        </div>
      </div>
          
        {/* Content Section */}
        <LatestNews2 />
        <CollaborateWork />
    </div>
  );
};

export default OurBlogs;
