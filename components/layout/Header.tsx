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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-n-950/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="relative h-8 w-auto shrink-0">
              <Image
                src="/images/logo.webp"
                alt={siteConfig.company.name}
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8rem] font-medium tracking-wide uppercase text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              {siteConfig.company.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {phone}
                </a>
              ))}
              {siteConfig.company.license && (
                <span className="text-[0.65rem] text-white/30 tracking-[0.3em] uppercase">
                  {siteConfig.company.license}
                </span>
              )}
            </div>

            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-white/80" />
              <span className="block w-5 h-[1.5px] bg-white/80" />
              <span className="block w-3.5 h-[1.5px] bg-white/80" />
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
