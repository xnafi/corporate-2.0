import ScrollAnimation from "@/utils/scrollAnimation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <div className="w-16 h-16 bg-[#1A73E8] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">EWS</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              A reputable SEO agency begins with a comprehensive analysis.
            </p>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#1A73E8] cursor-pointer">About Us</li>
              <li className="hover:text-[#1A73E8] cursor-pointer">
                Pricing Plan
              </li>
              <li className="hover:text-[#1A73E8] cursor-pointer">Blogs</li>
              <li className="hover:text-[#1A73E8] cursor-pointer">
                Testimonial
              </li>
              <li className="hover:text-[#1A73E8] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>elegantwebstudio@gmail.com</li>
              <li>+1123 456 7890</li>
              <li>421 Allen, Mexico 4233</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 pr-20 text-sm border border-gray-300 rounded-md outline-none"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border text-black px-4 py-2 rounded-md text-sm hover:text-white hover:bg-[#1A73E8] duration-500">
                TRY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          {/* Copy */}
          <p className="text-sm text-gray-600">© POWERED BY ELEGANT WEB STUDIO</p>

          {/* Social Icons */}
          <div className="flex space-x-4 my-4 md:my-0">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaBehance].map(
              (Icon, idx) => (
                <ScrollAnimation
                  direction="flipX"
                  key={idx}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-b-4 border-black text-black hover:bg-[#1A73E8]  hover:text-white cursor-pointer transition-all"
                >
                  <Icon />
                </ScrollAnimation>
              )
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm text-gray-600 mt-4 md:mt-0">
            <span className="hover:text-[#1A73E8] cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-[#1A73E8] cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
