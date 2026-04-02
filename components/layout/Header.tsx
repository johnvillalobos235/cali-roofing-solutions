"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import siteConfig from "@/site.config";
import { t } from "@/i18n";
import MobileNav from "./MobileNav";

interface HeaderProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function Header({ locale, messages }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t(messages, "nav.home"), href: `/${locale}` },
    { label: t(messages, "nav.services"), href: `/${locale}/services` },
    { label: t(messages, "nav.portfolio"), href: `/${locale}/gallery` },
    { label: t(messages, "nav.contact"), href: `/${locale}/contact` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-n-950/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/logo.webp"
                  alt={siteConfig.company.name}
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: phones + license */}
            <div className="hidden lg:flex items-center gap-6">
              {siteConfig.company.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              ))}
              {siteConfig.company.license && (
                <span className="text-xs text-white/50 tracking-[0.25em]">
                  {siteConfig.company.license}
                </span>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        locale={locale}
      />
    </>
  );
}
