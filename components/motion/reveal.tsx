"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Tipo de entrada: hacia arriba (default) o desenfoque suave. */
  variant?: "up" | "blur";
  as?: "div" | "section" | "li" | "article";
}

export function Reveal({ children, delay = 0, className, variant = "up", as = "div" }: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : variant === "blur"
        ? { opacity: 0, filter: "blur(8px)", y: 12 }
        : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
