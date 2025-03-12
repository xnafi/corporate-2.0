"use client";

import Image from "next/image";

const Inquiries = () => {
  return (
    <>
      {/* Main Section */}
      <section className="relative flex flex-col md:flex-row items-center w-full bg-[#9c5833] text-white px-6 py-16 overflow-hidden md:px-12 lg:px-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.postimg.cc/0QN685g5/young-pretty-woman-using-mobile.jpg"
            alt="Creative People Working"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center">
          {/* Left Content */}
          <div className="w-full md:w-2/3 text-center md:text-left ">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Have inquiries? Get <br className="hidden md:block" /> in touch.
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-200">
              For any inquiries and questions feel free to ask. Do not hesitate
              to reach out and get in touch with us.
            </p>
          </div>

          {/* Right Side - Watch Video Button */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <button className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white text-orange-600 shadow-lg cursor-pointer group transition-transform transform hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-around text-xs text-gray-800 font-semibold uppercase tracking-widest">
                <span className="-rotate-6 mb-6">Get a Quote!!</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquiries;
