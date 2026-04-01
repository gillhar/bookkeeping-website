"use client";

import { motion, type Easing } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const values = [
  {
    title: "Accuracy",
    description: "Every decimal matters. We triple-check so you never have to.",
  },
  {
    title: "Transparency",
    description: "No hidden fees, no jargon. Just honest reporting.",
  },
  {
    title: "Partnership",
    description: "We're not vendors. We're your financial teammates.",
  },
  {
    title: "Innovation",
    description: "We use the latest tools so your books are always current.",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-light-grey)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="What we stand for."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {values.map((value, i) => {
            const isRightCol = i % 2 === 1;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
                className={[
                  "py-10 lg:py-14 border-[var(--color-border)]",
                  i > 0 ? "border-t" : "",
                  isRightCol
                    ? "sm:border-l sm:pl-12 lg:pl-16"
                    : "sm:pr-12 lg:pr-16",
                  i === 1 ? "sm:border-t-0" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <h3
                  className="text-2xl md:text-3xl font-semibold text-[var(--color-charcoal)] mb-4 leading-snug tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-[1.8] text-base">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
