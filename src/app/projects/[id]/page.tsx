import { notFound } from "next/navigation";
import Image from "next/image";
import SocialPlatformPromotion from "@/components/view/SocialPlatformPromotion";
import PromotionEngagement from "@/components/view/PromotionEngagement";

// Define the Project type
type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
};

type ProjectDetails = {
  params: { id: string };
}

// Sample static data
const projects: Project[] = [
  {
    id: "1",
    title: "Dashboard Design",
    category: "UX/UI",
    image: "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: "2",
    title: "Logo Design",
    category: "Design",
    image: "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: "3",
    title: "Brand Identity",
    category: "Branding",
    image: "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
];

// ✅ This is a Server Component
export default function ProjectDetails({ params } : ProjectDetails) {
  const project = projects.find((p) => p.id === params.id);

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
          <h1 className="bnr-header-text">Our Projects</h1>
          <p className="banner-para-text">Home / Pages / Our Projects</p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="mt-6 sm:mt-12">
        {/* You can uncomment this if needed */}
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
