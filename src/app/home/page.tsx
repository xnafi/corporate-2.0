import AboutUs from "@/components/view/AboutUs";
import Banner from "@/components/view/Banner";
import ChooseUs from "@/components/view/ChooseUs";
import CollaborateWork from "@/components/view/CollaborateWork";
import ContactUs from "@/components/view/ContactUs";
import HappyCustomer from "@/components/view/HappyCustomer";
import LiveChat from "@/components/view/LiveChat";
import OurService from "@/components/view/OurService";
import OurTeam from "@/components/view/OurTeam";


export default function HomePage() {
    return (
      <div>
      <Banner />
       <OurService />
       <AboutUs />
       <HappyCustomer />
       <ChooseUs />
       <OurTeam />
       <ContactUs />
       <LiveChat />
       <CollaborateWork />
      </div>
    );
  }
  