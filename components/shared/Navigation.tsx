"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafRef.current = null;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // On home, nav is transparent until scrolled. On other pages, always solid.
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: isTransparent
            ? "rgba(250,249,246,0)"
            : "rgba(250,249,246,1)",
          boxShadow: isTransparent
            ? "0 0 0 rgba(0,0,0,0)"
            : "0 1px 40px rgba(0,0,0,0.07)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex-shrink-0 w-[160px] h-[40px]"
            aria-label="Novera Bookkeeping — home"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isTransparent ? (
                <motion.div
                  key="reversed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/logo-novera-reversed.svg"
                    alt="Novera Bookkeeping"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/logo-novera.svg"
                    alt="Novera Bookkeeping"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium py-1 transition-colors duration-200 ${
                    isTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : isActive
                        ? "text-[var(--color-charcoal)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-[var(--color-gold-accent)]"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm">
                Free Consultation
              </Button>
            </div>

            {/* Hamburger — min 44×44px touch target via p-3 */}
            <button
              className="md:hidden p-3 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 flex flex-col justify-center gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`block h-[1.5px] w-full rounded-full origin-center ${
                    isTransparent && !mobileOpen
                      ? "bg-white"
                      : "bg-[var(--color-charcoal)]"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                  className={`block h-[1.5px] w-full rounded-full ${
                    isTransparent && !mobileOpen
                      ? "bg-white"
                      : "bg-[var(--color-charcoal)]"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`block h-[1.5px] w-full rounded-full origin-center ${
                    isTransparent && !mobileOpen
                      ? "bg-white"
                      : "bg-[var(--color-charcoal)]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[var(--color-charcoal)] flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-center py-4 text-3xl font-semibold transition-colors ${
                        isActive
                          ? "text-[var(--color-gold-accent)]"
                          : "text-white/80 hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.35,
                  delay: navLinks.length * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8"
              >
                <Button href="/contact" variant="primary" size="lg">
                  Free Consultation
                </Button>
              </motion.div>
            </div>

            <div className="px-8 py-6 border-t border-white/10 text-center text-white/50 text-xs tracking-wider uppercase">
              © 2026 Novera Bookkeeping
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
