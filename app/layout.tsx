import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import BackToTop from "@/components/shared/BackToTop";
import RouteProgress from "@/components/shared/RouteProgress";
import PageTransition from "@/components/shared/PageTransition";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://noverabookkeeping.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Novera Bookkeeping — Precision in Every Number",
    template: "%s | Novera Bookkeeping",
  },
  description:
    "Premium bookkeeping and financial services in Vancouver. Monthly bookkeeping, payroll, tax preparation, financial reporting, and more — built on accuracy, backed by trust.",
  keywords: [
    "bookkeeping Vancouver",
    "bookkeeper Vancouver",
    "payroll services Vancouver",
    "tax preparation Vancouver",
    "small business bookkeeping",
    "QuickBooks Xero bookkeeper",
  ],
  authors: [{ name: "Novera Bookkeeping" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Novera Bookkeeping",
    title: "Novera Bookkeeping — Precision in Every Number",
    description:
      "Premium bookkeeping and financial services in Vancouver. Built on accuracy, backed by trust.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novera Bookkeeping — Precision in Every Number",
    description:
      "Premium bookkeeping and financial services in Vancouver. Built on accuracy, backed by trust.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* CSS scroll-driven progress bar — gold line grows as you scroll */}
        <div
          className="scroll-progress-bar fixed top-0 left-0 right-0 h-[2px] z-[200] bg-[var(--color-gold-accent)] pointer-events-none"
          aria-hidden="true"
        />
        <RouteProgress />
        <Navigation />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
