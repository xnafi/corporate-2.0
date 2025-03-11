import Image from "next/image";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="container px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-600 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mx-auto max-w-[1200px]">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.postimg.cc/Jz0MB6f4/brunette-businesswoman-showing-her-tablet.jpg"
            alt="Businesswoman"
            width={500}
            height={400}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Send us a message <br className="hidden sm:block" /> for any inquiry
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-400 outline-none py-2 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-400 outline-none py-2 text-sm sm:text-base"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border-b border-gray-400 outline-none py-2 h-24 sm:h-28 text-sm sm:text-base"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 mt-4 rounded-md transition text-sm sm:text-base"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
