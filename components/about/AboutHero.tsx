"use client";

import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ease: Easing = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export default function AboutHero() {
  return (
    <section className="relative min-h-[60dvh] flex items-center overflow-hidden">
      {/* Background photo */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <Image
          src="/images/conferencetablearielview.jpg"
          alt="Aerial view of a conference room table with warm lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[var(--color-charcoal)]/75" aria-hidden="true" />

      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] noise-bg"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-36 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[680px]"
        >
          <motion.nav variants={item} aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-8">
            <Link href="/" className="text-xs text-white/55 hover:text-white/80 transition-colors">
              Home
            </Link>
            <ChevronRight size={11} className="text-white/25" aria-hidden="true" />
            <span className="text-xs text-[var(--color-gold-accent)]">About</span>
          </motion.nav>

          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-accent)] mb-6"
          >
            Our Story
          </motion.p>

          <motion.h1
            variants={item}
            className="font-bold text-[var(--color-warm-white)] leading-[1.08] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 64px)",
            }}
          >
            About Novera Bookkeeping
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-white/65 max-w-[520px]"
          >
            We believe every business deserves financial clarity — and the freedom that comes with it.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-gold-accent)] opacity-20" aria-hidden="true" />
    </section>
  );
}
