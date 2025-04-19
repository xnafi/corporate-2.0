import Banner2 from "@/components/view/banner/Banner-page-2";
import Feedback2 from "@/components/view/FeedBackPage-2";
import Inquiries from "@/components/view/InquiriesPage-2";
import LatestNews from "@/components/view/LatestNewsPage-2";
import StatisticsShow from "@/components/view/StatisticsShowPage-2";
import Navbar2 from "@/components/shared/Navbar-2";
import OurService2 from "@/components/view/our-services/OurServicePage-2";
import OurWork from "@/components/view/OurWorkPage-2";
import AboutUsPage2 from "../../components/view/about-us/AboutUsPage-2";

export default function Home2() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Navbar2 />
      <Banner2 />
      <OurService2 />
      <AboutUsPage2 />
      <StatisticsShow />
      <OurWork />
      <Feedback2 />
      <LatestNews />
      <Inquiries />
    </div>
  );
}
