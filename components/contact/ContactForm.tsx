"use client";

import { useState, useId, useRef, useEffect } from "react";
import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.16, 1, 0.3, 1];

const services = [
  "General Inquiry",
  "Monthly Bookkeeping",
  "Payroll Processing",
  "Tax Preparation & Filing",
  "Financial Reporting & Analysis",
  "AP/AR Management",
  "Cloud Accounting Setup",
];

interface FieldState {
  value: string;
  touched: boolean;
  error: string;
}

type FormFields = "name" | "email" | "phone" | "company" | "service" | "message";

type FormState = Record<FormFields, FieldState>;

function validate(field: FormFields, value: string): string {
  if (field === "name" && !value.trim()) return "Please enter your name.";
  if (field === "email") {
    if (!value.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
  }
  if (field === "message" && !value.trim()) return "Please include a message.";
  return "";
}

interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  error: string;
  touched: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
  required?: boolean;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
  required = false,
}: FloatingFieldProps) {
  const hasValue = value.length > 0;
  const showError = touched && error;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        aria-invalid={showError ? "true" : undefined}
        aria-describedby={showError ? `${id}-error` : undefined}
        className={`peer w-full pt-6 pb-2 px-0 bg-transparent border-b text-[var(--color-charcoal)] text-base sm:text-[15px] placeholder-transparent outline-none transition-colors duration-200 ${
          showError
            ? "border-red-500"
            : "border-[var(--color-border)] focus:border-[var(--color-gold-accent)]"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none ${
          hasValue
            ? "top-0 text-xs font-semibold uppercase tracking-[0.18em]"
            : "top-5 text-sm"
        } ${
          showError
            ? "text-red-600"
            : hasValue
              ? "text-[var(--color-text-sage)]"
              : "text-[var(--color-text-stone)] peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[var(--color-text-sage)]"
        }`}
      >
        {label}{required && <span className="ml-0.5 opacity-50" aria-hidden="true">*</span>}
      </label>
      {showError && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const uid = useId();

  const [form, setForm] = useState<FormState>({
    name: { value: "", touched: false, error: "" },
    email: { value: "", touched: false, error: "" },
    phone: { value: "", touched: false, error: "" },
    company: { value: "", touched: false, error: "" },
    service: { value: "", touched: false, error: "" },
    message: { value: "", touched: false, error: "" },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function update(field: FormFields, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: {
        value,
        touched: prev[field].touched,
        error: prev[field].touched ? validate(field, value) : "",
      },
    }));
  }

  function blur(field: FormFields) {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        touched: true,
        error: validate(field, prev[field].value),
      },
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate all fields
    const fields: FormFields[] = ["name", "email", "phone", "company", "service", "message"];
    const next = { ...form };
    let hasError = false;

    for (const field of fields) {
      const error = validate(field, next[field].value);
      next[field] = { ...next[field], touched: true, error };
      if (error) hasError = true;
    }
    setForm(next);
    if (hasError) return;

    setSubmitting(true);
    setSubmitError(null);
    // Simulate submission — replace with real API call
    timerRef.current = setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col items-start gap-4 py-12"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-sage)]/15 mb-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="4 10 8 14 16 6" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-display)" }}>
          Message received.
        </h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Thanks for reaching out. We'll be in touch within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="space-y-8"
    >
      {submitError && (
        <div role="alert" className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="8" cy="8" r="7" />
            <path d="M8 5v3M8 11v.5" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-red-700">{submitError}</p>
            <button
              type="button"
              onClick={() => setSubmitError(null)}
              className="mt-1 text-xs font-medium text-red-600 underline underline-offset-2 hover:text-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FloatingField
          id={`${uid}-name`}
          label="Full Name"
          value={form.name.value}
          error={form.name.error}
          touched={form.name.touched}
          onChange={(v) => update("name", v)}
          onBlur={() => blur("name")}
          required
        />
        <FloatingField
          id={`${uid}-email`}
          label="Email Address"
          type="email"
          value={form.email.value}
          error={form.email.error}
          touched={form.email.touched}
          onChange={(v) => update("email", v)}
          onBlur={() => blur("email")}
          required
        />
        <FloatingField
          id={`${uid}-phone`}
          label="Phone Number"
          type="tel"
          value={form.phone.value}
          error={form.phone.error}
          touched={form.phone.touched}
          onChange={(v) => update("phone", v)}
          onBlur={() => blur("phone")}
        />
        <FloatingField
          id={`${uid}-company`}
          label="Company Name"
          value={form.company.value}
          error={form.company.error}
          touched={form.company.touched}
          onChange={(v) => update("company", v)}
          onBlur={() => blur("company")}
        />
      </div>

      {/* Service dropdown */}
      <div className="relative">
        <label
          htmlFor={`${uid}-service`}
          className={`absolute left-0 transition-all duration-200 pointer-events-none z-10 ${
            form.service.value
              ? "top-0 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-sage)]"
              : "top-5 text-sm text-[var(--color-text-stone)]"
          }`}
        >
          Service Interested In
        </label>
        <select
          id={`${uid}-service`}
          value={form.service.value}
          onChange={(e) => update("service", e.target.value)}
          onBlur={() => blur("service")}
          className={`w-full pt-6 pb-2 px-0 bg-transparent border-b appearance-none text-base sm:text-[15px] outline-none transition-colors duration-200 cursor-pointer ${
            form.service.value ? "text-[var(--color-charcoal)]" : "text-transparent"
          } border-[var(--color-border)] focus:border-[var(--color-gold-accent)]`}
          aria-label="Service interested in"
        >
          <option value="" disabled />
          {services.map((s) => (
            <option key={s} value={s} className="text-[var(--color-charcoal)]">
              {s}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-0 bottom-3 pointer-events-none text-[var(--color-text-stone)]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 5l5 5 5-5" />
        </svg>
      </div>

      {/* Message textarea */}
      <div className="relative">
        <textarea
          id={`${uid}-message`}
          value={form.message.value}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          rows={4}
          required
          aria-invalid={form.message.touched && form.message.error ? "true" : undefined}
          aria-describedby={form.message.touched && form.message.error ? `${uid}-message-error` : undefined}
          className={`peer w-full pt-6 pb-2 px-0 bg-transparent border-b resize-none text-[var(--color-charcoal)] text-base sm:text-[15px] placeholder-transparent outline-none transition-colors duration-200 ${
            form.message.touched && form.message.error
              ? "border-red-500"
              : "border-[var(--color-border)] focus:border-[var(--color-gold-accent)]"
          }`}
          placeholder="Message"
        />
        <label
          htmlFor={`${uid}-message`}
          className={`absolute left-0 transition-all duration-200 pointer-events-none ${
            form.message.value
              ? "top-0 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-sage)]"
              : "top-5 text-sm text-[var(--color-text-stone)] peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[var(--color-text-sage)]"
          }`}
        >
          Message<span className="ml-0.5 opacity-50" aria-hidden="true">*</span>
        </label>
        {form.message.touched && form.message.error && (
          <p id={`${uid}-message-error`} role="alert" className="mt-1.5 text-xs text-red-600">
            {form.message.error}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease }}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold-accent)] text-[var(--color-charcoal)] text-sm font-semibold rounded-lg border border-[var(--color-gold-accent)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-accent)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}
