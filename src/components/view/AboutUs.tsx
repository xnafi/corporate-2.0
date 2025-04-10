import Image from "next/image";
import SecondaryButton from "../re-ui/SecondaryButton";

const AboutUs = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 overflow-hidden">
      {/* Left: Images Section */}
      <div className="relative w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-4">
        {/* First Image (Tech Lab) */}
        <div className="w-full sm:w-1/2">
          <Image
            src="https://i.postimg.cc/MT6XjK5h/modern-equipped-compu.ter-lab.jpg"
            alt="Tech Lab"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-[250px] sm:h-[300px] w-full object-cover"
          />
        </div>

        {/* Second Image (Team Discussion) */}
        <div className="w-full sm:w-1/2">
          <Image
            src="https://i.postimg.cc/dVChbfDS/businesspeople-having-discussion-office-1.jpg"
            alt="Team Discussion"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-[250px] sm:h-[300px] w-full "
          />
        </div>

        {/* Badge with Arrow - Hidden on Small Screens */}
        <div className="absolute -top-14 left-64 hidden sm:flex flex-col items-center">
          <div className="w-32 h-32 bg-white rounded-full border-2 border-black flex items-center justify-center text-sm font-bold -rotate-6">
            <span className="text-base text-center">WINNER BEST AWARD</span>
          </div>
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="w-full md:w-1/2 space-y-5 md:pl-12 text-center md:text-left">
        <h3 className="text-orange-500 uppercase font-semibold text-sm">
          About Us
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Specialists in Tech <br className="hidden md:block" /> Hurdles.
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Solving complex digital challenges with tailored solutions to optimize
          workflows and enhance efficiency.
        </p>
        <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✔ Virtual Operations Oversight
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✔ Oversight of Online Resource Management
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✔ Remote Management Strategies
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <SecondaryButton text=" About Us" withArrow href="/about-us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
