"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Wrench,
  RotateCcw,
  Hammer,
  Settings,
  Home,
  Building2,
  AlertTriangle,
  Search,
  ChevronDown,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import ScrollReveal from "./ScrollReveal";

const serviceKeys = [
  "repair",
  "replacement",
  "installation",
  "maintenance",
  "residential",
  "commercial",
  "emergency",
  "inspection",
] as const;

const serviceIcons = {
  repair: Wrench,
  replacement: RotateCcw,
  installation: Hammer,
  maintenance: Settings,
  residential: Home,
  commercial: Building2,
  emergency: AlertTriangle,
  inspection: Search,
};

const carouselImages = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02995-1-edited-1.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/photos19-1-edited-3.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02964-1-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02948-1-edited-3.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/photos5-1-edited-2.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/aa-resized-1-1-edited.png",
];

export default function ServicesAccordion() {
  const t = useTranslations("services");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="services">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Accordion */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-2">
                {t("label")}
              </p>
              <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px] mb-8">
                {t("title")}
              </h2>
            </ScrollReveal>
            <div className="space-y-1">
              {serviceKeys.map((key, i) => {
                const Icon = serviceIcons[key];
                const isOpen = openIndex === i;
                return (
                  <div
                    key={key}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center gap-4 py-4 text-left group"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-base font-semibold text-slate-900">
                        {t(`${key}.name`)}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-60 pb-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-slate-600 mb-3 pl-14">
                        {t(`${key}.description`)}
                      </p>
                      <ul className="space-y-1.5 pl-14">
                        {(
                          t.raw(`${key}.bullets`) as string[]
                        ).map((bullet: string, j: number) => (
                          <li
                            key={j}
                            className="text-sm text-slate-500 flex items-center gap-2"
                          >
                            <span className="h-1 w-1 rounded-full bg-slate-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Sticky Carousel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal delay={200}>
              <ImageCarousel images={carouselImages} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
