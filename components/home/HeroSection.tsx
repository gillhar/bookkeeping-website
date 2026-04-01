"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, type Easing } from "framer-motion";
import Button from "@/components/shared/Button";

const ease: Easing = [0.16, 1, 0.3, 1];

const HEADLINE = "Precision in every number.";
const chars = HEADLINE.split("");

const charVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 14 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] as Easing },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "18%"]
  );

  /* Cursor spotlight — direct DOM mutation, zero React re-renders */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!spotlightRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    spotlightRef.current.style.background =
      `radial-gradient(700px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(201,168,76,0.10) 0%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.background = "";
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layer with parallax */}
      <motion.div
        className="absolute inset-0 z-0 scale-110"
        style={{ y: bgY, willChange: "transform" }}
        aria-hidden="true"
      >
        {/* Ken Burns entrance */}
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
        {/* Vignette */}
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

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ transition: "background 0.2s ease" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-28">
        <div className="max-w-[680px]">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-accent)] mb-7"
          >
            Bookkeeping &amp; Financial Services
          </motion.p>

          {/* Headline — char-by-char blur reveal */}
          <h1
            className="font-bold text-white leading-[1.08] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 72px)",
            }}
            aria-label={HEADLINE}
          >
            <motion.span
              aria-hidden="true"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.026,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {chars.map((char, i) => (
                <motion.span
                  key={i}
                  variants={prefersReducedMotion ? {} : charVariants}
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="text-lg text-white/65 max-w-[560px] mb-11"
          >
            Expert bookkeeping services that give you clarity, confidence, and
            time back. Built on accuracy. Backed by trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Our Services
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Animated gold line across bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-20 bg-[var(--color-gold-accent)]"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.8, ease }}
        aria-hidden="true"
      />
    </section>
  );
}
