"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeedbackCard from "../re-ui/FeedbackCard";
import ScrollAnimation from "@/utils/scrollAnimation";
import SecondaryButton from "../re-ui/SecondaryButton";

interface FeedbackItem {
  id: number;
  name: string;
  country: string;
  image: string;
  feedback: string;
  rating: number;
}

const feedbacks: FeedbackItem[] = [
  {
    id: 1,
    name: "Stefan Jackson Jong",
    country:
      "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback:
      "As a resource-constrained consultancy, we were reluctant to opt for one-size-fits-all marketing packages.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jackson Jong",
    country:
      "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback:
      "Due to limited marketing resources, our consultancy was reluctant to engage agencies providing generic service packages.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Johnson",
    country:
      "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback:
      "The marketing strategies provided by the agency helped us scale our business to the next level.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Smith",
    country:
      "https://i.postimg.cc/mgvDv3jw/simple-canada-flag-isolated-on-white-background-vector.jpg",
    image: "https://i.postimg.cc/L8XL9VzF/photo-1633332755192-727a05c4013d.jpg",
    feedback:
      "We appreciated the personalized approach and innovative ideas that helped our business grow.",
    rating: 4,
  },
];

const Feedback2 = () => {
  return (
    <div className="w-full">
      <div className="container space-y-4">
        {/* Title & Button Section */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left space-y-3 lg:space-y-0">
          <ScrollAnimation direction="left">
            <h2 className="title-header-text text-gray-900">
              Customer Feedback
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <SecondaryButton text="View More" withArrow />
          </ScrollAnimation>
        </div>

        {/* Swiper Slider Container */}
        <ScrollAnimation direction="down" className="relative">
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
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Feedback2;
