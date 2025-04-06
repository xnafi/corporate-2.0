import { notFound } from "next/navigation";
// import ProjectDetailsClient from "./ProjectDetailsClient";
import Image from "next/image";
import SocialPlatformPromotion from "@/components/view/SocialPlatformPromotion";
import PromotionEngagement from "@/components/view/PromotionEngagement";

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

// ✅ Define the correct type
interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

// ✅ This is a Server Component
export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound(); // Show 404 if project is not found

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-4">
          <h1 className="bnr-header-text">Our Projects</h1>
          <p className="banner-para-text">Home / Pages / Our Projects</p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="mt-6 sm:mt-12">
        {/* <ProjectDetailsClient project={project} /> */}
        <SocialPlatformPromotion />
      </div>

      {/* Additional Sections */}
      <div className="mt-6 sm:mt-12">
        <PromotionEngagement />
      </div>
    </div>
  );
}
