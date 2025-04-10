/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import PrimaryButton from "../../re-ui/PrimaryButton";
import SecondaryButton from "../../re-ui/SecondaryButton";
import bannerImg from "../../../../public/images/banner/3921114.jpg";

const Banner = () => {
  return (
    <section className="container2 mx-auto sm:mt-10 px-4">
      {/* Banner Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            #1 Advertising Agency
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We fuel brands <br />
            <span className="text-black">Growth and </span>
            <br />
            <span className="text-black">Success </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Boost your online presence and attract the right audience <br />
            to grow your business successfully.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-3 md:space-y-0 md:space-x-4">
            <PrimaryButton text="GET STARTED" withArrow href="/contact-us" />
            <SecondaryButton
              text="WATCH VIDEO"
              withIcon
              href="https://www.youtube.com/watch?v=xAt1xcC6qfM"
            />
          </div>
        </div>

        {/* Right Image (Now Responsive) */}
        <div className="lg:w-1/2 flex justify-center mt-12 md:mt-0">
          <Image
            src={bannerImg}
            alt="Fuel Brand Growth"
            width={600}
            height={400}
            className="max-w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px]"
          />
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-8 md:mt-2 text-center space-y-4 flex lg:flex-row flex-col items-center justify-between">
        <p className="text-gray-600 text-sm md:text-base">
          <span className="font-semibold underline text-black text-lg">
            Join 27,000+
          </span>{" "}
          companies who've reached
        </p>

        {/* Logos (Now Responsive) */}
        <div className="flex flex-wrap justify-center items-center gap-16 sm:flex-row sm:justify-between mt-4 sm:mt-0">
          <Image
            src="https://i.postimg.cc/Y99C8DF9/Google-2015-logo-svg.png"
            alt="Google"
            width={80}
            height={40}
          />
          <Image
            src="https://i.postimg.cc/7PjSGSv7/3374985-56876.jpg"
            alt="Hello"
            width={80}
            height={40}
          />
          <Image
            src="https://i.postimg.cc/fTCz9f5n/webflow7029.jpg"
            alt="Webflow"
            width={80}
            height={40}
          />
          <Image
            src="https://i.postimg.cc/HLy1Bw0L/Vine-Logo-2013.png"
            alt="Vine"
            width={80}
            height={40}
          />
          <Image
            src="https://i.postimg.cc/7hXFfm4K/Getarounds.png"
            alt="Getaround"
            width={80}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
