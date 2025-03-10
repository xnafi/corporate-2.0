import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutUs = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left: Images Section */}
      <div className="relative w-full md:w-1/2 flex items-center gap-4">
        {/* First Image (Smiling Man) */}
        <div className="w-1/2  lg:pt-36">
          <Image
            src="https://i.postimg.cc/MT6XjK5h/modern-equipped-compu.ter-lab.jpg"
            alt="Tech Lab"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-[300px] object-cover"
          />
        </div>

        {/* Second Image (Team Discussion) */}
        <div className="w-1/2">
          <Image
            src="https://i.postimg.cc/dVChbfDS/businesspeople-having-discussion-office-1.jpg"
            alt="Team Discussion"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Badge with Arrow */}
        <div className="absolute top-20 left-56 flex flex-col items-center ">
          <div className="w-32 h-32 bg-white rounded-full border-2 border-black flex items-center justify-center text-sm font-bold -rotate-6 ">
            <span className="text-base text-center">WINNER BEST AWARD</span>
          </div>
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="w-full md:w-1/2 space-y-5 md:pl-12 text-center md:text-left">
        <h3 className="text-orange-500 uppercase font-semibold text-sm">
          About Us
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Specialists in Tech <br className="hidden md:block" /> Hurdles.
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Solving complex digital challenges with tailored solutions to
          optimize workflows, enhance efficiency.
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
          <button className="mt-6 flex justify-between items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300 border border-b-4 border-black">
            About Us
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
