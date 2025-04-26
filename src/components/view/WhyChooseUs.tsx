import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container h-full lg:h-screen">
      {/* Left Side - Image and Badge */}
      <ScrollAnimation direction="left" className="relative w-full md:w-1/2 flex justify-center md:pr-40">
        {/* Background Shape */}
        <div className="absolute -z-10 bg-yellow-300 w-[200px] h-[250px] sm:w-[280px] sm:h-[420px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-[40px]"></div>

        {/* Image */}
        <Image
          src="https://i.postimg.cc/HkFhnsDJ/young-businessman-confidently-standing-with-arms.png"
          alt="Confident Businessman"
          width={400}
          height={500}
          className="rounded-lg object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]"
        />

        {/* Badge with Rating - Hidden on Small Screens */}
        <div className="absolute bottom-4 right-16 bg-white shadow-lg px-4 py-3 rounded-lg flex-col items-center border border-black border-b-4 border-r-4 hidden md:flex">
          <span className="text-lg font-semibold">50k+ Satisfied Clients</span>
          <div className="flex text-orange-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Right Side - Content */}
      <ScrollAnimation direction="right" className="w-full md:w-1/2 space-y-4 mt-10 md:mt-0 text-center md:text-left">
        <h4 className="text-[#1A73E8] uppercase font-semibold text-sm sm:text-base">
          Why Choose Us
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          What we Offer our Clients.
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Solving complex digital challenges with tailored solutions to optimize
          workflows, enhance efficiency.
        </p>

        {/* List of Features */}
        <div className="space-y-3">
          {[
            "Documented Record of Achievement",
            "We provide access to highly skilled experts.",
            "High-caliber service for all needs.",
            "Non-stop assistance around the clock.",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center border rounded-lg p-3 cursor-pointer transition-all hover:bg-[#1A73E8] hover:text-white"
            >
              <span className="font-semibold">{`0${index + 1}. `}</span>
              <span className="ml-2">{text}</span>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhyChooseUs;
