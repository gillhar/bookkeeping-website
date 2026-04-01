"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

// Concrete hex values — Framer Motion needs these for colour interpolation
const WARM_WHITE   = "#FAF9F6";
const STONE        = "#A8A29E";
const GOLD         = "#C9A84C";
const CHARCOAL     = "#1C1C1E";
const NAVY         = "#1B2A4A";
const TEXT_SEC     = "#57534E";
const WHITE_65     = "rgba(250,249,246,0.65)";

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

        {/* Numbered list */}
        <div className="border-t border-[var(--color-border)]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              /* ── Entrance: clip-wipe from left ── */
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease }}
              /* ── Hover: broadcast "h" variant to all children ── */
              whileHover="h"
              className="relative border-b border-[var(--color-border)] overflow-hidden"
            >
              {/* ── Navy background wipes in from left ── */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: NAVY, scaleX: 0, originX: 0 }}
                variants={{
                  h: { scaleX: 1, transition: { duration: 0.52, ease } },
                }}
                aria-hidden="true"
              />

              {/* ── Gold left accent bar slides down ── */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] origin-top"
                style={{ backgroundColor: GOLD, scaleY: 0 }}
                variants={{
                  h: { scaleY: 1, transition: { duration: 0.45, ease } },
                }}
                aria-hidden="true"
              />

              {/* ── Watermark number blooms behind content ── */}
              <motion.span
                className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold leading-none tabular-nums"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(72px, 11vw, 148px)",
                  color: GOLD,
                  opacity: 0,
                  letterSpacing: "-0.05em",
                  scale: 0.88,
                }}
                variants={{
                  h: {
                    opacity: 0.09,
                    scale: 1,
                    transition: { duration: 0.5, ease },
                  },
                }}
                aria-hidden="true"
              >
                {service.number}
              </motion.span>

              <Link
                href={service.href}
                aria-label={`Learn more about ${service.name}`}
                className="relative z-10 flex items-start gap-5 md:gap-8 py-7 md:py-9 pl-6"
              >
                {/* Number */}
                <motion.span
                  className="flex-shrink-0 text-sm w-7 mt-1 tabular-nums"
                  style={{ fontFamily: "var(--font-mono)", color: STONE, display: "inline-block" }}
                  variants={{
                    h: { color: GOLD, scale: 1.2, transition: { duration: 0.25, ease } },
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </motion.span>

                {/* Name + description */}
                <div className="flex-1 min-w-0 flex flex-col md:flex-row md:gap-8">
                  <motion.h3
                    className="flex-shrink-0 md:w-[240px] text-base md:text-lg font-semibold leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: CHARCOAL,
                      letterSpacing: "-0.01em",
                    }}
                    variants={{
                      h: {
                        color: WARM_WHITE,
                        x: 6,
                        letterSpacing: "0.01em",
                        transition: { duration: 0.35, ease },
                      },
                    }}
                  >
                    {service.name}
                  </motion.h3>

                  <div className="flex-1 min-w-0 mt-1 md:mt-0">
                    <motion.p
                      className="text-sm leading-relaxed"
                      style={{ color: TEXT_SEC }}
                      variants={{
                        h: { color: WHITE_65, transition: { duration: 0.35, ease } },
                      }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Reveal on hover — desktop only */}
                    <motion.p
                      className="hidden md:block text-xs font-medium mt-2 tracking-[0.12em] uppercase"
                      style={{ color: GOLD, opacity: 0 }}
                      variants={{
                        h: { opacity: 1, transition: { duration: 0.2, delay: 0.2 } },
                      }}
                      aria-hidden="true"
                    >
                      Explore service →
                    </motion.p>
                  </div>
                </div>

                {/* Arrow */}
                <motion.span
                  className="flex-shrink-0 mt-1 inline-block text-lg"
                  style={{ color: STONE }}
                  variants={{
                    h: { x: 14, color: GOLD, scale: 1.15, transition: { duration: 0.3, ease } },
                  }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
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
              className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
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
