import CountUp from "@/utils/countUp";
import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";

const AboutUsSpecialists = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container">
      {/* Left Side Content */}

      <ScrollAnimation direction="left" className="md:w-1/2 space-y-4 text-center md:text-left">
        <h4 className="text-[#1A73E8] uppercase font-semibold">About Us</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Specialists in Tech Hurdles.
        </h2>
        <p className="text-gray-600">
          Solving complex digital challenges with tailored solutions to optimize
          workflows, enhance efficiency.
        </p>

        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center justify-center md:justify-start">
            ✔ Virtual Operations Oversight
          </li>
          <li className="flex items-center justify-center md:justify-start">
            ✔ Oversight of Online Resource Management
          </li>
          <li className="flex items-center justify-center md:justify-start">
            ✔ Remote Management Strategies
          </li>
        </ul>
      </ScrollAnimation>

      {/* Right Side - Image and 97% Badge */}

      <ScrollAnimation
        direction="right"
        className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0 lg:pl-44"
      >
        {/* Background Shape */}
        <div className="absolute -z-10 bg-purple-300 w-[220px] h-[280px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px] rounded-[40px]"></div>

        {/* Image - Adjusting size on different screens */}
        <Image
          src="https://i.postimg.cc/fTjQSdWG/julia-potter-T7-XG8-QAn0-Mw-unsplash.jpg"
          alt="Specialist Woman"
          width={350}
          height={400}
          className="rounded-lg object-cover w-[220px] h-[280px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px]"
        />

        {/* 97% Success Rate - Hidden on small screens */}
        <div className="absolute bottom-4 left-32 bg-white shadow-lg px-4 py-2 rounded-lg flex-col items-center sm:flex hidden">
          <CountUp
            from={0}
            end={97}
            span="%"
            className="text-4xl sm:text-6xl font-bold"
          />
          <span className="text-sm text-gray-600">SUCCESS RATE</span>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutUsSpecialists;
