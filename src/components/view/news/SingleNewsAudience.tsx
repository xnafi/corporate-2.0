import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import LatestNews3 from "./LatestNews3";
import CommentsSection from "../CommentsSection";
import ScrollAnimation from "@/utils/scrollAnimation";

interface Category {
  name: string;
  count: number;
}

interface RecentPost {
  image: string;
  title: string;
  date: string;
}

const SingleNewsAudience = () => {
  const categories: Category[] = [
    { name: "SEO Agency", count: 5 },
    { name: "Digital Marketing", count: 2 },
    { name: "SEO Campaign", count: 4 },
    { name: "Advertising Agency", count: 3 },
    { name: "Digital Agency", count: 7 },
  ];

  const recentPosts: RecentPost[] = [
    {
      image:
        "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "Maximizing marketing impact through social media.",
      date: "Jan 12, 2024",
    },
    {
      image:
        "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "The crucial role of SEO in digital strategy.",
      date: "May 04, 2024",
    },
    {
      image:
        "https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg",
      title: "A beginner’s guide to SEO for blogging.",
      date: "Oct 19, 2024",
    },
  ];

  const tags: string[] = [
    "SEO",
    "Advertising",
    "Digital Marketing",
    "Digital Agency",
    "SEO Campaign",
  ];

  return (
    <section className="container bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section (Main Content) */}
        <div className="md:col-span-2">
          {/* Blog Image */}
          <ScrollAnimation direction="left">
            <Image
              src="https://i.postimg.cc/yY9pw1Fj/photographer-explaining-about-shot-his-team-studio-looking-laptop-talking-his-assistants-holding-cam.jpg"
              alt="Blog Image"
              width={800}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </ScrollAnimation>

          {/* Blog Meta */}
          <ScrollAnimation
            direction="left"
            className="flex flex-wrap items-center text-gray-500 text-sm mt-4 gap-3"
          >
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
          </ScrollAnimation>
          {/* Blog Title & Content */}
          <ScrollAnimation direction="left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
              Innovative ways to Captivate your Audience.
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="left">
            <p className="text-gray-600 mt-4">
              Discover fresh and innovative approaches to captivate your
              audience, keeping them engaged and intrigued with unique content,
              creative storytelling, and interactive experiences.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="left">
            <p className="text-gray-600 mt-4">
              Explore cutting-edge strategies designed to capture the attention
              of your audience, utilizing creative visuals, immersive
              experiences, and compelling narratives that foster deeper
              connections and boost engagement.
            </p>
          </ScrollAnimation>

          <LatestNews3 />
          <CommentsSection />
        </div>

        {/* Right Section (Sidebar) */}
        <aside className="md:col-span-1 space-y-6">
          {/* Search Bar */}
          <ScrollAnimation direction="right">
            <h2 className="text-lg font-semibold text-gray-900">Search Here</h2>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            </div>
          </ScrollAnimation>

          {/* Categories */}
          <div>
            <ScrollAnimation direction="right">
              <h2 className="text-lg font-semibold text-gray-900">
                Categories
              </h2>
            </ScrollAnimation>

            <ul className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <ScrollAnimation
                  direction="right"
                  key={index}
                  className="flex justify-between text-gray-700 text-sm border-b py-2"
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </ScrollAnimation>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <ScrollAnimation direction="right">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Posts
            </h2>
            <ul className="mt-2 space-y-4">
              {recentPosts.map((post, index) => (
                <ScrollAnimation
                  direction="right"
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                    <p className="text-sm text-gray-800 font-medium">
                      {post.title}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </ul>
          </ScrollAnimation>

          {/* Tags */}
          <ScrollAnimation direction="right">
            <h2 className="text-lg font-semibold text-gray-900">Tags</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs text-gray-700 bg-gray-200 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollAnimation>

          {/* Contact Us Card */}
          <ScrollAnimation
            direction="right"
            className="bg-[#1A73E8] p-6 rounded-lg text-center text-white"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Grow your business with us
            </h3>
            <div className="mt-4 flex justify-center items-center space-x-2 bg-white rounded-full p-2">
              <FaPhoneAlt className="text-lg text-black" />
              <span className="text-sm sm:text-lg font-medium text-black">
                Contact Us
              </span>
            </div>
          </ScrollAnimation>
        </aside>
      </div>
    </section>
  );
};

export default SingleNewsAudience;
