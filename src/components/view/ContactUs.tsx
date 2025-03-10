import Image from "next/image";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-600 rounded-2xl p-6 md:p-10 mx-auto">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.postimg.cc/Jz0MB6f4/brunette-businesswoman-showing-her-tablet.jpg"
            alt="Businesswoman"
            width={500}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 md:pl-10 md:pb-36 mt-8 md:mt-0">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-8">
            Send us a message <br /> for any inquiry
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Md. Mahmud-ul-amin"
              className="w-full border-b border-gray-400 outline-none py-2"
            />
            <input
              type="email"
              placeholder="mahmudulamin745ui@gmail.com"
              className="w-full border-b border-gray-400 outline-none py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border-b border-gray-400 outline-none py-2 h-28"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 mt-4 rounded-md transition"
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
