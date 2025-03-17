"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const newsItems = [
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
    image: "https://i.postimg.cc/rwRC6G6k/business-advisor-giving-his-opinion.jpg",
    category: "Marketing",
    title: "Tactics to Improve Content Engagement",
    author: "Jain Smith",
    date: "05 Oct 2024",
    content:
      "Content engagement is the key to audience retention. Discover techniques to keep your readers interested and engaged.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/gjBRQjNj/jj-englert-n9-CAmj-Xls-Vk-unsplash.jpg",
    category: "Agency",
    title: "Innovative ways to Captivate your Audience.",
    author: "Jain Smith",
    date: "05 Oct 2024",
    content:
      "Captivating your audience is essential for success. Here are some innovative ways to keep them hooked.",
  },
  {
    id:4,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id:5,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id:6,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
  {
    id:7,
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Tech",
    title: "The Future of AI in Web Development",
    author: "Jain Smith",
    date: "06 Oct 2024",
  },
];

const itemsPerPage = 6;

const LatestNews2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border hover:shadow-lg"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
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
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoverIndex === index ? "bg-black/50 opacity-100" : "opacity-0"
                  }`}
                >
                  <Link href={`/news/${item.id}`}>
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 transition-all duration-300 cursor-pointer"
                    >
                      <HiArrowUpRight className="text-white text-xl" />
                    </div>
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
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-start space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 text-sm rounded-lg ${
                currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
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
