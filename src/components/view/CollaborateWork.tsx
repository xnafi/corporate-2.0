/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const CollaborateWork = () => {
  return (
    <section className="relative flex items-center justify-between w-full bg-[#9c5833] text-white px-12 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.postimg.cc/j5XKBBvj/creative-people-working-office.jpg"
          alt="Creative People Working"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex w-full max-w-7xl mx-auto items-center">
        {/* Left Content */}
        <div className="w-2/3">
          <h2 className="text-5xl font-bold leading-tight">
            Want to collaborate? Here's <br /> how we work.
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            If you have questions, feel free to contact our expert for assistance.
          </p>
        </div>

        {/* Right Side - Watch Video Button */}
        <div className="w-1/3 flex justify-end">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-32 h-32 flex items-center justify-center rounded-full bg-white text-orange-600 shadow-lg cursor-pointer group transition-transform transform hover:scale-110"
          >
            <FaPlay className="text-3xl group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 flex items-center justify-around text-xs text-gray-800 font-semibold uppercase tracking-widest">
              <span className="-rotate-6 mb-12">Watch Video!</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborateWork;
