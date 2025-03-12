"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar2 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-lg">SE</span>
          <span className="ml-2 text-gray-800">Seom</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 pl-96">
          <li>
            <Link href="/" className="hover:text-black transition">Home</Link>
          </li>

          {/* Dropdown: Pages */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen("pages")}
            onMouseLeave={() => setDropdownOpen("")}
          >
            <span className="hover:text-black transition flex items-center">
              Pages <span className="ml-1">▼</span>
            </span>
            {dropdownOpen === "pages" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 w-40">
                <li>
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                </li>
                <li>
                  <Link href="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown: Services */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen("services")}
            onMouseLeave={() => setDropdownOpen("")}
          >
            <span className="hover:text-black transition flex items-center">
              Services <span className="ml-1">▼</span>
            </span>
            {dropdownOpen === "services" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 w-40">
                <li>
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100">SEO Optimization</Link>
                </li>
                <li>
                  <Link href="/marketing" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" className="hover:text-black transition">Contact Us</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Link href="/contact" className="hidden md:block px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
          CONTACT US
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 space-y-4">
          <li>
            <Link href="/" className="block text-gray-700">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-gray-700">About Us</Link>
          </li>
          <li>
            <Link href="/team" className="block text-gray-700">Our Team</Link>
          </li>
          <li>
            <Link href="/seo" className="block text-gray-700">SEO Optimization</Link>
          </li>
          <li>
            <Link href="/marketing" className="block text-gray-700">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/contact" className="block text-gray-700">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar2;
