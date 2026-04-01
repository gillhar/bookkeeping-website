"use client";

import { motion, type Easing } from "framer-motion";
import Button from "./Button";

const ease: Easing = [0.16, 1, 0.3, 1];

interface CTABannerProps {
  bg?: "sage" | "deep-navy";
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const bgClasses = {
  sage: "bg-[var(--color-sage)]",
  "deep-navy": "bg-[var(--color-deep-navy)]",
};

export default function CTABanner({
  bg = "deep-navy",
  headline = "Ready to streamline your finances?",
  subtext = "Book a free 30-minute consultation and discover how Novera Bookkeeping can transform your bookkeeping.",
  ctaLabel = "Schedule a Call",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className={`relative overflow-hidden ${bgClasses[bg]}`}>
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] noise-bg"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[860px] mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-center gap-6"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-warm-white)] leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {headline}
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[540px]">
            {subtext}
          </p>
          <Button href={ctaHref} variant="primary" size="lg" className="mt-2">
            {ctaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
