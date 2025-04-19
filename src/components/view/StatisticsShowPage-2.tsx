import CountUp from "@/utils/countUp";
import ScrollAnimation from "@/utils/scrollAnimation";

const Member2 = () => {
  return (
    <section className="bg-white w-full container space-y-6 py-10">
      {/* Title and Description */}
      <ScrollAnimation direction="left" className="flex flex-col space-y-4">
        <h2 className="text-3xl text-center mx-auto lg:mx-0 lg:text-start items-center sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Statistics show <br />
          <span className="text-black">Reliability.</span>
        </h2>
        <p className="text-gray-600 md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
          Attaining wealth success hinges on receiving expert counsel and
          implementing sound financial strategies for long-term prosperity.
        </p>
      </ScrollAnimation>

      {/* Statistics Section */}
      <ScrollAnimation
        direction="popIn"
        className=" grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20"
      >
        {/* Card 1 */}
        <div className="w-full bg-gray-100 p-7 mx-auto text-center rounded-xl shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            <CountUp from={0} end={20} duration={2} span="+" />
          </h3>
          <p className="text-gray-600 mt-2">Years of Excellence</p>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-gray-100 p-7 mx-auto text-center rounded-xl shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            <CountUp from={0} end={1379} duration={2} span="+" />
          </h3>
          <p className="text-gray-600 mt-2">Expert Members</p>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-gray-100 p-7 mx-auto text-center rounded-xl shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            <CountUp from={0} end={72} duration={2} span="k" />
          </h3>
          <p className="text-gray-600 mt-2">Projects Completed</p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Member2;
