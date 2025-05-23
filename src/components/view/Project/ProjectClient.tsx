"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const categories = ["All Design", "UX/UI", "Branding", "Design"] as const;

const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Design",
    category: "UX/UI",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 2,
    title: "Logo Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "UX/UI",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 5,
    title: "Brand Strategy",
    category: "Branding",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
  {
    id: 6,
    title: "Web Design",
    category: "Design",
    image:
      "https://i.postimg.cc/YC45gMYj/home-care-service-app-design-tubik.jpg",
  },
];

export default function ProjectClient() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All Design");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All Design"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <>
      {/* Category Filters */}
      <div className="flex w-full justify-center gap-2 sm:gap-3 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            className={`flex flex-wrap text-xs sm:text-sm font-medium justify-center items-center ${
              activeCategory === category
                ? "bg-[#1A73E8] text-white rounded-md font-semibold inline-block px-2 py-2"
                : "bg-gray-100 dark:text-black backdrop-blur-md inline-block isolation-auto px-2 py-2 font-semibold border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#1A73E8] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 overflow-hidden rounded-md group"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center mt-4 rounded-lg">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 text-start">
                    APP CASE STUDY
                  </p>
                </div>
                {/* Navigation Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center bg-[#1A73E8] text-white rounded-full"
                >
                  <GoArrowUpRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View Portfolio Button */}
      {filteredProjects.length > 3 && (
        <motion.button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center mt-6 mx-auto gap-2 bg-gray-100 backdrop-blur-md lg:font-semibold isolation-auto border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#1A73E8] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-6 py-2 overflow-hidden rounded-md group dark:text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {showAll ? "View Less" : "View All Portfolio"}
        </motion.button>
      )}
    </>
  );
}
