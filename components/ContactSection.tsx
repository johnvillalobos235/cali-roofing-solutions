"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceAreas = [
  "Los Angeles",
  "Irvine",
  "Corona",
  "Chino",
  "Anaheim",
  "Riverside",
  "Long Beach",
];

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-[36px] font-semibold leading-tight text-white md:text-[48px] text-center mb-12">
            {t("label")}
          </h2>
        </ScrollReveal>

        {/* Service Area Map - Full Width */}
        <ScrollReveal>
          <div className="relative w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-service-map-final-hq-1.png"
              alt="Service Area Map"
              width={1280}
              height={720}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </ScrollReveal>

        {/* Contact Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3"
              >
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-300" />
                  {area}
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+19517431437"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    (951) 743-1437
                  </a>
                  <a
                    href="mailto:caliroofingsolutions@gmail.com"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors truncate"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    caliroofingsolutions@gmail.com
                  </a>
                </div>
              </div>
            ))}

            {/* Business Hours Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-300" />
                {t("hours")}
              </h3>
              <div className="space-y-1.5 text-sm text-slate-300">
                <p>{t("monFri")}</p>
                <p>{t("sat")}</p>
                <p>{t("sun")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
