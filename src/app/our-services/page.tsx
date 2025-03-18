"use client";

import CollaborateWork from "@/components/view/CollaborateWork";
import OurService2 from "@/components/view/OurService2";
import BannerSection from "@/components/re-ui/BannerSection";

const OurServices = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <OurService2 />
      </div>

      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default OurServices;
