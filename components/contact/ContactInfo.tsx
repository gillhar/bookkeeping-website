"use client";

import { motion, type Easing } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ease: Easing = [0.16, 1, 0.3, 1];

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Financial District, Suite 400\nVancouver, BC  V6B 1A1",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(604) 555-0123",
    href: "tel:+16045550123",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@noverabookkeeping.ca",
    href: "mailto:hello@noverabookkeeping.ca",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday\n8:00 AM – 6:00 PM PST",
    href: null,
  },
];

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-stone)] transition-all duration-200 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-accent)]"
    >
      {children}
    </a>
  );
}

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.1, ease }}
      className="flex flex-col h-full"
    >
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-sage)] mb-3">
          Get in Touch
        </p>
        <h2
          className="text-2xl lg:text-3xl font-semibold text-[var(--color-charcoal)] mb-4 leading-tight tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Novera Bookkeeping
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
          Questions, quotes, or just curious? We're friendly. Reach out and we'll get back to you within one business day.
        </p>
      </div>

      <div className="space-y-7 flex-1">
        {details.map(({ icon: Icon, label, value, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }}
            className="flex items-start gap-4"
          >
            <div
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--color-light-grey)" }}
            >
              <Icon size={17} className="text-[var(--color-sage)]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-stone)] mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm text-[var(--color-charcoal)] leading-relaxed whitespace-pre-line transition-colors hover:text-[var(--color-gold-accent)]"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-[var(--color-charcoal)] leading-relaxed whitespace-pre-line">
                  {value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social row */}
      <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-stone)] mb-4">
          Follow Us
        </p>
        <div className="flex items-center gap-2.5">
          <SocialIcon href="#" label="LinkedIn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialIcon>
          <SocialIcon href="#" label="Twitter / X">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialIcon>
          <SocialIcon href="#" label="Facebook">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </SocialIcon>
          <SocialIcon href="#" label="Instagram">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </motion.div>
  );
}
