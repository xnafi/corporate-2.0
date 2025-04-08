import AboutUs from "@/components/view/AboutUs";
import Banner from "@/components/view/Banner";
import ChooseUs from "@/components/view/ChooseUs";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";
import HappyCustomer from "@/components/view/HappyCustomer";
import LiveChat from "@/components/view/LiveChat";
import OurProject from "@/components/view/OurProject2";
import OurService from "@/components/view/OurService";
import OurTeam from "@/components/view/OurTeam";
import Testimonial from "@/components/view/Testimonial";


export default function HomePage() {
    return (
      <div className="container">
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
  