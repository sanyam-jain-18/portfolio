"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li" | "ul";
  y?: number;
};

const baseVariants: Variants = {
  hidden: (custom: { y: number; reduce: boolean }) => ({
    opacity: 0,
    y: custom.reduce ? 0 : custom.y,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 16,
}: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      custom={{ y, reduce }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={baseVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
