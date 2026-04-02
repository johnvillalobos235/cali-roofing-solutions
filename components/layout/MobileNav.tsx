"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import siteConfig from "@/site.config";
import LocaleSwitcher from "@/components/shared/LocaleSwitcher";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  locale: string;
}

export default function MobileNav({
  open,
  onClose,
  navLinks,
  locale,
}: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-n-950 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-lg text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone numbers */}
          <div className="mt-auto space-y-4 pb-8">
            {siteConfig.company.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm text-n-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {phone}
              </a>
            ))}
            {siteConfig.company.license && (
              <p className="text-xs text-n-400 tracking-[0.25em]">
                {siteConfig.company.license}
              </p>
            )}
            <div className="pt-4 border-t border-n-800">
              <LocaleSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
