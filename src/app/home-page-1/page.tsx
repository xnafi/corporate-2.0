import AboutUs from "@/components/view/AboutUs";
import Banner from "@/components/view/banner/Banner-page-1";
import ChooseUs from "@/components/view/WhyChooseUsPage-1";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";
import HappyCustomer from "@/components/view/HappyCustomer";
import LiveChat from "@/components/view/LiveChat";
import OurProject from "@/components/view/OurProjectPage-1";
import OurService from "@/components/view/OurServicePage-1";
import OurTeam from "@/components/view/OurTeam";
import Testimonial from "@/components/view/Testimonial";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <OurService />
      <AboutUs />
      <HappyCustomer />
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
