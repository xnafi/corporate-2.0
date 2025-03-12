import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-sm font-semibold rounded-full transition-all
        ${variant === "primary" ? "bg-lime-400 text-white hover:bg-lime-500" : "border border-black text-black bg-white hover:bg-lime-500"}`}
    >
      {text}
    </button>
  );
};

export default Button;
