"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { FC, useState } from "react";
import ScrollAnimation from "@/utils/scrollAnimation";

interface NewsItem {
  id: number;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
  content?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Web Design",
    title: "Crafting a Successful SEO Marketing Plan.",
    author: "Jain Smith",
    date: "05 Oct 2024",
    content:
      "SEO marketing is essential for businesses to improve visibility and attract more customers. Learn how to craft a perfect SEO strategy.",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/rwRC6G6k/business-advisor-giving-his-opinion.jpg",
    category: "Marketing",
    title: "Tactics to Improve Content Engagement",
    author: "Jain Smith",
    date: "05 Oct 2024",
    content:
      "Content engagement is the key to audience retention. Discover techniques to keep your readers interested and engaged.",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/gjBRQjNj/jj-englert-n9-CAmj-Xls-Vk-unsplash.jpg",
    category: "Agency",
    title: "Innovative ways to Captivate your Audience.",
    author: "Jain Smith",
    date: "05 Oct 2024",
    content:
      "Captivating your audience is essential for success. Here are some innovative ways to keep them hooked.",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
];

const itemsPerPage = 6;

const LatestNews2: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newsItems.slice(startIndex, endIndex);

  return (
    <section className="container bg-white">
      <div className="mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentItems.map((item) => (
            <ScrollAnimation
              direction="popIn"
              key={item.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover rounded-t-xl"
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-black/50">
                  <Link
                    href={`/news/${item.id}`}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1A73E8] transition-all duration-300 cursor-pointer"
                  >
                    <HiArrowUpRight className="text-white text-xl" />
                  </Link>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-gray-500 text-sm">
                  {item.author} / {item.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-start space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 text-sm rounded-lg ${
                currentPage === page
                  ? "bg-[#1A73E8] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews2;
