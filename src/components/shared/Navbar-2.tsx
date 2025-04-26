"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar2 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-10 md:px-10 lg:px-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-lg">
            SE
          </span>
          <span className="ml-2 text-gray-800">Seom</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 lg:pl-72">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>

          {/* Dropdown: Pages */}
          <li className="relative dropdown">
            <div
              className="hover:text-black transition flex items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("pages");
              }}
            >
              Pages <span className="ml-1">▼</span>
            </div>
            {dropdownOpen === "pages" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 w-40">
                <li>
                  <Link
                    href="/about-us-2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown: Services */}
          <li className="relative dropdown">
            <div
              className="hover:text-black transition flex items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("services");
              }}
            >
              Services <span className="ml-1">▼</span>
            </div>
            {dropdownOpen === "services" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 w-40">
                <li>
                  <Link
                    href="/seo"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact-us-2" className="hover:text-black transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Contact Button - Hidden on Small Screens */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2 border border-b-4 border-black rounded-full text-black hover:bg-white hover:text-lime-500 transition"
        >
          CONTACT US
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          navOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setNavOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-6 p-8 text-gray-700">
            <li>
              <Link
                href="/"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us2"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/seo"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link
                href="/marketing"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block"
                onClick={() => setNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
