import Image from "next/image";
import { ArrowRight } from "lucide-react";

const DigitalResource = () => {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* Right Side (Images) - Shown first on mobile */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-4">
        <div className="relative w-1/2">
          <Image
            src="https://i.postimg.cc/MT6XjK5h/modern-equipped-compu.ter-lab.jpg"
            alt="Digital Resource"
            width={300}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="relative w-1/2">
          <Image
            src="https://i.postimg.cc/dVChbfDS/businesspeople-having-discussion-office-1.jpg"
            alt="Discussion"
            width={300}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        {/* Top Links */}
        <div className="text-sm font-medium space-x-2">
          <a href="#" className="text-blue-500 hover:underline">
            Social Advertising
          </a>
          <span className="text-gray-500">•</span>
          <a href="#" className="text-blue-500 hover:underline">
            Web Marketing
          </a>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Digital Resource Administration
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base">
          Effective website development combined with targeted SEO strategies
          enhances visibility, improves user experience, and drives more
          organic traffic, leading to increased engagement and conversions.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2 text-gray-700 pt-4 pb-4 text-sm sm:text-base">
          <li className="flex items-center justify-center md:justify-start gap-2">
            ✔ Virtual Operations Oversight
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            ✔ Oversight of Online Resource Management
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            ✔ Remote Management Strategies
          </li>
        </ul>

        {/* Explore More Button */}
        <div className="flex justify-center md:justify-start items-center gap-2 font-medium text-black hover:text-orange-500 cursor-pointer">
          <span>EXPLORE MORE</span>
          <ArrowRight className="w-6 h-6 text-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default DigitalResource;
