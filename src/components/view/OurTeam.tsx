"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Md. Rofik Hossen",
    role: "Marketing Officer",
    image:
      "https://i.postimg.cc/K8MYZv8R/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.jpg",
    bgColor: "bg-orange-200",
  },
  {
    name: "Mr. Sogir Ahmed",
    role: "CEO & Founder",
    image:
      "https://i.postimg.cc/TYykb9yT/businessman-with-his-arms-crossed-white-background-1.jpg",
    bgColor: "bg-purple-200",
    social: true,
  },
  {
    name: "Salma Akter",
    role: "Web Designer",
    image: "https://i.postimg.cc/nVNW0gfX/young-smiling-businesswoman.jpg",
    bgColor: "bg-green-200",
  },
  {
    name: "Rejaul Haque",
    role: "Content Writer",
    image:
      "https://i.postimg.cc/0QWfMMP6/portrait-young-businessman-with-arms-crossed-looking-camera-isolated-against-white-background.jpg",
    bgColor: "bg-pink-200",
  },
];

const OurTeam: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Laptop
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile Large
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // Mobile Small
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h2 className="text-xs sm:text-sm text-orange-500 uppercase tracking-wide">
          Our Team
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Meet the Experts
        </h1>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
          We are dedicated to providing reliable clinical care, guaranteeing
          the highest standards of trustworthiness.
        </p>

        {/* Team Members Slider */}
        <div className="mt-10 max-w-[1440px] mx-auto">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-md p-4 sm:p-6 ${member.bgColor}`}
                >
                  <div className="relative w-full h-64 sm:h-64 md:h-64 lg:h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Social Icons for CEO */}
                  {member.social && (
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                        <FaTwitter className="text-blue-500" />
                      </a>
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                        <FaFacebookF className="text-blue-700" />
                      </a>
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                      >
                        <FaLinkedinIn className="text-blue-900" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                    {member.role}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
