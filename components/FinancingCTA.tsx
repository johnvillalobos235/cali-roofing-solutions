"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinancingCTA() {
  const t = useTranslations("financing");

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                {t("label")}
              </p>
              <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px]">
                {t("title")}
              </h2>
              <p className="text-lg font-semibold text-slate-800">
                {t("subtitle")}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t("description")}
              </p>
              <a
                href="tel:+19517431437"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700"
              >
                <Phone className="h-4 w-4" />
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative aspect-[6/5] max-w-sm mx-auto">
              <Image
                src="https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-payment-opt-2.png"
                alt="Financing Options"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
