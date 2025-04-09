import AboutUs2 from "@/components/view/AboutUs2";
import Banner2 from "@/components/view/Banner2";
import Feedback2 from "@/components/view/Feedback2";
import Inquiries from "@/components/view/Inquiries";
import LatestNews from "@/components/view/LatestNews";
import Member2 from "@/components/view/Member2";
import Navbar2 from "@/components/shared/Navbar-2";
import OurService2 from "@/components/view/OurService2";
import OurWork from "@/components/view/OurWork";

export default function Home2() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <Navbar2 />
      <Banner2 />
      <OurService2 />
      <AboutUs2 />
      <Member2 />
      <OurWork />
      <Feedback2 />
      <LatestNews />
      <Inquiries />
    </div>
  );
}
