"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import ContactForm from "@/components/ContactForm";
import ImageCarousel from "@/components/ImageCarousel";
import ScrollReveal from "@/components/ScrollReveal";

const serviceAreas = [
  "Orange County",
  "Los Angeles",
  "Inland Empire",
  "Riverside",
  "San Bernardino",
  "Long Beach",
];

const carouselImages = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roof-1-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0267-2-1-edited-4.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-7-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02995-1-edited-1.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/photos19-1-edited-3.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02964-1-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02948-1-edited-3.jpg",
];

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <SubpageHero title={t("title")} subtitle={t("subtitle")} />
      <section className="section">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            {/* Phone Card */}
            <ScrollReveal>
              <div className="rounded-2xl bg-slate-50 px-6 py-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-500" />
                  {t("phone")}
                </h3>
                <a
                  href="tel:+19517431437"
                  className="block text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  (951) 743-1437
                </a>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl bg-slate-50 px-6 py-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  {t("email")}
                </h3>
                <a
                  href="mailto:caliroofingsolutions@gmail.com"
                  className="block text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  caliroofingsolutions@gmail.com
                </a>
              </div>
            </ScrollReveal>

            {/* Hours Card */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl bg-slate-50 px-6 py-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  {t("hours")}
                </h3>
                <div className="space-y-1 text-sm text-slate-600">
                  <p>{t("monFri")}</p>
                  <p>{t("sat")}</p>
                  <p>{t("sun")}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service Areas Card */}
            <ScrollReveal delay={300}>
              <div className="rounded-2xl bg-slate-50 px-6 py-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {t("serviceAreas")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={400}>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Right Column - Sticky Carousel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal delay={200}>
              <ImageCarousel images={carouselImages} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
