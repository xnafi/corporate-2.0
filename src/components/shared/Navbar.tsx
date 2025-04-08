"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const router = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const isActive = (path: string) => router === path;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  const renderSubMenu = (
    menu: string,
    items: { label: string; href: string }[]
  ) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: openSubMenu === menu ? 1 : 0,
        y: openSubMenu === menu ? 0 : -10,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute top-full left-0 bg-white text-black shadow-lg rounded-md py-2 px-4 w-48 z-50 ${
        openSubMenu === menu ? "block" : "hidden"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={handleClose}
          className="block py-1 hover:text-[#EA580C]"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-white shadow-md text-white fixed top-0 w-full transition-all duration-500 z-[999] backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[100] w-full">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-black hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mx-auto sm:items-stretch sm:justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleClose}>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">SE</span>
                  </div>
                  <span className="text-lg font-semibold text-black">Seom</span>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex sm:ml-2 justify-center items-center">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                {[
                  {
                    key: "home",
                    label: "Home",
                    items: [
                      { label: "Home Page 1", href: "/home-page-1" },
                      { label: "Home Page 2", href: "/home-page-2" },
                      { label: "Home Page 3", href: "/home-page-3" },
                    ],
                  },
                  {
                    key: "pages",
                    label: "Pages",
                    items: [
                      { label: "About Us", href: "/about" },
                      { label: "Our Blogs", href: "/blogs" },
                      { label: "Pricing Plan", href: "/pricing" },
                    ],
                  },
                  {
                    key: "services",
                    label: "Services",
                    items: [
                      { label: "Our Services", href: "/services" },
                      { label: "Our Projects", href: "/projects" },
                    ],
                  },
                ].map(({ key, label, items }) => (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => !isMobile && setOpenSubMenu(key)}
                    onMouseLeave={() => !isMobile && setOpenSubMenu(null)}
                  >
                    <button
                      onClick={() => isMobile && toggleSubMenu(key)}
                      className={`px-3 py-2 rounded-md text-md font-medium flex justify-center items-center gap-x-2 ${
                        isActive(`/${key}`)
                          ? "bg-gray-900"
                          : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#EA580C]"
                      }`}
                    >
                      {label} <FaAngleDown size={18} />
                    </button>
                    {renderSubMenu(key, items)}
                  </div>
                ))}

                <Link href="/contact">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/contact")
                        ? "bg-gray-900"
                        : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#EA580C]"
                    }`}
                  >
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex sm:ml-2">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                <Link href="/login">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/login")
                        ? "bg-gray-900"
                        : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#EA580C]"
                    }`}
                  >
                    Login
                  </span>
                </Link>
                <Link href="/sign-up">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/sign-up")
                        ? "bg-gray-900"
                        : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#EA580C]"
                    }`}
                  >
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["home", "pages", "services"].map((menu) => (
            <div key={menu}>
              <button
                onClick={() => toggleSubMenu(menu)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-md font-medium text-black hover:text-[#EA580C]"
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <FaAngleDown size={18} />
              </button>
              {openSubMenu === menu && (
                <div className="pl-6 space-y-1">
                  {menu === "home" && [
                    <Link
                      key="1"
                      href="/home-page-1"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Home Page 1
                    </Link>,
                    <Link
                      key="2"
                      href="/home-page-2"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Home Page 2
                    </Link>,
                    <Link
                      key="3"
                      href="/home-page-3"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Home Page 3
                    </Link>,
                  ]}
                  {menu === "pages" && [
                    <Link
                      key="4"
                      href="/about"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      About Us
                    </Link>,
                    <Link
                      key="5"
                      href="/blogs"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Our Blogs
                    </Link>,
                    <Link
                      key="6"
                      href="/pricing"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Pricing Plan
                    </Link>,
                  ]}
                  {menu === "services" && [
                    <Link
                      key="7"
                      href="/services"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Our Services
                    </Link>,
                    <Link
                      key="8"
                      href="/projects"
                      className="block py-1 hover:text-[#EA580C]"
                    >
                      Our Projects
                    </Link>,
                  ]}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#EA580C]"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#EA580C]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#EA580C]"
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
