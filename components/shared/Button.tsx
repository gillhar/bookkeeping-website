"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] font-semibold border border-[var(--color-gold-accent)]",
  secondary:
    "bg-transparent text-[var(--color-charcoal)] font-medium border border-[var(--color-border)] hover:border-[var(--color-charcoal)]",
  ghost:
    "bg-transparent text-white font-medium border border-white/40 hover:border-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    rounded-lg tracking-wide transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const customEase: Easing = [0.16, 1, 0.3, 1];
  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: customEase },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={disabled || undefined}
          className={`${baseClasses} ${disabled ? "opacity-50 pointer-events-none" : ""}`}
          {...(disabled ? {} : motionProps)}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div
        {...(disabled ? {} : motionProps)}
        style={{ display: "inline-block" }}
      >
        <Link
          href={href}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
          className={`${baseClasses} ${disabled ? "opacity-50 pointer-events-none" : ""}`}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
