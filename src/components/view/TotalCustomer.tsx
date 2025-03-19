"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // Importing play icon

const TotalCustomer = () => {
  const [count, setCount] = useState(0);
  const totalCustomers = 130000;

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(totalCustomers / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= totalCustomers) {
        start = totalCustomers;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center gap-28 bg-[#0d0f1b] text-white p-6 rounded-xl">
      {/* First Card - Total Customers */}
      <div className="bg-[#1e2030] p-6 rounded-2xl w-72 flex flex-col relative">
        <div className="flex items-center justify-between">
          <div className="flex -space-x-3">
            <Image src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg" alt="User 1" width={40} height={40} className="rounded-full border" />
            <Image src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg" alt="User 2" width={40} height={40} className="rounded-full border" />
            <Image src="https://i.postimg.cc/Vkm8gz6r/male-avatar-portrait-of-a-business-man.jpg" alt="User 3" width={40} height={40} className="rounded-full border" />
          </div>
          {/* Play Button */}
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl cursor-pointer">
            <Play className="text-orange-500 w-6 h-6" />
          </div>
        </div>
        <p className="text-gray-400 mt-3">Our Total Customers</p>
        <motion.p
          className="text-5xl font-bold mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {count.toLocaleString()}+
        </motion.p>
      </div>

      {/* Second Card - Testimonial */}
      <div className="bg-[#1e2030] p-6 rounded-2xl w-72 flex flex-col items-center text-center">
        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center pt-2 text-5xl font-extrabold text-center">
          “
        </div>
        <p className="text-lg text-gray-300 mt-3 leading-relaxed">
          “Efficient, knowledgeable, & smooth experience. Highly recommended”
        </p>
        <p className="text-gray-400 mt-3 text-sm">— Musa Jamy, SEOM</p>
      </div>

      {/* Third Card - Experience */}
      <div className="bg-[#1e2030] p-6 rounded-2xl w-72 flex flex-col">
  <p className="text-5xl font-bold">12</p>
  <p className="text-gray-400 text-lg mt-1">Years Experience In this Field.</p>
  <div className="flex flex-wrap gap-2 mt-4">
    {["SEO Traffic", "Agency", "Marketing", "Analysis", "Ranking", "Consulting"].map((tag, i) => (
      <span
        key={i}
        className="px-3 py-1 rounded-full text-sm bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

    </div>
  );
};

export default TotalCustomer;
