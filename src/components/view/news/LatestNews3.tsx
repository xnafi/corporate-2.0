import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

interface NewsItem {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    image: "https://i.postimg.cc/gJWKHxTP/airfocus-JVd-Nm-AFDi-I4-unsplash.jpg",
    category: "Web Design",
    title: "Crafting a Successful SEO Marketing Plan.",
    author: "Jain Smith",
    date: "05 Oct 2024",
  },
  {
    image:
      "https://i.postimg.cc/rwRC6G6k/business-advisor-giving-his-opinion.jpg",
    category: "Marketing",
    title: "Tactics to Improve Content Engagement",
    author: "Jain Smith",
    date: "05 Oct 2024",
  },
  {
    image:
      "https://i.postimg.cc/gjBRQjNj/jj-englert-n9-CAmj-Xls-Vk-unsplash.jpg",
    category: "Agency",
    title: "Innovative ways to Captivate your Audience.",
    author: "Jain Smith",
    date: "05 Oct 2024",
  },
];

const LatestNews3 = () => {
  return (
    <section className="mt-4 bg-white">
      <div className="text-start">
        <ScrollAnimation direction="left">
          <h2 className="title-header-text text-gray-900">Latest News</h2>
        </ScrollAnimation>
        
        <ScrollAnimation direction="left" className="para-text mt-2 mb-10 text-sm sm:text-base">
          Find the most up-to-date news and articles that offer insights into
          various topics.
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <ScrollAnimation direction="left"
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <ScrollAnimation direction="left" className="relative">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-t-2xl"
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-lime-500 scale-0 group-hover:scale-100 transition-all duration-300">
                    <HiArrowUpRight className="text-white text-2xl" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </ScrollAnimation>

              {/* Content */}
              <div className="p-4 sm:p-6 text-left">
                <p className="text-gray-500 text-xs sm:text-sm">
                  {item.author} / {item.date}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews3;
