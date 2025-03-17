"use client";

// import { useState } from "react";
import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import LatestNews from "./LatestNews";

const SingleBlogAudience = () => {
  const categories = [
    { name: "SEO Agency", count: 5 },
    { name: "Digital Marketing", count: 2 },
    { name: "SEO Campaign", count: 4 },
    { name: "Advertising Agency", count: 3 },
    { name: "Digital Agency", count: 7 },
  ];

  const recentPosts = [
    {
      image: "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "Maximizing marketing impact through social media.",
      date: "Jan 12, 2024",
    },
    {
      image: "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "The crucial role of SEO in digital strategy.",
      date: "May 04, 2024",
    },
    {
      image: "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "A beginner’s guide to SEO for blogging.",
      date: "Oct 19, 2024",
    },
  ];

  const tags = ["SEO", "Advertising", "Digital Marketing", "Digital Agency", "SEO Campaign"];

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section (2/3) */}
        <div className="md:col-span-2">
          {/* Blog Image */}
          <Image
            src="https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg"
            alt="Blog Image"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg"
          />

          {/* Blog Meta */}
          <div className="flex items-center text-gray-500 text-sm mt-4 space-x-4">
            <div className="flex items-center gap-1">
              <IoPersonOutline className="text-gray-600" />
              <span>Esther Howard</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegComment className="text-gray-600" />
              <span>Comments</span>
            </div>
            <div className="flex items-center gap-1">
              <IoCalendarOutline className="text-gray-600" />
              <span>Oct 03, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegHeart className="text-gray-600" />
            </div>
          </div>
            

          {/* Blog Title & Content */}
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Innovative ways to Captivate <br /> your Audience.
          </h1>
          <p className="text-gray-600 mt-4">
            Discover fresh and innovative approaches to captivate your audience, keeping them engaged and intrigued with unique content, creative storytelling, and interactive experiences.
          </p>
          <p className="text-gray-600 mt-4">
            Explore cutting-edge strategies designed to capture the attention of your audience, utilizing creative visuals, immersive experiences, and compelling narratives that foster deeper connections and boost engagement.
          </p>

          <LatestNews />
        </div>

        {/* Right Section (1/3) */}
        <aside className="md:col-span-1 space-y-8">
          {/* Search Bar */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Search Here</h2>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
            <ul className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between text-gray-700 text-sm border-b py-2">
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
            <ul className="mt-2 space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                    <p className="text-sm text-gray-800 font-medium">{post.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Tags</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-xs text-gray-700 bg-gray-200 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Us Card */}
                    <div className="bg-orange-500 p-6 rounded-lg text-center text-white">
                      <h3 className="text-lg sm:text-xl font-semibold">Grow your business with us</h3>
                      <div className="mt-4 flex justify-center items-center space-x-2 bg-white rounded-full p-2">
                        <FaPhoneAlt className="text-lg text-black" />
                        <span className="text-sm sm:text-lg font-medium text-black">
                          Contact Us
                        </span>
                      </div>
                    </div>
        </aside>
      </div>
    </section>
  );
};

export default SingleBlogAudience;
