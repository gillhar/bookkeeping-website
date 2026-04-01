"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const faqs = [
  {
    q: "How quickly can you get us set up?",
    a: "Most clients are fully onboarded within 48 hours of signing. We handle the migration, account connections, and initial reconciliation so you can hand off the books immediately.",
  },
  {
    q: "Do I need to be on a specific accounting platform?",
    a: "We work with QuickBooks Online, Xero, and FreshBooks. If you're not yet on any platform, we'll recommend the best fit for your business and handle the full setup at no extra charge.",
  },
  {
    q: "What happens at tax time?",
    a: "Our Essential plan covers year-round bookkeeping that keeps you audit-ready. Professional and Enterprise clients get full HST/GST filing, T4 preparation, and strategic tax planning included.",
  },
  {
    q: "Can I change plans as my business grows?",
    a: "Absolutely. You can upgrade (or downgrade) at any time with 30 days notice. There are no lock-in contracts — we earn your business every month.",
  },
  {
    q: "Who will actually be handling my books?",
    a: "You'll be assigned a dedicated senior bookkeeper who gets to know your accounts, your industry, and your preferences. You communicate directly with them — no call centres or ticket queues.",
  },
  {
    q: "Is my financial data secure?",
    a: "Yes. All data is encrypted in transit and at rest. We use bank-level security protocols, two-factor authentication, and role-based access controls. We also carry professional liability insurance.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-light-grey)]">
      <div className="max-w-[860px] mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="FAQ"
          title="Common questions."
          align="center"
          className="mb-14 lg:mb-16"
        />

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--color-border)] last:border-none">
                <button
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-6 py-6 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)] focus-visible:ring-offset-1 rounded ${
                    isOpen ? "text-[var(--color-charcoal)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors ${
                      isOpen ? "text-[var(--color-charcoal)]" : ""
                    }`}
                  >
                    {isOpen && (
                      <span
                        className="inline-block mr-3 text-[var(--color-gold-accent)] text-xs"
                        style={{ fontFamily: "var(--font-mono)" }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-[var(--color-gold-accent)] text-[var(--color-gold-accent)]"
                        : "border-[var(--color-border)] text-[var(--color-text-stone)]"
                    }`}
                  >
                    {isOpen ? <Minus size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-[var(--color-text-secondary)] leading-[1.85] max-w-[700px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
