"use client";

import { motion, type Easing } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const ease: Easing = [0.16, 1, 0.3, 1];

const team = [
  {
    name: "Sarah Chen",
    title: "Founder & Lead Bookkeeper",
    bio: "CPA with 14 years of experience. Built Novera from the ground up with a belief that small businesses deserve enterprise-grade financial care.",
    photo: "Professional headshot of Sarah Chen, warm neutral background, natural smile, business casual",
  },
  {
    name: "Michael Torres",
    title: "Senior Accountant",
    bio: "Specialises in corporate tax strategy and financial reporting. Former Big Four accountant who traded boardrooms for businesses that actually feel like people.",
    photo: "Professional headshot of Michael Torres, warm neutral background, natural smile, business casual",
  },
  {
    name: "Priya Sharma",
    title: "Payroll Specialist",
    bio: "Eight years in payroll compliance across retail, hospitality, and professional services. Zero payroll errors on her watch — and counting.",
    photo: "Professional headshot of Priya Sharma, warm neutral background, natural smile, business casual",
  },
  {
    name: "David Kim",
    title: "Client Relations Manager",
    bio: "Your first call and last line of support. David ensures every client feels heard, informed, and genuinely taken care of from day one.",
    photo: "Professional headshot of David Kim, warm neutral background, natural smile, business casual",
  },
];

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-warm-white)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Team"
          title="The people behind your books."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease }}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular photo */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-[#d4cfc9] ring-2 ring-[var(--color-border)] transition-all duration-300 group-hover:ring-[var(--color-gold-accent)] group-hover:ring-4">
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <p className="text-[8px] text-stone-500 text-center leading-tight select-none pointer-events-none">
                      [PHOTO: {member.photo}]
                    </p>
                  </div>
                </div>

                {/* LinkedIn button — reveals on hover */}
                <motion.a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-2 -right-2 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--color-charcoal)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)]"
                >
                  <LinkedInIcon />
                </motion.a>
              </div>

              {/* Bio lifts on hover */}
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <h3
                  className="text-base font-semibold text-[var(--color-charcoal)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-sage)] mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-[220px]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
