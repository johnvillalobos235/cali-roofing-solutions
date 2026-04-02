"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Calculator } from "lucide-react";

export default function FloatingNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/gallery`, label: t("portfolio") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <nav
      className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[1000] items-center gap-1 rounded-full bg-slate-950/90 backdrop-blur-md px-2 py-2 shadow-lg border border-white/10 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full transition-colors hover:bg-white/10"
        >
          {link.label}
        </Link>
      ))}
      <a
        href="https://app.roofr.com/instant-estimator/09a432b4-f154-4013-8baa-893cf71f5d8c/CaliRoofingSolutions/welcome-question"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
      >
        <Calculator className="h-3.5 w-3.5" />
        Free Estimate
      </a>
    </nav>
  );
}
