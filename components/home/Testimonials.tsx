"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote:
      "Novera completely transformed how we handle our books. We went from dreading month-end to actually looking forward to the reports.",
    name: "Rachel Andersen",
    company: "Bloom Interior Design",
  },
  {
    quote:
      "Their attention to detail saved us thousands in tax season. I trust them completely with our financials.",
    name: "James Whitfield",
    company: "Whitfield Construction",
  },
  {
    quote:
      "Switching to Novera was the best business decision we made this year. Our books have never been cleaner.",
    name: "Priya Malhotra",
    company: "Saffron Catering Co.",
  },
  {
    quote:
      "Finally, a bookkeeper who actually explains things in plain English. Worth every penny.",
    name: "Mark Tessier",
    company: "Tessier Auto Group",
  },
];

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const paused = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    const n = (active + 1) % testimonials.length;
    setDirection(1);
    setActive(n);
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) next();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 16 : -16,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -16 : 16,
      transition: { duration: 0.3, ease: "easeIn" as Easing },
    }),
  };

  return (
    <section
      className="relative py-20 md:py-32 lg:py-40 bg-[var(--color-deep-navy)] overflow-hidden"
      aria-label="Client testimonials"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      {/* Subtle noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] noise-bg"
        aria-hidden="true"
      />

      {/* Decorative quotation mark */}
      <svg
        className="absolute top-12 left-1/2 -translate-x-1/2 opacity-[0.07] pointer-events-none select-none"
        width="220"
        height="160"
        viewBox="0 0 220 160"
        fill="var(--color-gold-accent)"
        aria-hidden="true"
      >
        <path d="M0 160V96Q0 56 20 32T80 0v24Q52 28 38 48t-14 48h32v64H0zm120 0V96q0-40 20-64T200 0v24q-28 4-42 24t-14 48h32v64H120z" />
      </svg>

      <div className="relative z-10 max-w-[860px] mx-auto px-6 lg:px-8 text-center">
        {/* Carousel — use padding-based height so quotes never clip on mobile */}
        <div className="relative py-6 mb-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <blockquote>
                <p
                  className="text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] font-normal italic text-[var(--color-warm-white)] leading-[1.65] mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-semibold text-white mb-1">
                    {testimonials[active].name}
                  </p>
                  <p
                    className="text-xs uppercase tracking-[0.18em] text-[var(--color-stone)]"
                  >
                    {testimonials[active].company}
                  </p>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className="group relative w-6 h-6 flex items-center justify-center focus-visible:outline-none"
            >
              <motion.span
                animate={{
                  width: i === active ? 20 : 6,
                  opacity: i === active ? 1 : 0.35,
                }}
                transition={{ duration: 0.35, ease }}
                className="block h-[3px] rounded-full bg-[var(--color-gold-accent)]"
              />
            </button>
          ))}
        </div>

        {/* Arrow navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-200 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 2L4 7l5 5" />
            </svg>
          </button>
          <button
            onClick={() => goTo((active + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-200 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 2l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
