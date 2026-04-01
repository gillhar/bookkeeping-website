import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/about/TeamSection";
import StatsSection from "@/components/about/StatsSection";
import CTABanner from "@/components/shared/CTABanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in Vancouver in 2012, Novera Bookkeeping has grown to serve 500+ businesses across Metro Vancouver. Our story, values, and team.",
  openGraph: {
    title: "About | Novera Bookkeeping",
    description:
      "Meet the team behind Novera Bookkeeping — 12+ years of financial expertise, 500+ clients served.",
    url: "https://noverabookkeeping.ca/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <StatsSection />
      <CTABanner bg="sage" />
    </>
  );
}
