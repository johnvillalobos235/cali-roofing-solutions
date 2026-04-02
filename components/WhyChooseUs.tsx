"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    key: "feature1",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/aa-icon-3.png",
  },
  {
    key: "feature2",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/aa-icon-1.png",
  },
  {
    key: "feature3",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/aa-icon-2.png",
  },
  {
    key: "feature4",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/aa-icon-4.png",
  },
] as const;

export default function WhyChooseUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="section">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-2 text-center">
            {t("label")}
          </p>
          <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px] text-center mb-12">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.key} delay={i * 100}>
              <div className="text-center space-y-5">
                <div className="mx-auto relative h-20 w-20">
                  <Image
                    src={feature.icon}
                    alt={t(`${feature.key}.title`)}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
