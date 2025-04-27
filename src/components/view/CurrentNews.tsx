import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ScrollAnimation from "@/utils/scrollAnimation";

// Define TypeScript type for news item
interface NewsItem {
  image: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    image:
      "https://i.postimg.cc/gjBRQjNj/jj-englert-n9-CAmj-Xls-Vk-unsplash.jpg",
    title: "Tactics for Boosting Engagement and Conversions",
    author: "Esther Howard",
    readTime: "6 min read",
    date: "03 OCT",
  },
  {
    image:
      "https://i.postimg.cc/rwRC6G6k/business-advisor-giving-his-opinion.jpg",
    title: "Content Marketing Strategies to Improve Engagement",
    author: "Jacky Smith",
    readTime: "3 min read",
    date: "07 OCT",
  },
];

const CurrentNews = () => {
  return (
    <section className="container bg-gray-100">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <ScrollAnimation direction="left" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Current News and <br className="hidden sm:block" /> Updates
          </ScrollAnimation>
          <ScrollAnimation direction="right" className="mt-4 lg:mt-0 flex flex-col items-start gap-4 text-start">
            <p className="text-gray-600 text-sm sm:text-base max-w-lg">
              Stay informed with the latest news and updates, covering
              everything from global events to local happenings, including
              significant developments in various fields and industries.
            </p>
            <Link href='/our-blogs' className="bg-black text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-[#1A73E8]">
              ALL NEWS
              <HiArrowUpRight className="text-lg transition-transform duration-300 hover:-translate-y-1" />
            </Link>
          </ScrollAnimation>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <ScrollAnimation direction="popIn"
              key={index}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-56 sm:h-64 object-cover rounded-t-2xl"
                />
                {/* Date Badge */}
                <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-xs sm:text-sm">
                  {item.author} / {item.readTime}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover Effect Button */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-[#1A73E8] group-hover:-translate-y-1">
                  <HiArrowUpRight className="text-white text-lg hidden group-hover:block" />
                  <FiArrowRight className="text-white text-lg block group-hover:hidden" />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentNews;
