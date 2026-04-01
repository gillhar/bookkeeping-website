"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const services = [
  {
    number: "01",
    name: "Monthly Bookkeeping",
    description:
      "Accurate reconciliation and categorisation every month — clean, audit-ready books without lifting a finger.",
    href: "/services#bookkeeping",
  },
  {
    number: "02",
    name: "Payroll Processing",
    description:
      "On-time payroll runs, CRA remittances, and year-end T4 preparation handled precisely.",
    href: "/services#payroll",
  },
  {
    number: "03",
    name: "Tax Preparation & Filing",
    description:
      "Corporate and personal returns prepared with precision, filed on schedule, optimised for your situation.",
    href: "/services#tax",
  },
  {
    number: "04",
    name: "Financial Reporting",
    description:
      "Clear P&L, balance sheet, and cash flow statements — designed for decisions, not just compliance.",
    href: "/services#reporting",
  },
  {
    number: "05",
    name: "AP/AR Management",
    description:
      "Streamlined accounts payable and receivable so vendors stay paid and cash flow stays healthy.",
    href: "/services#ap-ar",
  },
  {
    number: "06",
    name: "Cloud Accounting Setup",
    description:
      "Full migration, setup, and training for QuickBooks Online, Xero, or FreshBooks.",
    href: "/services#cloud",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20">
          <SectionHeading
            subtitle="What We Do"
            title="Everything your business needs."
            className="md:max-w-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-sm text-[var(--color-text-secondary)] max-w-xs md:text-right md:pb-1 leading-relaxed"
          >
            Six core services, one dedicated team.
          </motion.p>
        </div>

        {/* Editorial numbered list */}
        <div className="border-t border-[var(--color-border)]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease }}
              className="group border-b border-[var(--color-border)]"
            >
              <Link
                href={service.href}
                aria-label={`Learn more about ${service.name}`}
                className="flex items-start md:items-center gap-5 md:gap-8 py-6 md:py-7"
              >
                {/* Number */}
                <span
                  className="flex-shrink-0 text-sm text-[var(--color-stone)] w-7 mt-0.5 md:mt-0 tabular-nums transition-colors duration-300 group-hover:text-[var(--color-gold-accent)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* Name + description */}
                <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:gap-8">
                  <h3
                    className="flex-shrink-0 md:w-[240px] text-base md:text-lg font-semibold text-[var(--color-charcoal)] leading-snug tracking-[-0.01em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.name}
                  </h3>
                  <p className="mt-1 md:mt-0 flex-1 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="flex-shrink-0 mt-0.5 md:mt-0 text-[var(--color-stone)] transition-all duration-300 group-hover:text-[var(--color-gold-accent)] group-hover:translate-x-1.5 inline-block"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trailing link to full services page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex justify-end"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold-accent)] transition-all duration-200"
          >
            View all service details
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
