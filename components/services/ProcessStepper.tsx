"use client";

import { useRef } from "react";
import { motion, useInView, type Easing } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, your current bookkeeping setup, and your goals. No commitment required.",
  },
  {
    number: "02",
    title: "Custom Plan",
    description: "We design a bookkeeping workflow tailored to your industry, transaction volume, and reporting needs.",
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Seamless transition in 48 hours. We handle the migration, setup, and connection of all your accounts.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Monthly reports, a responsive team, and a dedicated bookkeeper who knows your business inside out.",
  },
];

export default function ProcessStepper() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-light-grey)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="How It Works"
          title="Up and running in days, not weeks."
          align="center"
          className="mb-20 lg:mb-24"
        />

        <div ref={sectionRef} className="relative">
          {/* Connecting gold line (desktop) */}
          <div
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] bg-[var(--color-border)]"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-[var(--color-gold-accent)] origin-left"
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Circle */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[var(--color-gold-accent)] mb-6 shadow-[0_4px_16px_rgba(201,168,76,0.15)]">
                  <span
                    className="text-xs font-semibold text-[var(--color-gold-accent)] tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-lg font-semibold text-[var(--color-charcoal)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
