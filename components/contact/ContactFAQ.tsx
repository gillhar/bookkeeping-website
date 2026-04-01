"use client";

import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Within 48 hours of your discovery call.",
  },
  {
    q: "Do you work with businesses outside Vancouver?",
    a: "Yes, we serve clients across BC and can work entirely remotely.",
  },
  {
    q: "What software do you support?",
    a: "QuickBooks, Xero, FreshBooks, Sage, and more.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--color-light-grey)]">
      <div className="max-w-[860px] mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-sage)] mb-8 text-center"
        >
          Quick Answers
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="p-6 bg-white rounded-xl border border-[var(--color-border)] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <p
                className="text-base font-semibold text-[var(--color-charcoal)] mb-3 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {q}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
