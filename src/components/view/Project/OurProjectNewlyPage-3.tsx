import Image from "next/image";
import CountUp from "@/utils/countUp";
import SecondaryButton from "@/components/re-ui/SecondaryButton";
import ScrollAnimation from "@/utils/scrollAnimation";

const OurProjectNewly = () => {
  return (
    <section className="container mx-auto w-full h-full xl:h-screen justify-center items-center">
      {/* Top section: Title & Button (Centered on small screens) */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 mb-8">
        <ScrollAnimation direction="left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Our Projects
          </h2>
        </ScrollAnimation>
        <ScrollAnimation direction="right">
          <SecondaryButton text="ALL PROJECTS" href="/projects" withArrow />
        </ScrollAnimation>
      </div>

      {/* Main Content */}
      <ScrollAnimation
        direction="popIn"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        {/* Left side: Image with Badge */}
        <div className="relative">
          <Image
            src="https://i.postimg.cc/qv9ZCqtm/teammates-working-late-office.jpg"
            alt="Teammates working late"
            width={500}
            height={350}
            className="rounded-lg w-full"
          />
          {/* Badge */}
          <div className="absolute hidden bottom-5 left-1/2 -translate-x-1/2 md:left-36 bg-white shadow-lg px-3 py-2 sm:px-4 sm:py-3 rounded-lg lg:flex items-center gap-2">
            <div className="flex -space-x-2">
              <Image
                src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full border"
              />
              <Image
                src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full border"
              />
              <Image
                src="https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg"
                alt="User"
                width={30}
                height={30}
                className="rounded-full border"
              />
            </div>
            <span className="text-xs sm:text-sm font-medium">
              120k+ Satisfied Clients
            </span>
          </div>
        </div>

        {/* Right side: Text & Stats */}
        <div className="text-center md:text-left">
          <div className="text-sm text-blue-500 space-x-2">
            <span>Social Advertising</span>{" "}
            <span className="text-gray-500">·</span> <span>Web Marketing</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-3">
            Web Development and SEO
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Effective website development combined with targeted SEO strategies
            enhances visibility, improves user experience.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center  md:justify-start gap-6 mt-8">
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-bold">
                <CountUp from={0} end={90} duration={2} />
                <span>+</span>
              </h4>
              <p className="text-gray-500 text-sm">Expert Members</p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-bold">
                <CountUp from={0} end={1.2} duration={2} />
                m+
              </h4>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>

          {/* Explore More Button (Centered on mobile, left on desktop) */}
          <div className="flex justify-center md:justify-start mt-8">
            <SecondaryButton text="EXPLORE MORE" withArrow />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default OurProjectNewly;
