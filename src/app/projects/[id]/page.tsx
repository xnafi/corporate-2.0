// src/app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
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

// ✅ Define params manually – don't use any PageProps from elsewhere
interface Props {
  params: {
    id: string;
  };
}

// ✅ Your component can be async or not – this is fine
export default function ProjectDetails({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center bg-black">
        <Image
          src="https://i.postimg.cc/bwTh0nJQ/look-studio.jpg"
          alt="About Us Banner"
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
