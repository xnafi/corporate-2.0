"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import CollaborateWork from "@/components/view/CollaborateWork";
import SingleBlogAudience from "@/components/view/SingleBlogAudience";

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
];

const NewsDetail = () => {
  const { id } = useParams();
  
  const [newsItem, setNewsItem] = useState<{ id: number; image: string; category: string; title: string; author: string; date: string; content: string } | null>(null);

  useEffect(() => {
    const item = newsItems.find((news) => news.id === Number(id));
    if (item) {
      setNewsItem(item);
    }
  }, [id]);

  if (!newsItem) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="Service Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold">{newsItem.title}</h1>
          <p className="mt-2 text-xs sm:text-base">Home / news / {newsItem.category}</p>
          <p className="mt-1 text-xs sm:text-sm">{newsItem.author} / {newsItem.date}</p>
        </div>
      </div>
  
      {/* Content Sections */}
      <SingleBlogAudience />

      {/* Collaboration Section */}
      <div className="mt-8 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default NewsDetail;
