"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflowX = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">SE</span>
          </div>
          <span className="text-lg font-semibold">Seom</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-x-0 md:space-x-6 text-gray-800 md:items-center md:justify-center transition-all duration-300 ease-in-out ${
            menuOpen ? "block h-auto" : "hidden md:flex"
          }`}
        >
          {/* Home Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-orange-500 flex items-center space-x-1"
            onClick={() => setIsHomeOpen(!isHomeOpen)}
          >
            <span>Home</span>
            <IoIosArrowDown />
            {isHomeOpen && (
              <ul className="absolute left-0 top-10 bg-white shadow-lg py-2 w-40 md:w-32 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">Home 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Home 2</li>
              </ul>
            )}
          </li>

          {/* Pages Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-orange-500 flex items-center space-x-1"
            onClick={() => setIsPagesOpen(!isPagesOpen)}
          >
            <span>Pages</span>
            <IoIosArrowDown />
            {isPagesOpen && (
              <ul className="absolute left-0 top-10 bg-white shadow-lg py-2 w-40 md:w-32 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">Page 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Page 2</li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="relative px-4 py-3 md:py-0 cursor-pointer hover:text-orange-500 flex items-center space-x-1"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span>Services</span>
            <IoIosArrowDown />
            {isServicesOpen && (
              <ul className="absolute left-0 top-10 bg-white shadow-lg py-2 w-40 md:w-32 border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Service 2</li>
              </ul>
            )}
          </li>

          <li className="hover:text-orange-500 cursor-pointer px-4 py-3 md:py-0">
            Contact Us
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Login Button */}
          <button className="flex items-center px-4 py-2 border border-black rounded-full shadow-md hover:bg-gray-100">
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
              <div className="absolute top-12 right-0 bg-white shadow-lg p-2 rounded-lg border border-gray-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none border p-2 w-64 rounded-lg text-gray-800"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-md py-3 text-center space-y-3">
          <a
            href="#home"
            className="block hover:text-orange-500"
            onClick={() => {
              setIsHomeOpen(!isHomeOpen);
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#pages"
            className="block hover:text-orange-500"
            onClick={() => {
              setIsPagesOpen(!isPagesOpen);
              setMenuOpen(false);
            }}
          >
            Pages
          </a>
          <a
            href="#services"
            className="block hover:text-orange-500"
            onClick={() => {
              setIsServicesOpen(!isServicesOpen);
              setMenuOpen(false);
            }}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
