import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import type { IconType } from "react-icons";

interface PrimaryButtonProps {
  text?: string;
  href?: string;
  withArrow?: boolean;
  withIcon?: boolean;
  icon?: IconType;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text = "See more",
  href,
  withArrow = false,
  withIcon = false,
  icon: Icon = IoPlayCircleSharp,
  onClick,
}) => {
  const baseClasses =
    "border hover:scale-95 duration-300 relative group cursor-pointer text-[#1a73e8] overflow-hidden h-14 w-48 rounded-md bg-[#1a73e8] p-2 flex justify-center items-center font-semibold hover:bg-[#e8f0fe]";

  const backgroundCircles = (
    <>
      <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
      <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-11 h-11 rounded-full group-hover:scale-150 duration-500 bg-[#f8f9fa]"></div>
    </>
  );

  const content = (
    <>
      <p className="z-10 text-[14px] md:text-base">{text}</p>
      {withArrow && <FaArrowRight className="z-10 ml-2 text-[#1a73e8]" />}
      {withIcon && <Icon className="z-10 ml-2 bg-[#1a73e8]" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {backgroundCircles}
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {backgroundCircles}
      {content}
    </button>
  );
};

export default PrimaryButton;
