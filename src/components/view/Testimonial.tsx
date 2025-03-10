"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Game-changer! Boosted efficiency, simplified tasks, and Highly recommended are unequivocal!",
    name: "Stefan Jong",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    color: "bg-purple-500",
  },
  {
    quote:
      "One should not hesitate to ask for the unlikely as they might think it is are unequivocal.",
    name: "Maria Gomez",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    color: "bg-green-500",
  },
  {
    quote:
      "Quick solutions with great performance, recommendations are unequivocal.",
    name: "Maria Gomez",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    color: "bg-orange-500",
  },
  {
    quote:
      "Quick solutions with great performance, recommendations are unequivocal.",
    name: "Maria Gomez",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    color: "bg-orange-500",
  },
];

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Attach navigation buttons once Swiper is ready
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className=" bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/3 text-left mb-10 md:mb-0">
          <p className="text-orange-500 uppercase text-sm font-semibold">
            Testimonial
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            1.2k+ Clients <br /> Love us
          </h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 mt-12 sm:mt-16">
            <button
              ref={prevRef}
              className="bg-white text-black w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-md hover:bg-orange-600 transition"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="bg-white text-black w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-md border hover:bg-orange-600 transition"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <div className="md:w-2/3">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3} // Default for Large Screens
            breakpoints={{
              1280: { slidesPerView: 3 }, // Large Screens
              1024: { slidesPerView: 2 }, // Tablets
              640: { slidesPerView: 1 }, // Small Tablets
              480: { slidesPerView: 1 }, // Mobile
            }}
            onSwiper={setSwiperInstance}
            className="overflow-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  {/* Quote Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${testimonial.color}`}
                  >
                    <span className="text-white text-2xl">“</span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg mt-4">{testimonial.quote}</p>

                  {/* User Info */}
                  <div className="flex items-center mt-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">
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
