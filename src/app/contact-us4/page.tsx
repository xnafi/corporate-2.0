"use client";

import ContactUsEmail from "@/components/re-ui/ContactUsEmail";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";
import BannerSection from "@/components/re-ui/BannerSection";


const ContactUs4 = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <ContactUs />
      </div>
      <div className="">
        <ContactUsEmail />
      </div>
      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default ContactUs4;
