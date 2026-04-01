"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "QuickBooks", src: "/images/logos/quickbooks.svg", w: 126, h: 32 },
  { name: "Xero", src: "/images/logos/xero.svg", w: 36, h: 36 },
  { name: "FreshBooks", src: "/images/logos/freshbooks.svg", w: 122, h: 30 },
  { name: "Sage", src: "/images/logos/sage.svg", w: 100, h: 30 },
  { name: "Wave", src: "/images/logos/wave.svg", w: 104, h: 30 },
  { name: "CPA Canada", src: "/images/logos/cpa-canada.svg", w: 78, h: 44 },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export default function TrustBar() {
  return (
    <section
      className="bg-[var(--color-light-grey)] border-b border-[var(--color-border)] py-12 overflow-hidden"
      aria-label="Trusted partners and certifications"
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-stone)] mb-10"
      >
        Trusted by leading platforms
      </motion.p>

      {/* Marquee */}
      <div className="relative marquee-outer">
        {/* Left fade */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-light-grey), transparent)" }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-light-grey), transparent)" }}
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div className="flex marquee-track" aria-hidden="true">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-12"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                className="opacity-35 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0"
                style={{ objectFit: "contain", maxHeight: "36px", width: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* Accessible text list (screen readers) */}
        <ul className="sr-only">
          {logos.map((logo) => (
            <li key={logo.name}>{logo.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
