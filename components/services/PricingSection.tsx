"use client";

import { motion, type Easing } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

const ease: Easing = [0.16, 1, 0.3, 1];

const tiers = [
  {
    name: "Essential",
    price: "399",
    period: "/mo",
    description: "Everything you need to keep your books clean and current.",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Basic P&L and balance sheet",
      "Secure cloud access",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "799",
    period: "/mo",
    description: "Full-service bookkeeping with payroll and tax support.",
    features: [
      "Everything in Essential",
      "Payroll processing (up to 20 employees)",
      "Quarterly HST/GST filing",
      "Dedicated bookkeeper",
      "Priority email + phone support",
      "Year-end T4 preparation",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1,499",
    period: "/mo",
    description: "Strategic financial partnership for growing businesses.",
    features: [
      "Everything in Professional",
      "CFO advisory sessions (monthly)",
      "Custom financial reporting",
      "Cash flow forecasting",
      "Unlimited payroll employees",
      "Priority same-day support",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Simple, transparent pricing."
          description="No hidden fees. No surprises. Pick the plan that fits your business."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`relative flex flex-col p-8 rounded-xl border transition-shadow duration-300 ${
                tier.popular
                  ? "border-[var(--color-gold-accent)] shadow-[0_8px_48px_rgba(201,168,76,0.12)] bg-white"
                  : "border-[var(--color-border)] shadow-[0_4px_40px_rgba(0,0,0,0.04)] bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] text-xs font-semibold uppercase tracking-[0.18em] rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-sage)] mb-2">
                  {tier.name}
                </p>
                <div className="flex items-end gap-0.5 mb-3">
                  <span className="text-sm text-[var(--color-text-secondary)] self-start mt-2">$</span>
                  <span
                    className="text-4xl font-medium text-[var(--color-charcoal)] leading-none"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-sm text-[var(--color-text-stone)] mb-0.5">{tier.period}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="gold-divider mb-6 opacity-20" aria-hidden="true" />

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="text-[var(--color-sage)] mt-[3px] flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-[var(--color-text-secondary)] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.popular ? "primary" : "secondary"}
                size="md"
                className="w-full justify-center"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-[var(--color-text-stone)] mt-8"
        >
          All plans include a 30-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
