import AboutUs from "@/components/view/AboutUs";
import Banner from "@/components/view/Banner";
import ContactUs from "@/components/view/ContactUs";
import HappyCustomer from "@/components/view/HappyCustomer";
import OurService from "@/components/view/OurService";


export default function HomePage() {
    return (
      <div>
      <Banner />
       <OurService />
       <AboutUs />
       <HappyCustomer />
       <ContactUs />
      </div>
    );
  }
  