"use client";

import LatestNews2 from "@/components/re-ui/LatestNews2";
import CollaborateWork from "@/components/view/CollaborateWork";
import BannerSection from "@/components/re-ui/BannerSection";

const OurBlogs = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

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
