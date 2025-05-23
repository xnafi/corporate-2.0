import AboutUsSpecialists from "@/components/view/about-us/AboutUsSpecialists";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ContactUs from "@/components/view/contact-us/ContactUsPage-1";
import Feedback2 from "@/components/view/FeedBackPage-2";
import LiveChat from "@/components/view/LiveChat";
import OurService from "@/components/view/our-services/OurServicePage-1";
import OurTeam from "@/components/view/OurTeam";
import WhyChooseUs from "@/components/view/WhyChooseUs";
import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mx-auto overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-black mt-[100px]">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white">
          <ScrollAnimation direction="popIn">
            <h1 className="bnr-header-text">About Us</h1>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="banner-para-text">Home / Pages / About Us</p>
          </ScrollAnimation>
        </div>
      </div>

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
