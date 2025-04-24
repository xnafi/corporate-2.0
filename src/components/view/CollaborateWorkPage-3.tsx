/* eslint-disable react/no-unescaped-entities */
'use client'
import { useRef } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";
import ScrollAnimation from "@/utils/scrollAnimation";

const CollaborateWork = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <ScrollAnimation direction="popIn" className="bg-[#1A73E8]/90 text-white overflow-hidden">
      {/* Main Section */}
      <div className="relative flex flex-col md:flex-row items-center w-full container">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.postimg.cc/j5XKBBvj/creative-people-working-office.jpg"
            alt="Creative People Working"
            layout="fill"
            objectFit="cover"
            className="opacity-50 blur-sm"
          />
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row w-full mx-auto items-center">
          {/* Left Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Want to collaborate? Here's <br className="hidden md:block" /> how
              we work.
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-200">
              If you have questions, feel free to contact our expert for
              assistance.
            </p>
          </div>

          {/* Right Side - Watch Video Button */}
          <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <button
              onClick={openModal}
              className="relative w-24 h-24 md:w-32 md:h-32 group flex items-center justify-center rounded-full bg-white text-black hover:text-white hover:bg-[#1A73E8] duration-500 shadow-lg cursor-pointer transition-transform transform hover:scale-110"
            >
              <FaPlay className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 flex items-center justify-around text-xs font-semibold uppercase tracking-widest">
                <span className="-rotate-6 mb-12">Watch Video!</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal using <dialog> */}
      <dialog
        ref={modalRef}
        className="backdrop:bg-black/70 p-0 rounded-lg overflow-hidden w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
        onClick={closeModal}
      >
        <div
          className="relative bg-white p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </dialog>
    </ScrollAnimation>
  );
};

export default CollaborateWork;
