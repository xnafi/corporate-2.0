import BannerThree from "@/components/view/banner/BannerThree";
import ContactUs3 from "@/components/view/ContactUs3";
import DigitalResource from "@/components/view/DigitalResource";
import Feedback2 from "@/components/view/Feedback2";
import LatestNewsNew from "@/components/view/LatestNewsNew";
import OurProjectNewly from "@/components/view/OurProjectNewly";
import OurService2 from "@/components/view/OurService2";
import TotalCustomer from "@/components/view/TotalCustomer";

export default function Home3() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <BannerThree />
      <TotalCustomer />
      <OurService2 />
      <OurProjectNewly />
      <DigitalResource />
      <Feedback2 />
      <LatestNewsNew />
      <ContactUs3 />
    </div>
  );
}
