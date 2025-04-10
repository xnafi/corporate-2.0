import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";

export default function SecondaryButton({
  withArrow = false,
  withIcon = false,
  icon: Icon = IoPlayCircleSharp,
  text = "See more",
}) {
  return (
    <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-3.5 rounded-md flex items-center">
      <span className="relative z-10 text-[#1A73E8] group-hover:text-white text-base duration-500">
        {text}
      </span>
      <span className="absolute w-full h-full bg-[#1A73E8] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-[#1A73E8] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
      {/* arrow */}
      {withArrow && <FaArrowRight className="z-10 ml-2" />}
      {/* play */}
      {withIcon && <Icon className="z-10 ml-2" size={18} />}
    </button>
  );
}
