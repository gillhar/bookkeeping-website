"use client";

import { motion, type Easing } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const ease: Easing = [0.16, 1, 0.3, 1];

const stats = [
  { value: 12, suffix: "+", label: "Years in Business", decimals: 0, duration: 1.6 },
  { value: 500, suffix: "+", label: "Clients Served", decimals: 0, duration: 2.0 },
  { value: 50, prefix: "$", suffix: "M+", label: "Managed Annually", decimals: 0, duration: 1.8 },
  { value: 99.8, suffix: "%", label: "Accuracy Rate", decimals: 1, duration: 2.2 },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[var(--color-charcoal)] overflow-hidden">
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] noise-bg"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[var(--color-gold-accent)] mb-3 leading-none">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  duration={stat.duration}
                />
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
