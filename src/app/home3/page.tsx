import BannerThree from "@/components/view/BannerThree";
import ContactUs3 from "@/components/view/ContactUs3";
import TotalCustomer from "@/components/view/TotalCustomer";

export default function Home3() {
    return (
      <div className="container flex flex-col justify-center items-center">
       <BannerThree /> 
       <TotalCustomer />
       <ContactUs3 />
      </div>
    );
  }
  