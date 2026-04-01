"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    // Start progress
    setProgress(0);
    setActive(true);

    let val = 0;
    timerRef.current = setInterval(() => {
      val += Math.random() * 18 + 4;
      if (val >= 90) {
        if (timerRef.current) clearInterval(timerRef.current);
        val = 90;
      }
      setProgress(val);
    }, 80);

    // Finish after a short delay
    const finish = setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => setActive(false), 300);
    }, 600);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      clearTimeout(finish);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-[var(--color-gold-accent)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
