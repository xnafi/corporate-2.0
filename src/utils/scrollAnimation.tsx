"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?:
    | "left"
    | "right"
    | "up"
    | "down"
    | "popIn"
    | "fadeIn"
    | "zoomIn"
    | "flipX"
    | "flipY";
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  direction = "right",
  className = "",
}) => {
  let slideVariants: Variants;

  switch (direction) {
    case "popIn":
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
      break;

    case "fadeIn":
      slideVariants = {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: "easeOut",
          },
        },
      };
      break;

    case "zoomIn":
      slideVariants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: "easeOut",
          },
        },
      };
      break;

    case "flipX":
      slideVariants = {
        initial: { opacity: 0, rotateX: -90 },
        animate: {
          opacity: 1,
          rotateX: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: "easeOut",
          },
        },
      };
      break;

    case "flipY":
      slideVariants = {
        initial: { opacity: 0, rotateY: -90 },
        animate: {
          opacity: 1,
          rotateY: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: "easeOut",
          },
        },
      };
      break;

    case "left":
      slideVariants = {
        initial: { opacity: 0, x: -100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          },
        },
      };
      break;

    case "right":
      slideVariants = {
        initial: { opacity: 0, x: 100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          },
        },
      };
      break;

    case "up":
      slideVariants = {
        initial: { opacity: 0, y: 100 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          },
        },
      };
      break;

    case "down":
      slideVariants = {
        initial: { opacity: 0, y: -100 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          },
        },
      };
      break;

    default:
      slideVariants = {
        initial: { opacity: 0, x: 100 },
        animate: {
          opacity: 1,
          x: 0,
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
      viewport={{ once: true, amount: 0.2 }}
      className={`${className} block overflow-hidden`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
