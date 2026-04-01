"use client";

import { motion, type Easing } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as Easing },
    },
  };

  return (
    <motion.div
      className={`max-w-2xl ${alignClass} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-sage)] mb-3"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-[clamp(1.875rem,3.5vw,3rem)] font-semibold text-[var(--color-charcoal)]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
