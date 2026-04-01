import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";

// Below-fold sections: split into separate JS chunks while keeping SSR
const AboutSnapshot = dynamic(() => import("@/components/home/AboutSnapshot"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const CTABanner = dynamic(() => import("@/components/shared/CTABanner"));

export const metadata: Metadata = {
  title: "Novera Bookkeeping — Precision in Every Number",
  description:
    "Expert bookkeeping services for small and mid-sized businesses in Vancouver. Monthly bookkeeping, payroll, tax prep, and more — built on accuracy, backed by trust.",
  openGraph: {
    title: "Novera Bookkeeping — Precision in Every Number",
    description:
      "Expert bookkeeping services for small and mid-sized businesses in Vancouver.",
    url: "https://noverabookkeeping.ca",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <AboutSnapshot />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
