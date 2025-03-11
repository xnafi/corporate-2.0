/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

const CollaborateWork = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when pressing the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Main Section */}
      <section className="relative flex flex-col md:flex-row items-center w-full bg-[#9c5833] text-white px-6 py-16 overflow-hidden md:px-12 lg:px-16">
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
        <div className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center">
          {/* Left Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Want to collaborate? Here's <br className="hidden md:block" /> how we work.
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-200">
              If you have questions, feel free to contact our expert for assistance.
            </p>
          </div>

          {/* Right Side - Watch Video Button */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white text-orange-600 shadow-lg cursor-pointer group transition-transform transform hover:scale-110"
            >
              <FaPlay className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 flex items-center justify-around text-xs text-gray-800 font-semibold uppercase tracking-widest">
                <span className="-rotate-6 mb-12">Watch Video!</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        >
          <div
            className="relative w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={24} />
            </button>

            {/* Video Player */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-md"
                src="https://www.youtube.com/embed/lmwmg4pwdBc"
                title="Collaborate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollaborateWork;
