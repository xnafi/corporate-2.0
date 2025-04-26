import Image from "next/image";
import CollaborateWork from "@/components/view/CollaborateWorkPage-3";
import ScrollAnimation from "@/utils/scrollAnimation";
import SingleNewsAudience from "@/components/view/news/SingleNewsAudience";
import NotFound from "@/app/not-found";
import async from "../../projects/[id]/page";

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
];

// Receive params from the server
interface PageProps {
  params: {
    id: string;
  };
}
async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const newsItem = newsItems.find((item) => item.id === Number(id));

  if (!newsItem) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black mt-[100px] overflow-hidden">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="Service Banner"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <ScrollAnimation direction="popIn">
            <h1 className="bnr-header-text">{newsItem.title}</h1>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="banner-para-text">
              Home / news / {newsItem.category}
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="popIn">
            <p className="mt-1 banner-para-text">
              {newsItem.author} / {newsItem.date}
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Content Sections */}
      <SingleNewsAudience />

      {/* Collaboration Section */}
      <div className="mt-8 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
}

export default NewsDetailPage;
