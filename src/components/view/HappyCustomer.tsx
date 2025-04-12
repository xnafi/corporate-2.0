import CountUp from "@/utils/countUp";
import ScrollAnimation from "@/utils/scrollAnimation";

const HappyCustomer: React.FC = () => {
  return (
    <ScrollAnimation direction="popIn"  className="container mx-auto px-4 lg:py-2">
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-16 lg:gap-20">
        {/* Happy Customers */}
        <div className="w-full sm:w-auto md:text-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <CountUp from={0} to={120000} duration={2} span="+" />
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Happy Customers
          </p>
        </div>

        {/* Expert Members */}
        <div className="w-full sm:w-auto md:text-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <CountUp from={0} to={1200} duration={2} span="+" />
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Expert Members
          </p>
        </div>

        {/* Years Experience */}
        <div className="w-full sm:w-auto md:text-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <CountUp from={0} to={14} duration={2} span="+" />
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Years Experience
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default HappyCustomer;
