"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ImageCarousel from "./ImageCarousel";

const portfolioImages = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roof-1-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0267-2-1-edited-4.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0266-2-min-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-3-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-4-1-edited.webp",
];

export default function PortfolioCarousel() {
  const t = useTranslations("portfolio");
  const locale = useLocale();

  return (
    <section className="section" id="portfolio">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-2">
                {t("label")}
              </p>
              <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px]">
                {t("title")}
              </h2>
              <p className="mt-2 text-slate-500">{t("subtitle")}</p>
            </div>
            <Link
              href={`/${locale}/gallery`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700 shrink-0"
            >
              {t("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <ImageCarousel
              images={portfolioImages}
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </ScrollReveal>

        {/* Mobile View All */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
