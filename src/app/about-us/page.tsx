"use client";

import AboutUsSpecialists from "@/components/view/AboutUsSpecialists";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";
import Feedback2 from "@/components/view/Feedback2";
import LiveChat from "@/components/view/LiveChat";
import OurService from "@/components/view/OurService";
import OurTeam from "@/components/view/OurTeam";
import WhyChooseUs from "@/components/view/WhyChooseUs";
import BannerSection from "@/components/re-ui/BannerSection";

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

      {/* Content Section */}
      <AboutUsSpecialists />
      <OurService />
      <WhyChooseUs />
      <OurTeam />
      <Feedback2 />
      <ContactUs />
      <LiveChat />
      <CollaborateWork />
    </div>
  );
};

export default AboutUs;
