"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

type TestimonialType = {
  quote: string;
  name: string;
  country: string;
  image: string;
  color: string;
};

const testimonials: TestimonialType[] = [
  {
    quote:
      "Game-changer! Boosted efficiency, simplified tasks, and Highly recommended!",
    name: "Stefan Jong",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    color: "bg-purple-500",
  },
  {
    quote:
      "One should not hesitate to ask for the unlikely as they might think it is.",
    name: "Maria Gomez",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    color: "bg-green-500",
  },
  {
    quote: "Quick solutions with great performance, recommendations.",
    name: "John Doe",
    country: "UK",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    color: "bg-orange-500",
  },
  {
    quote: "Absolutely love the service! It exceeded my expectations. ",
    name: "Emma Smith",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    color: "bg-blue-500",
  },
];

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-gray-100 py-16 overflow-hidden mt-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/3 text-center lg:text-left mb-10 md:mb-0">
          <p className="text-[#1A73E8] uppercase text-sm font-semibold">
            Testimonial
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
            1.2k+ Clients <br /> Love us
          </h2>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-12">
            <button
              ref={prevRef}
              className="bg-[#1A73E8] text-white  w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md transition"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="bg-[#1A73E8] text-white  w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md border transition"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="md:w-2/3 overflow-hidden w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1} // Default: 1 card on Mobile
            breakpoints={{
              640: { slidesPerView: 1 }, // Small devices (1 card)
              768: { slidesPerView: 2 }, // Tablets (2 cards)
              1024: { slidesPerView: 3 }, // Laptops (3 cards)
            }}
            onSwiper={setSwiperInstance}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg relative h-full w-full max-w-[320px] sm:max-w-[400px] mx-auto">
                  {/* Quote Icon */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${testimonial.color}`}
                  >
                    <span className="text-white text-lg sm:text-2xl">“</span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm sm:text-base mt-4 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center mt-4 sm:mt-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={35}
                      height={35}
                      className="rounded-full sm:w-12 sm:h-12"
                    />
                    <div className="ml-2 sm:ml-3">
                      <h4 className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
