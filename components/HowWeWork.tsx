"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    key: "step1",
    num: "1",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/image.png",
  },
  {
    key: "step2",
    num: "2",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/image-1.png",
  },
  {
    key: "step3",
    num: "3",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/image-2.png",
  },
  {
    key: "step4",
    num: "4",
    icon: "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/image-3.png",
  },
] as const;

export default function HowWeWork() {
  const t = useTranslations("process");

  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 mb-2 text-center">
            {t("label")}
          </p>
          <h2 className="text-[36px] font-semibold leading-tight text-white md:text-[48px] text-center mb-12">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.key} delay={i * 150}>
              <div className="text-center space-y-4">
                <div className="mx-auto relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-white/10">
                  <Image
                    src={step.icon}
                    alt={t(`${step.key}.title`)}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-slate-900 text-sm font-bold shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t(`${step.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
