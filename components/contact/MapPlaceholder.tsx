"use client";

import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

export default function MapPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] bg-[#ddd8d0] overflow-hidden"
      role="img"
      aria-label="Office location map"
    >
      {/* Stylised grid lines */}
      <svg
        className="absolute inset-0 w-full h-full text-[#c8c0b6]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="map-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />

        {/* Fake road lines */}
        <line x1="0" y1="170" x2="100%" y2="170" stroke="#bdb6ad" strokeWidth="10" />
        <line x1="0" y1="230" x2="100%" y2="230" stroke="#c5beb5" strokeWidth="6" />
        <line x1="38%" y1="0" x2="38%" y2="100%" stroke="#bdb6ad" strokeWidth="14" />
        <line x1="62%" y1="0" x2="62%" y2="100%" stroke="#c5beb5" strokeWidth="6" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#c8c1b7" strokeWidth="4" />
        <line x1="78%" y1="0" x2="78%" y2="100%" stroke="#c8c1b7" strokeWidth="4" />
      </svg>

      {/* Fake city blocks */}
      <div className="absolute top-[30px] left-[22%] w-[14%] h-[120px] bg-[#cec7be] rounded-sm opacity-60" aria-hidden="true" />
      <div className="absolute top-[60px] left-[40%] w-[20%] h-[80px] bg-[#cec7be] rounded-sm opacity-60" aria-hidden="true" />
      <div className="absolute top-[245px] left-[22%] w-[14%] h-[80px] bg-[#cec7be] rounded-sm opacity-60" aria-hidden="true" />
      <div className="absolute top-[245px] left-[65%] w-[11%] h-[80px] bg-[#cec7be] rounded-sm opacity-60" aria-hidden="true" />
      <div className="absolute top-[50px] left-[80%] w-[12%] h-[100px] bg-[#cec7be] rounded-sm opacity-60" aria-hidden="true" />

      {/* Gold pin marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[var(--color-gold-accent)] flex items-center justify-center shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="w-[2px] h-5 bg-[var(--color-gold-accent)]" />
          <div className="w-3 h-[2px] bg-[var(--color-gold-accent)] opacity-50 rounded-full" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-gold-accent)]" aria-hidden="true" />
          <span className="text-xs font-medium text-[var(--color-charcoal)] whitespace-nowrap">
            Novera Bookkeeping — Financial District, Vancouver
          </span>
        </div>
      </div>
    </motion.div>
  );
}
