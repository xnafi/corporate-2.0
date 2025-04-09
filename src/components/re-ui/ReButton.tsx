import { FaArrowRight } from "react-icons/fa"; 

export default function AnimatedButton({
  withArrow = false,
  text = "See more",
}) {
  return (
    <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-[#1a73e8] overflow-hidden h-14 w-52 rounded-md bg-[#1a73e8] p-2 flex justify-center items-center font-extrabold hover:bg-[#e8f0fe]">
      {/* Animated Circles */}
      <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>

      {/* Button Text */}
      <p className="z-10">{text}</p>

      {/* Optional Right Arrow Icon */}
      {withArrow && <FaArrowRight className="z-10 ml-2 text-[#1a73e8]" />}
    </button>
  );
}
