"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3"), t("bullet4")];

  return (
    <section className="section">
      <div className="container-narrow grid gap-14 md:grid-cols-2 md:items-center">
        {/* Left Column */}
        <ScrollReveal>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              {t("label")}
            </p>
            <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px]">
              {t("title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">{t("description")}</p>
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.roofr.com/instant-estimator/09a432b4-f154-4013-8baa-893cf71f5d8c/CaliRoofingSolutions/welcome-question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>

        {/* Right Column */}
        <ScrollReveal delay={200}>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-meet-jerry-hd.png"
              alt="Jerry - Owner of Cali Roofing Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
