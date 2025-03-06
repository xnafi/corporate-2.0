"use client";
import { useState } from "react";
import { FaSearch, FaLock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">SE</span>
          </div>
          <span className="text-lg font-semibold">Seom</span>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>

          {/* Pages Dropdown */}
          <li
            className="relative cursor-pointer hover:text-orange-500 flex items-center space-x-1"
            onMouseEnter={() => setIsPagesOpen(true)}
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <span>Pages</span>
            <IoIosArrowDown />
            {isPagesOpen && (
              <ul className="absolute left-0 top-6 bg-white shadow-lg py-2 w-32">
                <li className="px-4 py-2 hover:bg-gray-100">Page 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Page 2</li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="relative cursor-pointer hover:text-orange-500 flex items-center space-x-1"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span>Services</span>
            <IoIosArrowDown />
            {isServicesOpen && (
              <ul className="absolute left-0 top-6 bg-white shadow-lg py-2 w-32">
                <li className="px-4 py-2 hover:bg-gray-100">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Service 2</li>
              </ul>
            )}
          </li>

          <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <button className="flex items-center px-4 py-2 border border-b-4 border-black rounded-full shadow-md hover:bg-gray-100">
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
    </nav>
  );
};

export default Navbar;
