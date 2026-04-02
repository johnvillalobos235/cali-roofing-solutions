"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const certifications = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-icon-1.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-icon-2.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-icon-3.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-icon-4.webp",
];

export default function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    { value: "500+", label: t("projects") },
    { value: "400+", label: t("clients") },
    { value: "20+", label: t("years") },
    { value: "5/5", label: t("rating") },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        {/* Stats Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {certifications.map((cert, i) => (
              <div key={i} className="relative h-20 w-40">
                <Image
                  src={cert}
                  alt={`Certification ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            ))}
            {/* Google Review Badge */}
            <div className="flex items-center gap-3 rounded-full bg-slate-50 px-6 py-3 border border-slate-200 shadow-sm">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-sm font-semibold text-slate-700">
                5/5 · 100+ Reviews
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
