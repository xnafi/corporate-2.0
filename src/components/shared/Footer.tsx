"use client";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">SE</span>
              </div>
              <span className="text-xl font-semibold">Seom</span>
            </div>
            <p className="text-sm text-gray-600">
              A reputable SEO agency begins with a comprehensive analysis.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Pricing Plan</li>
              <li>Blogs</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>seomagency1234@gmail.com</li>
              <li>+1123 456 7890</li>
              <li>421 Allen, Mexico 4233</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-l-md text-sm outline-none"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md text-sm hover:bg-orange-600">
                TRY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© POWERED BY SEOM</p>

          {/* Social Icons */}
          <div className="flex space-x-4 my-4 md:my-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-black hover:text-white cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-black hover:text-white cursor-pointer">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-black hover:text-white cursor-pointer">
              <FaBehance />
            </div>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
