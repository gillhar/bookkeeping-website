import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessStepper from "@/components/services/ProcessStepper";
import PricingSection from "@/components/services/PricingSection";
import FAQAccordion from "@/components/services/FAQAccordion";
import CTABanner from "@/components/shared/CTABanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Monthly bookkeeping, payroll, tax preparation, financial reporting, AP/AR management, and cloud accounting setup. Fixed pricing, no surprises.",
  openGraph: {
    title: "Services | Novera Bookkeeping",
    description:
      "Six core financial services with transparent, fixed pricing. Book a free consultation today.",
    url: "https://noverabookkeeping.ca/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessStepper />
      <PricingSection />
      <FAQAccordion />
      <CTABanner
        headline="Not sure which plan fits?"
        subtext="Book a free call and we'll recommend the right service level for your business — no pressure, no sales pitch."
        ctaLabel="Book a Free Call"
      />
    </>
  );
}
