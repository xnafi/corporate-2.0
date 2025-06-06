import AboutUs from "@/components/view/about-us/AboutUsPage-1";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import CurrentNews from "@/components/view/CurrentNews";
import Feedback2 from "@/components/view/FeedBackPage-2";
import OurService3 from "@/components/view/our-services/OurService3";
import Image from "next/image";

const AboutUs2 = () => {
  return (
    <div className="mx-auto">
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
          <h1 className="bnr-header-text">About Us</h1>
          <p className="banner-para-text">Home / Pages / About Us</p>
        </div>
      </div>

      {/* Content Section */}
      <AboutUs />
      <OurService3 />
      <Feedback2 />
      <CurrentNews />
      <CollaborateWork />
    </div>
  );
};

export default AboutUs2;
