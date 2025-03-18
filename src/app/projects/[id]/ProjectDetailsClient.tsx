"use client"; // ✅ Mark as a Client Component

import Image from "next/image";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
  };
}

export default function ProjectDetailsClient({ project }: ProjectProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={400} />
      <p className="text-gray-600 mt-4">{project.category} Project Details</p>
    </div>
  );
}
