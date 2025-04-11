import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import type { IconType } from "react-icons";

interface SecondaryButtonProps {
  text?: string;
  href?: string;
  withArrow?: boolean;
  withIcon?: boolean;
  icon?: IconType;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text = "See more",
  href,
  withArrow = false,
  withIcon = false,
  icon: Icon = IoPlayCircleSharp,
  onClick,
}) => {
  const baseClasses =
    "cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-3.5 rounded-md flex items-center";

  const backgroundEffect = (
    <>
      <span className="absolute w-full h-full bg-[#1A73E8] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-[#1A73E8] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </>
  );

  const content = (
    <>
      <span className="relative z-10 text-[#1A73E8] group-hover:text-white text-base duration-500">
        {text}
      </span>
      {withArrow && <FaArrowRight className="z-10 ml-2" />}
      {withIcon && <Icon className="z-10 ml-2" size={18} />}
    </>
  );

  // Render as a Next.js Link if href is provided
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {backgroundEffect}
        {content}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button onClick={onClick} className={baseClasses}>
      {backgroundEffect}
      {content}
    </button>
  );
};

export default SecondaryButton;
