"use client";

import { motion } from "framer-motion";

const partners = [
  "CPA Canada",
  "QuickBooks ProAdvisor",
  "Xero Certified",
  "FreshBooks",
  "Sage Partner",
  "Wave Accounting",
];

export default function TrustBar() {
  return (
    <section
      className="bg-[var(--color-light-grey)] border-b border-[var(--color-border)] py-14"
      aria-label="Trusted partners"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-stone)] mb-10"
        >
          Trusted by leading platforms
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-6 lg:gap-x-14">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="block text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-stone)] select-none"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
