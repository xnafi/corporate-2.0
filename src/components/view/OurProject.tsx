"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, ArrowLeft } from "lucide-react";

const projects = [
  {
    title: "Social Media Advertising for Brand Awareness",
    image: "https://i.postimg.cc/jj0hM51T/rolf-van-root-Dj1-EPDH5-h4-unsplash.jpg",
  },
  {
    title: "Creative Marketing Strategy",
    image: "https://i.postimg.cc/8cQD5LK3/young-creative-people-with-laptop-sketches-discussing-new-project-together-group-guys-gals-working-m.jpg",
  },
  {
    title: "Business Growth Consultation",
    image: "https://i.postimg.cc/9QXFQrg5/walls-io-KQ3z-IIel2s-unsplash.jpg",
  },
  {
    title: "Market Research & Analysis",
    image: "https://i.postimg.cc/pXHL30Dd/medium-shot-colleagues-working-together.jpg",
  },
  {
    title: "Brand Development Strategy",
    image: "https://i.postimg.cc/Kjz71g1P/ux-indonesia-w00-Fk-E6e8z-E-unsplash.jpg",
  },
  {
    title: "Digital Transformation",
    image: "https://i.postimg.cc/jSNHnTSF/walls-io-0t71-H297-EX0-unsplash.jpg",
  },
];

const OurProject = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Recent Projects
          </h2>
          <div className="flex gap-3 mt-4 md:mt-0">
            {/* Prev Button */}
            <button className="custom-swiper-prev bg-orange-500 p-2 sm:p-3 rounded-full shadow-md hover:bg-orange-600 transition">
              <ArrowLeft className="text-white" size={20} />
            </button>
            {/* Next Button */}
            <button className="custom-swiper-next bg-orange-500 p-2 sm:p-3 rounded-full shadow-md hover:bg-orange-600 transition">
              <ArrowRight className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-hidden"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-xl overflow-hidden group shadow-lg">
                  {/* Image Section */}
                  <div className="w-full h-52 sm:h-64 md:h-72 lg:h-80 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Overlay with Text */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 sm:p-5">
                    <h3 className="text-white text-sm sm:text-lg font-semibold">{project.title}</h3>
                  </div>
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 bg-orange-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={18} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex justify-center items-center mt-6">
            <div className="custom-swiper-pagination flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
