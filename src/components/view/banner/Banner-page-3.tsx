import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import CountUp from "@/utils/countUp";
import SecondaryButton from "@/components/re-ui/SecondaryButton";
import ScrollAnimation from "@/utils/scrollAnimation";

const BannerThree = () => {
  return (
    <section className="container2 flex flex-col md:flex-row w-full space-y-7 lg:mt-0 justify-center items-center">
      {/* Left Section */}
      <ScrollAnimation
        direction="left"
        className="md:w-2/3 text-center md:text-left"
      >
        <p className="text-gray-500 text-sm font-medium">#1 SEO Campaign.</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
          Grow Traffic and <br /> Leads through <br /> Search
        </h1>
        <p className=" banner-para-text ">
          Boost your online presence and attract the right audience to grow
          <br />
          your business successfully.
        </p>

        {/* Buttons */}
        <div className="flex mt-6 flex-col md:flex-row items-center justify-center lg:justify-start space-y-3 md:space-y-0 md:space-x-4">
          <SecondaryButton text="GET STARTED" withArrow href="/contact-us" />
          <SecondaryButton text="How It Works" />
        </div>
      </ScrollAnimation>

      {/* Right Section */}
      <ScrollAnimation
        direction="right"
        className="md:w-1/3 relative flex justify-center"
      >
        <Image
          src="https://i.postimg.cc/85qGmD23/portrait-confident-young-businessman-with-his-arms-crossed.jpg"
          alt="Businessman"
          width={350}
          height={350}
          className="rounded-lg  h-[400px] mr-4"
        />

        {/* Review Card */}
        <div className="absolute top-6 right-2 bg-white shadow-lg px-5 py-3 rounded-lg flex items-center gap-3 border border-gray-200">
          <BsCheckCircle className="text-orange-500 text-2xl" />
          <div>
            <CountUp className="text-xl font-bold" from={0} end={97} span="%" />

            <p className="text-gray-600 text-sm">Positive Reviews</p>
          </div>
        </div>

        {/* Analytics Card (Bottom Left) */}
        <div className="absolute top-64 -left-2 bg-white shadow-lg px-5 py-3 rounded-lg flex items-center gap-3 border border-gray-200">
          <FiTrendingUp className="text-blue-500 text-2xl" />
          <div>
            <CountUp className="text-xl font-bold" from={0} end={1240} />
            <p className="text-gray-600 text-sm">Avg Minutes</p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default BannerThree;
