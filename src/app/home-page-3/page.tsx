import BannerThree from "@/components/view/banner/Banner-page-3";
import ContactUs3 from "@/components/view/contact-us/ContactUs3";
import DigitalResource from "@/components/view/DigitalResource";
import Feedback2 from "@/components/view/FeedBackPage-2";
import LatestNewsNew from "@/components/view/LatestNewsPage-3";
import OurProjectNewly from "@/components/view/Project/OurProjectNewlyPage-3";
import OurService2 from "@/components/view/our-services/OurServicePage-2";
import TotalCustomer from "@/components/view/TotalCustomerPage-3";

export default function Home3() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
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
