import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapPlaceholder from "@/components/contact/MapPlaceholder";
import ContactFAQ from "@/components/contact/ContactFAQ";
import CTABanner from "@/components/shared/CTABanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Novera Bookkeeping. Book a free consultation, ask a question, or find out which service is right for your business.",
  openGraph: {
    title: "Contact | Novera Bookkeeping",
    description:
      "Book a free 30-minute consultation with Novera Bookkeeping. We're based in Vancouver and serve businesses across BC.",
    url: "https://noverabookkeeping.ca/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Split layout — form + info */}
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-[var(--color-warm-white)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24">
            {/* Left — Form */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-accent)] mb-4">
                Send a Message
              </p>
              <h1
                className="text-3xl lg:text-4xl font-semibold text-[var(--color-charcoal)] mb-10 leading-tight tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s talk about your books.
              </h1>
              <ContactForm />
            </div>

            {/* Right — Info */}
            <div className="lg:pt-16">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <MapPlaceholder />

      {/* Mini FAQ */}
      <ContactFAQ />

      {/* CTA */}
      <CTABanner
        headline="Still have questions? We'd love to hear from you."
        subtext="There's no such thing as a silly question when it comes to your finances. We're here to help."
        ctaLabel="Book a Free Call"
        bg="deep-navy"
      />
    </>
  );
}
