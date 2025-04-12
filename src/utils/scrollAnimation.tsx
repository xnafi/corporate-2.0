"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "popIn";
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  direction = "right",
  className = "",
}) => {
  let slideVariants: Variants;

  if (direction === "popIn") {
    slideVariants = {
      initial: { opacity: 0, scale: 0.8 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          delay,
          duration: 0.6,
          ease: [0.42, 0, 0.58, 1],
        },
      },
    };
  } else {
    let initialVariant;
    switch (direction) {
      case "left":
        initialVariant = { opacity: 0, x: -100 };
        break;
      case "right":
        initialVariant = { opacity: 0, x: 100 };
        break;
      case "up":
        initialVariant = { opacity: 0, y: -100 };
        break;
      case "down":
        initialVariant = { opacity: 0, y: 100 };
        break;
      default:
        initialVariant = { opacity: 0, x: 100 };
    }

    slideVariants = {
      initial: initialVariant,
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay,
          duration: 0.8,
          ease: [0.42, 0, 0.58, 1],
        },
      },
    };
  }

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}
      className={`${className} block overflow-hidden`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
