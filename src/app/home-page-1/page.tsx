import Banner from "@/components/view/banner/Banner-page-1";
import ChooseUs from "@/components/view/WhyChooseUsPage-1";
import AboutUsPage1 from "../../components/view/about-us/AboutUsPage-1";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ContactUs from "@/components/view/contact-us/ContactUsPage-1";
import LiveChat from "@/components/view/LiveChat";
import OurProject from "@/components/view/Project/OurProjectPage-1";
import OurService from "@/components/view/our-services/OurServicePage-1";
import OurTeam from "@/components/view/OurTeam";
import Testimonial from "@/components/view/TestimonialPage-1";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <OurService />
      <AboutUsPage1 />
      <OurProject />
      <ChooseUs />
      <OurTeam />
      <Testimonial />
      <ContactUs />
      <LiveChat />
      <CollaborateWork />
    </div>
  );
}
