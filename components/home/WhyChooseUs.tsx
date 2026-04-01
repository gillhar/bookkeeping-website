"use client";

import { motion, type Easing } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const rows = [
  {
    number: "01",
    headline: "Dedicated Financial Experts",
    body: "You're not handed off to a junior associate or an AI. Every Novera client works directly with a senior bookkeeper who learns your business, your industry, and your goals.",
    bullets: [
      "Single point of contact — always",
      "Deep familiarity with your accounts",
      "Proactive advice, not just compliance",
    ],
    photo:
      "Close-up of hands writing in a leather-bound ledger with a fountain pen, warm desk lamp lighting",
    imageLeft: true,
  },
  {
    number: "02",
    headline: "Technology-Forward Approach",
    body: "We work in the platforms you already use — or help you upgrade to ones that will save you hours each month. Cloud-based, real-time, and fully integrated.",
    bullets: [
      "QuickBooks, Xero, FreshBooks certified",
      "Automated reconciliation workflows",
      "Live dashboards you can read in 60 seconds",
    ],
    photo:
      "Dual monitor setup showing financial dashboards and charts, clean modern desk setup",
    imageLeft: false,
  },
  {
    number: "03",
    headline: "Transparent Communication",
    body: "No jargon. No surprise fees. No wondering what's happening with your books. We explain everything in plain language and keep you informed at every step.",
    bullets: [
      "Monthly summaries in plain English",
      "Fixed, predictable pricing",
      "Response within one business day, always",
    ],
    photo:
      "Two professionals having a relaxed meeting at a coffee table, natural light, open body language",
    imageLeft: true,
  },
];

function ImagePlaceholder({ description }: { description: string }) {
  return (
    <div className="relative w-full aspect-[4/3] bg-[#d4cfc9] rounded-xl overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.10)]">
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <p className="text-stone-500 text-xs text-center leading-relaxed select-none pointer-events-none">
          [STOCK PHOTO: {description}]
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="The Novera difference."
          description="Three commitments that set us apart from every other bookkeeping firm."
          align="center"
          className="mb-20 lg:mb-24"
        />

        <div className="space-y-0">
          {rows.map((row, i) => (
            <div key={row.number}>
              {/* Gold divider (skip before first row) */}
              {i > 0 && (
                <div className="gold-divider my-10 md:my-16 lg:my-20 opacity-30" aria-hidden="true" />
              )}

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !row.imageLeft ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: row.imageLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <ImagePlaceholder description={row.photo} />
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: row.imageLeft ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.08, ease }}
                >
                  <p
                    className="text-sm font-medium text-[var(--color-gold-accent)] mb-5 tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {row.number}
                  </p>

                  <h3
                    className="text-2xl lg:text-3xl font-semibold text-[var(--color-charcoal)] mb-5 leading-snug tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {row.headline}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] leading-[1.8] mb-8 text-base">
                    {row.body}
                  </p>

                  <ul className="space-y-3">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          className="mt-[5px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[var(--color-gold-accent)]"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
