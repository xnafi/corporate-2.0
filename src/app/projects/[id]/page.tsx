import { notFound } from "next/navigation";
import Image from "next/image";
import SocialPlatformPromotion from "@/components/view/SocialPlatformPromotion";
import PromotionEngagement from "@/components/view/PromotionEngagement";

// Simulated database (you can replace this with real data fetching)
const projects = [
  {
    id: "1",
    title: "Dashboard Design",
    category: "UX/UI",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: "2",
    title: "Logo Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: "3",
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
];

// Simulated async fetch function
async function getProjectById(id: string) {
  return projects.find((project) => project.id === id) || null;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const project = await getProjectById(params.id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="Project Banner"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <h1 className="bnr-header-text">{project.title}</h1>
          <p className="banner-para-text">Home / Projects / {project.title}</p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="mt-6 sm:mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.category}</p>
          <div className="mt-4">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>

      {/* Promotional Sections */}
      <div className="mt-6 sm:mt-12">
        <SocialPlatformPromotion />
      </div>

      <div className="mt-6 sm:mt-12">
        <PromotionEngagement />
      </div>
    </div>
  );
}
