"use client";

import { motion, type Easing } from "framer-motion";
import { BookOpen, Users, Receipt, BarChart3, CreditCard, CloudCog } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const services = [
  {
    id: "bookkeeping",
    icon: BookOpen,
    name: "Monthly Bookkeeping",
    description:
      "We handle your entire bookkeeping cycle — categorising transactions, reconciling accounts, and ensuring every dollar is tracked with precision. You get clean, audit-ready books every month without lifting a finger. Our team stays on top of your accounts so nothing slips through the cracks, even during your busiest seasons.",
    included: [
      "Transaction categorisation & coding",
      "Bank and credit card reconciliation",
      "Month-end close and journal entries",
      "Secure cloud access to your books",
    ],
  },
  {
    id: "payroll",
    icon: Users,
    name: "Payroll Processing",
    description:
      "Payroll errors are costly — both financially and to employee trust. We run your payroll accurately and on time, handle all remittances to the CRA, and manage year-end T4 and ROE preparation. Whether you have 2 employees or 200, we scale with you.",
    included: [
      "Bi-weekly or monthly payroll runs",
      "CRA remittances (CPP, EI, income tax)",
      "T4 preparation and filing",
      "ROE submissions and direct deposit setup",
    ],
  },
  {
    id: "tax",
    icon: Receipt,
    name: "Tax Preparation & Filing",
    description:
      "Tax season should be stress-free. We prepare and file both corporate (T2) and personal (T1) tax returns, ensuring every eligible deduction is captured. Our proactive approach means you're never surprised — we plan year-round, not just in April.",
    included: [
      "Corporate T2 returns",
      "Personal T1 returns for business owners",
      "HST/GST preparation and filing",
      "Year-round tax planning and strategy",
    ],
  },
  {
    id: "reporting",
    icon: BarChart3,
    name: "Financial Reporting & Analysis",
    description:
      "Numbers only matter if you can read them. We produce clear, customised financial reports — profit and loss, balance sheets, cash flow statements — and walk you through what they mean for your business. Use our reporting to make decisions with confidence.",
    included: [
      "Monthly P&L and balance sheet",
      "Cash flow forecasting",
      "Budget vs. actual variance analysis",
      "Custom KPI dashboards",
    ],
  },
  {
    id: "ap-ar",
    icon: CreditCard,
    name: "AP/AR Management",
    description:
      "Late payments hurt cash flow. Missed invoices hurt relationships. We manage your accounts payable and receivable so vendors are paid on time and clients get invoiced promptly. We track aging balances and follow up on overdue accounts so you don't have to.",
    included: [
      "Invoice creation and delivery",
      "Payment tracking and follow-up",
      "Vendor payment scheduling",
      "Aging reports and collections support",
    ],
  },
  {
    id: "cloud",
    icon: CloudCog,
    name: "Cloud Accounting Setup",
    description:
      "Moving to cloud accounting is one of the best investments a growing business can make. We handle the full migration — setting up your chart of accounts, importing historical data, connecting your bank feeds, and training your team — so you're operational fast.",
    included: [
      "QuickBooks Online, Xero, or FreshBooks setup",
      "Historical data migration",
      "Bank feed integration",
      "Staff training and onboarding",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Service Details"
          title="Everything your books need."
          description="Six core services built around one goal: financial clarity for your business."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
                whileHover={{ y: -3 }}
                className="group flex flex-col p-8 bg-white rounded-xl border border-[var(--color-border)] shadow-[0_4px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[var(--color-gold-accent)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-light-grey)]">
                  <Icon
                    size={22}
                    className="text-[var(--color-sage)]"
                    strokeWidth={1.75}
                  />
                </div>

                <h3
                  className="text-xl font-semibold text-[var(--color-charcoal)] mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.name}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-7">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-[6px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[var(--color-gold-accent)]"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold-accent)] transition-all duration-200 group-hover:gap-2.5"
                >
                  Get Started
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
