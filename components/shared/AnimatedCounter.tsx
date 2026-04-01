"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, target, {
      duration,
      /* Expo ease-out: flies up fast, dramatically decelerates to land */
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (ref.current) {
          const formatted =
            decimals > 0
              ? latest.toFixed(decimals)
              : Math.round(latest).toLocaleString("en");
          ref.current.textContent = prefix + formatted + suffix;
        }
      },
      onComplete() {
        /* Brief gold glow when the counter lands */
        if (ref.current) {
          ref.current.style.transition = "text-shadow 0.15s ease";
          ref.current.style.textShadow = "0 0 24px rgba(201,168,76,0.65)";
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.textShadow = "0 0 0px rgba(201,168,76,0)";
              setTimeout(() => {
                if (ref.current) ref.current.style.textShadow = "";
              }, 500);
            }
          }, 180);
        }
      },
    });
    return controls.stop;
  }, [isInView, motionValue, target, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-mono)" }}>
      {prefix}0{suffix}
    </span>
  );
}
