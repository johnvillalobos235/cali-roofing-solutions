"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: nav("home") },
    { href: `/${locale}/services`, label: nav("services") },
    { href: `/${locale}/gallery`, label: nav("portfolio") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="https://i0.wp.com/caliroofingsolutions.com/wp-content/uploads/2025/12/aa-cali-roofing-new-logo.jpg"
                alt="Cali Roofing Solutions"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("description")}
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Licensed & Insured
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-4">
              {t("contactTitle")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19517431437"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (951) 743-1437
                </a>
              </li>
              <li>
                <a
                  href="mailto:caliroofingsolutions@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  caliroofingsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-xs text-slate-500">{t("copyright")}</p>
            <p className="text-xs text-slate-500">{t("tagline")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
