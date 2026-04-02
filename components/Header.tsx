"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Phone, Calculator } from "lucide-react";

const ROOFR_URL =
  "https://app.roofr.com/instant-estimator/09a432b4-f154-4013-8baa-893cf71f5d8c/CaliRoofingSolutions/welcome-question";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/gallery`, label: t("portfolio") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-16 py-6 md:py-10">
        {/* Logo */}
        <Link href={`/${locale}`} className="relative block h-12 w-48 md:h-14 md:w-64 shrink-0">
          <Image
            src="https://i0.wp.com/caliroofingsolutions.com/wp-content/uploads/2025/12/aa-cali-roofing-new-logo.jpg"
            alt="Cali Roofing Solutions"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <a
            href={ROOFR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap shadow-lg shadow-blue-600/25"
          >
            <Calculator className="h-4 w-4" />
            Free Estimate
          </a>
          <a
            href="tel:+19517431437"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-100 transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="h-4 w-4" />
            (951) 743-1437
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white z-[1001]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={ROOFR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <Calculator className="h-4 w-4" />
            Free Instant Estimate
          </a>
          <LanguageToggle />
          <a
            href="tel:+19517431437"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            <Phone className="h-4 w-4" />
            (951) 743-1437
          </a>
        </div>
      )}
    </>
  );
}
