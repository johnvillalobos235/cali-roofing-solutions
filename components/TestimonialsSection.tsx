"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const youtubeVideos = [
  { id: "oCsUdwIi9io", name: "Denise Sale", location: "Yorba Linda, CA" },
  { id: "mrajGoii7Lc", name: "Juan Ortega", location: "Monrovia, CA" },
  { id: "zrlxDmSq-Zo", name: "Calvin Jones", location: "Upland, CA" },
  { id: "h-As4H08ILk", name: "Elias", location: "Garden Grove, CA" },
];

const reviewScreenshots = [
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.54.09-am.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.54.30-am.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.54.51-am.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.55.09-am.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.55.25-am.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/screen-shot-2025-12-09-at-2.55.38-am.png",
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

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

        {/* Video Testimonials */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="space-y-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`Testimonial - ${video.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <p className="text-sm font-medium text-slate-900">
                  {video.name}{" "}
                  <span className="text-slate-400">· {video.location}</span>
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Google Review Screenshots */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviewScreenshots.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[5/2] rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Google Review ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* See All CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=cali+roofing+solutions+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700"
            >
              {t("seeAll")} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
