import Image from "next/image";
import { Play } from "lucide-react"; // Importing play icon
import CountUp from "@/utils/countUp";
import ScrollAnimation from "@/utils/scrollAnimation";

const TotalCustomer = () => {
  return (
    <section className="w-full overflow-hidden">
      <ScrollAnimation
        direction="popIn"
        className="container w-full bg-white !text-black flex flex-col md:flex-row justify-between rounded-md shadow-md gap-10"
      >
        {/* First Card - Total Customers */}
        <div className="shadow-xl hover:drop-shadow-md hover:scale-105 duration-500 ease-in-out p-6 rounded-2xl w-full sm:w-full flex flex-col relative">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              <Image
                src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg"
                alt="User 1"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <Image
                src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <Image
                src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-full border"
              />
            </div>
            {/* Play Button */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl cursor-pointer">
              <Play className="text-orange-500 w-6 h-6" />
            </div>
          </div>
          <p className="mt-3">Our Total Customers</p>
          <CountUp
            from={0}
            end={130000}
            className="text-5xl font-bold mt-1"
            span="+"
          />
        </div>

        {/* Second Card - Testimonial */}
        <div className="shadow-xl hover:drop-shadow-md hover:scale-105 duration-500 ease-in-out p-6 rounded-2xl w-full sm:w-full flex flex-col items-center text-center">
          <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center pt-2 text-5xl font-extrabold text-center">
            “
          </div>
          <p className="text-lg mt-3 leading-relaxed">
            “Efficient, knowledgeable, & smooth experience. Highly recommended”
          </p>
          <p className="text-gray-400 mt-3 text-sm">— Musa Jamy, SEOM</p>
        </div>

        {/* Third Card - Experience */}
        <div className="shadow-xl hover:drop-shadow-md hover:scale-105 duration-500 ease-in-out p-6 rounded-2xl w-full sm:w-full flex flex-col">
          <CountUp className="text-5xl font-bold" from={0} end={12} span="+" />
          <p className="text-lg mt-1">
            Years Experience In this Field.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "SEO Traffic",
              "Agency",
              "Marketing",
              "Analysis",
              "Ranking",
              "Consulting",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default TotalCustomer;
