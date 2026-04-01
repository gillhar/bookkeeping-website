"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, type Easing } from "framer-motion";
import Button from "@/components/shared/Button";

const ease: Easing = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle upward parallax on bg as user scrolls down — disabled for reduced motion
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "18%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layer with parallax */}
      <motion.div
        className="absolute inset-0 z-0 scale-110"
        style={{ y: bgY, willChange: "transform" }}
        aria-hidden="true"
      >
        {/* Background photo */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/minimalistoffice.jpg"
            alt="Modern minimalist office interior with warm lighting"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, transparent 40%, rgba(28,28,30,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04] noise-bg"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[680px]"
        >
          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-accent)] mb-7"
          >
            Bookkeeping &amp; Financial Services
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-bold text-white leading-[1.08] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 72px)",
            }}
          >
            Precision in every number.
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={item}
            className="text-lg text-white/65 max-w-[560px] mb-11"
          >
            Expert bookkeeping services that give you clarity, confidence, and
            time back. Built on accuracy. Backed by trust.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gold line across bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-20 bg-[var(--color-gold-accent)]"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.7, ease }}
        aria-hidden="true"
      />
    </section>
  );
}
