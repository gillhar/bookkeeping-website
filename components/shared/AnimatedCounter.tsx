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
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          const formatted =
            decimals > 0
              ? latest.toFixed(decimals)
              : Math.round(latest).toLocaleString("en");
          ref.current.textContent = prefix + formatted + suffix;
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
