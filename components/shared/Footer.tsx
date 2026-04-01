import Link from "next/link";
import Image from "next/image";

function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const services = [
  { label: "Monthly Bookkeeping", href: "/services#bookkeeping" },
  { label: "Payroll Processing", href: "/services#payroll" },
  { label: "Tax Preparation & Filing", href: "/services#tax" },
  { label: "Financial Reporting", href: "/services#reporting" },
  { label: "Accounts Payable/Receivable", href: "/services#ap-ar" },
  { label: "Cloud Accounting Setup", href: "/services#cloud" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Client Portal", href: "/portal" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", Icon: IconLinkedIn },
  { label: "Twitter / X", href: "#", Icon: IconX },
  { label: "Facebook", href: "#", Icon: IconFacebook },
  { label: "Instagram", href: "#", Icon: IconInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white" role="contentinfo">
      {/* Gold accent line */}
      <div className="h-[1px] bg-[var(--color-gold-accent)] opacity-40" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Company */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block relative w-[160px] h-[40px] mb-6"
              aria-label="Novera Bookkeeping — home"
            >
              <Image
                src="/images/logo-novera-reversed.svg"
                alt="Novera Bookkeeping"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-7 max-w-[260px]">
              Premium bookkeeping and financial services built on accuracy, backed by trust. Serving businesses across Canada since 2012.
            </p>
            <div className="flex items-center gap-2.5" aria-label="Social media links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-200 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-accent)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-accent)] mb-5">
              Services
            </h2>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-[var(--color-gold-accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-accent)] mb-5">
              Resources
            </h2>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-[var(--color-gold-accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-accent)] mb-5">
              Contact
            </h2>
            <address className="not-italic space-y-3 text-sm text-white/60">
              <p className="leading-relaxed">
                Suite 400, 1200 Bay Street
                <br />
                Toronto, ON&nbsp; M5R 2A5
              </p>
              <p>
                <a
                  href="tel:+14163001200"
                  className="transition-colors duration-200 hover:text-[var(--color-gold-accent)]"
                >
                  +1 (416) 300-1200
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@noverabookkeeping.com"
                  className="transition-colors duration-200 hover:text-[var(--color-gold-accent)]"
                >
                  hello@noverabookkeeping.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © 2026 Novera Bookkeeping. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 transition-colors hover:text-white/55"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 transition-colors hover:text-white/55"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
