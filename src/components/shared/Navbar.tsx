"use client";
import { useState, useEffect, useCallback } from "react";
import { FaSearch, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]); // Now it won't trigger infinite re-renders
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-[#374151]/50 text-white fixed top-0 w-full transition-all duration-500 z-50 backdrop-blur-md shadow-md"
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">SE</span>
          </div>
          <span className="text-lg font-semibold">Seom</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#374151]/50 md:bg-transparent backdrop-blur-md shadow-md md:shadow-none md:flex space-x-0 md:space-x-6 text-white md:items-center md:justify-center transition-all duration-300 ease-in-out ${
            menuOpen ? "block h-auto" : "hidden md:flex"
          }`}
        >
          {/* Home Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-white flex items-center space-x-1"
            onClick={() => setIsHomeOpen(!isHomeOpen)}
          >
            <span>Home</span>
            <IoIosArrowDown />
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHomeOpen ? 1 : 0,
                height: isHomeOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-10 bg-[#374151]/50 shadow-lg py-2 w-40 md:w-32 border border-gray-200"
            >
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/">Home 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/home2">Home 2</Link>
              </li>
            </motion.ul>
          </li>

          {/* Pages Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-white flex items-center space-x-1"
            onClick={() => setIsPagesOpen(!isPagesOpen)}
          >
            <span>Pages</span>
            <IoIosArrowDown />
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isPagesOpen ? 1 : 0,
                height: isPagesOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-10 bg-[#374151]/50 shadow-lg py-2 w-40 md:w-32 border border-gray-200"
            >
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/our-blogs">Our Blogs</Link>
              </li>
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/pricing-plan">Pricing Plan</Link>
              </li>
            </motion.ul>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-white flex items-center space-x-1"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span>Services</span>
            <IoIosArrowDown />
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isServicesOpen ? 1 : 0,
                height: isServicesOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-10 bg-[#374151]/50 shadow-lg py-2 w-40 md:w-32 border border-gray-200"
            >
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/our-services">Our Services</Link>
              </li>
              <li className="px-4 py-2 hover:bg-white/10">
                <Link href="/our-project">Our Projects</Link>
              </li>
            </motion.ul>
          </li>

          <li className="hover:text-white cursor-pointer px-4 py-3 md:py-0">
            <Link href="/contact-us4">Contact Us</Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-white rounded-full shadow-md hover:bg-white/10">
            <FaLock className="mr-2" />
            LOGIN
          </button>

          {/* Search Button */}
          <div className="relative">
            <button
              className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FaSearch />
            </button>

            {showSearch && (
              <div className="absolute top-12 right-0 bg-[#374151]/50 shadow-lg p-2 rounded-lg border border-gray-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none border p-2 w-64 rounded-lg text-white bg-transparent"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
