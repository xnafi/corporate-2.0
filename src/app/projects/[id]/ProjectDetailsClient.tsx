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
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-center">{project.title}</h1>
      <div className="flex justify-center mt-4">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full max-w-md sm:max-w-lg rounded-lg"
        />
      </div>
      <p className="text-gray-600 mt-4 text-center sm:text-left">{project.category} Project Details</p>
    </div>
  );
}
