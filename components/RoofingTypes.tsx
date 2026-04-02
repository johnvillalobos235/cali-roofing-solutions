"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const types = [
  {
    key: "reshingle",
    image:
      "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-edited.png",
  },
  {
    key: "flat",
    image:
      "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-2.png",
  },
  {
    key: "tile",
    image:
      "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-3-edited.png",
  },
  {
    key: "cool",
    image:
      "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-gradient-4-edited.png",
  },
] as const;

export default function RoofingTypes() {
  const t = useTranslations("types");

  return (
    <section className="section bg-slate-50">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-2 text-center">
            {t("label")}
          </p>
          <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px] text-center mb-12">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, i) => (
            <ScrollReveal key={type.key} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={type.image}
                    alt={t(`${type.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-900 mb-1">
                    {t(`${type.key}.name`)}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t(`${type.key}.description`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
