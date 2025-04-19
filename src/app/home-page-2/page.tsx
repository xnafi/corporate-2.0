import Banner2 from "@/components/view/banner/Banner-page-2";
import Feedback2 from "@/components/view/Feedback2";
import Inquiries from "@/components/view/Inquiries";
import LatestNews from "@/components/view/LatestNews";
import Member2 from "@/components/view/Member2";
import Navbar2 from "@/components/shared/Navbar-2";
import OurService2 from "@/components/view/our-services/OurServicePage-2";
import OurWork from "@/components/view/OurWork";
import AboutUsPage2 from '../../components/view/about-us/AboutUsPage-2';

export default function Home2() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar2 />
      <Banner2 />
      <OurService2 />
      <AboutUsPage2 />
      <Member2 />
      <OurWork />
      <Feedback2 />
      <LatestNews />
      <Inquiries />
    </div>
  );
}
