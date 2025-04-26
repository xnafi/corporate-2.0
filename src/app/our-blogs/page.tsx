"use client";

import LatestNews2 from "@/components/re-ui/LatestNews2";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";

const OurBlogs = () => {
  return (
    <div className="mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black mt-[100px]">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <ScrollAnimation direction="popIn">
            <h1 className="bnr-header-text">Our Blogs</h1>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="banner-para-text">Home / Pages / Our Blogs</p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <LatestNews2 />
      </div>

      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default OurBlogs;
