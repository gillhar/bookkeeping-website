"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.3, ease }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-7 right-7 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--color-charcoal)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)] focus-visible:ring-offset-2"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="var(--color-gold-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 9.5L7 4.5L12 9.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
