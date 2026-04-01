"use client";

import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

export default function OurStory() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Pull quote */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            {/* Decorative gold quotation mark */}
            <svg
              className="absolute -top-6 -left-4 opacity-20 pointer-events-none"
              width="72"
              height="52"
              viewBox="0 0 72 52"
              fill="var(--color-gold-accent)"
              aria-hidden="true"
            >
              <path d="M0 52V32Q0 18.5 6.5 10.5T26 0v8Q16.5 9.5 12.5 16T9 32h10.5v20H0zm37.5 0V32Q37.5 18.5 44 10.5T63.5 0v8Q54 9.5 50 16t-4 16H56.5v20H37.5z" />
            </svg>

            <blockquote
              className="text-2xl lg:text-3xl font-normal italic text-[var(--color-charcoal)] leading-[1.55] tracking-[-0.01em] pl-8 lg:pl-12 pt-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We started Novera with a simple belief: every business deserves financial clarity.
            </blockquote>

            <div className="mt-10 pl-8 lg:pl-12">
              <div className="w-10 h-[2px] bg-[var(--color-gold-accent)] opacity-40" aria-hidden="true" />
              <p className="mt-4 text-sm font-medium text-[var(--color-text-secondary)]">
                Sarah Chen — Founder, Novera Bookkeeping
              </p>
            </div>
          </motion.div>

          {/* Right — Story paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="space-y-6 text-[var(--color-text-secondary)] leading-[1.85] text-base"
          >
            <p>
              Novera started at a kitchen table in East Vancouver in 2012. Sarah Chen had just left a corporate accounting firm where she&apos;d spent five years watching small business owners struggle — not because they weren&apos;t talented, but because they were buried in receipts, confused by tax obligations, and never quite sure where their money was going. She knew there was a better way.
            </p>
            <p>
              The first year, Novera had three clients — all referrals from friends. Word spread the old-fashioned way: because the work was genuinely good and Sarah actually answered her phone. By year three, the team had grown to five bookkeepers. By year seven, they&apos;d passed the 250-client mark without ever spending a dollar on advertising.
            </p>
            <p>
              Today, Novera is a trusted financial partner to over 500 businesses across Metro Vancouver — from independent contractors to multi-location restaurants to tech startups. The kitchen table is long gone, but the approach hasn&apos;t changed: rigorous accuracy, personal service, and the belief that your books should empower you, not stress you out.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
