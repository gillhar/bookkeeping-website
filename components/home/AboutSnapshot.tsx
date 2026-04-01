"use client";

import { motion, type Easing } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const ease: Easing = [0.16, 1, 0.3, 1];

const stats = [
  { value: 12, suffix: "+", label: "Years Experience", decimals: 0, duration: 1.6 },
  { value: 500, suffix: "+", label: "Clients Served", decimals: 0, duration: 2.0 },
  { value: 99.8, suffix: "%", label: "Accuracy Rate", decimals: 1, duration: 2.2 },
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-light-grey)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-20 items-center">

          {/* Left — Image (overlaps left by 40px on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="relative lg:-ml-10"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
              <div className="absolute inset-0 bg-[#c8bfb4] flex items-center justify-center">
                <p className="text-stone-500 text-xs text-center px-8 select-none pointer-events-none leading-relaxed">
                  [STOCK PHOTO: Professional woman reviewing financial documents at a modern desk, natural light, warm tones]
                </p>
              </div>
            </div>

            {/* Decorative gold accent corner */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl border-2 border-[var(--color-gold-accent)] opacity-30 pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right — Text + Stats */}
          <div>
            <SectionHeading
              subtitle="Who We Are"
              title="A decade of trusted financial partnership."
              className="mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="text-[var(--color-text-secondary)] leading-[1.8] mb-12 text-base"
            >
              Novera Bookkeeping was founded on a simple belief: small and mid-sized businesses
              deserve the same financial clarity as enterprise clients. We combine rigorous
              accuracy with a personal approach — acting as a true financial partner, not just
              a service provider. Every client gets a dedicated bookkeeper who knows their
              business inside out.
            </motion.p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 border-t border-[var(--color-border)] pt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease }}
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--color-gold-accent)] mb-1.5 leading-none">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={stat.duration}
                    />
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
