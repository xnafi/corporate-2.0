"use client";

import AboutUs3 from "@/components/view/AboutUs3";
import CollaborateWork from "@/components/view/CollaborateWork";
import CurrentNews from "@/components/view/CurrentNews";
import Feedback2 from "@/components/view/Feedback2";
import HappyCustomer from "@/components/view/HappyCustomer";
import OurService3 from "@/components/view/OurService3";
import BannerSection from "@/components/re-ui/BannerSection";

const AboutUs2 = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

      {/* Content Section */}
      <AboutUs3 />
      <HappyCustomer />
      <OurService3 />
      <Feedback2 />
      <CurrentNews />
      <CollaborateWork />
    </div>
  );
};

export default AboutUs2;
