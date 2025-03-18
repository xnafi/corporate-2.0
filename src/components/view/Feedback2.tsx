"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeedbackCard from "../re-ui/FeedbackCard";


const feedbacks = [
  {
    id: 1,
    name: "Stefan Jackson Jong",
    country: "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback: "As a resource-constrained consultancy, we were reluctant to opt for one-size-fits-all marketing packages.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jackson Jong",
    country: "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback: "Due to limited marketing resources, our consultancy was reluctant to engage agencies providing generic service packages.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Johnson",
    country: "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback: "The marketing strategies provided by the agency helped us scale our business to the next level.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Smith",
    country: "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback: "We appreciated the personalized approach and innovative ideas that helped our business grow.",
    rating: 4,
  },
];

const Feedback2 = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-12 overflow-hidden max-w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title & Button Section */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Customer Feedback</h2>
          <button className="px-6 py-2 bg-lime-500 text-white rounded-full shadow-md hover:bg-lime-600 transition mt-4 lg:mt-0">
            View More →
          </button>
        </div>

        {/* Swiper Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 2 }, // Laptop
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="pb-12 max-w-full"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <FeedbackCard {...feedback} /> 
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Styling */}
          <style jsx global>{`
            .swiper-pagination {
              position: absolute;
              bottom: 0px !important;
            }

            @media (min-width: 1024px) {
              .swiper-pagination {
                position: static !important;
                display: flex;
                justify-content: center;
                margin-top: 20px;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Feedback2;
