import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import siteConfig from "@/site.config";
import { t } from "@/i18n";
import LocaleSwitcher from "@/components/shared/LocaleSwitcher";

interface FooterProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function Footer({ locale, messages }: FooterProps) {
  const navLinks = [
    { label: t(messages, "nav.home"), href: `/${locale}` },
    { label: t(messages, "nav.services"), href: `/${locale}/services` },
    { label: t(messages, "nav.portfolio"), href: `/${locale}/gallery` },
    { label: t(messages, "nav.contact"), href: `/${locale}/contact` },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-n-950 text-white">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo + Description */}
          <div className="space-y-4">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.company.name}
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-n-400 max-w-xs leading-relaxed">
              {t(messages, "footer.description")}
            </p>
            {siteConfig.company.license && (
              <p className="text-xs text-n-400 tracking-[0.25em]">
                {siteConfig.company.license}
              </p>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-n-400">
              {t(messages, "footer.quick_links")}
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-n-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-n-400">
              {t(messages, "footer.contact_title")}
            </h3>
            <div className="space-y-3">
              {siteConfig.company.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-n-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-n-500" />
                  {phone}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <LocaleSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-n-800">
        <div className="container-narrow py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-n-400">
            <p>
              &copy; {year} {siteConfig.company.name}.{" "}
              {t(messages, "footer.rights")}
            </p>
            <p className="tracking-[0.25em]">
              {t(messages, "footer.credentials")}
              {siteConfig.company.license &&
                ` • ${siteConfig.company.license}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
