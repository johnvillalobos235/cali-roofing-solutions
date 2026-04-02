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
    <footer className="bg-n-950 text-white border-t border-n-800/50">
      <div className="container-narrow py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div className="space-y-5">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.company.name}
              width={140}
              height={32}
              className="h-8 w-auto object-contain opacity-80"
            />
            <p className="text-sm text-n-500 max-w-xs leading-relaxed">
              {t(messages, "footer.description")}
            </p>
            {siteConfig.company.license && (
              <p className="text-[0.65rem] text-n-600 tracking-[0.3em] uppercase">
                {siteConfig.company.license}
              </p>
            )}
          </div>

          <div className="space-y-5">
            <h3 className="kicker text-n-500">
              {t(messages, "footer.quick_links")}
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-n-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="kicker text-n-500">
              {t(messages, "footer.contact_title")}
            </h3>
            <div className="space-y-3">
              {siteConfig.company.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-sm text-n-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-n-600" />
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

      <div className="border-t border-n-800/50">
        <div className="container-narrow py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] text-n-600">
            <p>
              &copy; {year} {siteConfig.company.name}. {t(messages, "footer.rights")}
            </p>
            <p className="tracking-[0.2em] uppercase">
              {t(messages, "footer.credentials")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
