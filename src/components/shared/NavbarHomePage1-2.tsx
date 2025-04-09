/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  // nav menu items

  type NavItem = {
    label: string;
    href: string;
  };

  type NavGroup = {
    key: string;
    label: string;
    items?: NavItem[];
  };

  const navDesktop: NavGroup[] = [
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
        { label: "About Us", href: "/about-us" },
        { label: "Our Blogs", href: "/our-blogs" },
        { label: "Pricing Plan", href: "/pricing-plan" },
      ],
    },
    {
      key: "services",
      label: "Services",
      items: [
        { label: "Our Services", href: "/our-services" },
        { label: "Our Projects", href: "/our-projects" },
      ],
    },
    {
      key: "contact-us",
      label: "Contact Us",
      items: undefined, 
    },
  ];
  // mobile collapse animation
  const submenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
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
          className="block py-1 hover:text-[#1a73e8]"
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
                  className="block h-6 w-6 text-black"
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
                  className="block h-6 w-6 text-black"
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
          <div className="flex-1 flex items-center justify-center mx-auto sm:items-stretch sm:justify-between w-full h-[100px]">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleClose}>
                <div className="grid grid-cols-2 place-items-center h-[100px] space-x-2">
                  <div className="w-10 h-10 bg-[#1a73e8] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">SE</span>
                  </div>
                  <span className="text-lg font-semibold text-black">Seom</span>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex sm:ml-2 justify-center items-center">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                {navDesktop.map(({ key, label, items }) => (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() =>
                      !isMobile && items && setOpenSubMenu(key)
                    }
                    onMouseLeave={() =>
                      !isMobile && items && setOpenSubMenu(null)
                    }
                  >
                    {items ? (
                      <button
                        onClick={() => isMobile && toggleSubMenu(key)}
                        className={`px-3 py-2 rounded-md text-md font-medium flex justify-center items-center gap-x-2 ${
                          isActive(`/${key}`)
                            ? "bg-[#1a73e8]"
                            : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#1a73e8]"
                        }`}
                      >
                        {label}
                        <FaAngleDown size={18} />
                      </button>
                    ) : (
                      <Link href={`/${key}`}>
                        <span
                          className={`px-3 py-2 rounded-md text-md font-medium ${
                            isActive(`/${key}`)
                              ? "bg-[#1a73e8]"
                              : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#1a73e8]"
                          }`}
                        >
                          {label}
                        </span>
                      </Link>
                    )}

                    {items && renderSubMenu(key, items)}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex sm:ml-2">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                <Link href="/login">
                  <span
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/login")
                        ? "bg-gray-900"
                        : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#1a73e8]"
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
                        : "text-black transition-all duration-500 hover:bg-white/10 hover:text-[#1a73e8]"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {["home", "pages", "services"].map((menu) => (
            <div key={menu}>
              <button
                onClick={() => toggleSubMenu(menu)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-md font-medium text-black hover:text-[#1a73e8]"
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <FaAngleDown size={18} />
              </button>

              <AnimatePresence initial={false}>
                {openSubMenu === menu && (
                  <motion.div
                    key={menu}
                    variants={submenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="pl-6 space-y-1 overflow-hidden"
                  >
                    {menu === "home" && (
                      <>
                        <Link
                          onClick={handleClose}
                          href="/home-page-1"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Home Page 1
                        </Link>
                        <Link
                          onClick={handleClose}
                          href="/home-page-2"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Home Page 2
                        </Link>
                        <Link
                          onClick={handleClose}
                          href="/home-page-3"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Home Page 3
                        </Link>
                      </>
                    )}
                    {menu === "pages" && (
                      <>
                        <Link
                          onClick={handleClose}
                          href="/about"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          About Us
                        </Link>
                        <Link
                          onClick={handleClose}
                          href="/blogs"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Our Blogs
                        </Link>
                        <Link
                          onClick={handleClose}
                          href="/pricing"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Pricing Plan
                        </Link>
                      </>
                    )}
                    {menu === "services" && (
                      <>
                        <Link
                          onClick={handleClose}
                          href="/services"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Our Services
                        </Link>
                        <Link
                          onClick={handleClose}
                          href="/projects"
                          className="block py-1 text-black hover:text-[#1a73e8]"
                        >
                          Our Projects
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="/contact"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#1a73e8]"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#1a73e8]"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            onClick={handleClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#1a73e8]"
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
