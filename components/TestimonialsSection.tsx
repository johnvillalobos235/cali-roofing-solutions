"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Cali+Roofing+Solutions/@33.8752758,-117.7364053,10z/data=!4m8!3m7!1s0x80dcb8440787a383:0x1898bbfb84bc99!8m2!3d33.8752758!4d-117.5664053!9m1!1b1";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(reviewScreenshots.length / perPage);

  const currentReviews = reviewScreenshots.slice(
    page * perPage,
    page * perPage + perPage
  );

  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((p) => (p + 1) % totalPages);

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

        {/* Google Review Screenshots - Paginated 2-up */}
        <ScrollReveal delay={200}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold text-slate-900">
                Google Reviews
              </span>
              <span className="text-sm text-slate-500">
                ({page + 1}/{totalPages})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextPage}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentReviews.map((src, i) => (
              <div
                key={page * perPage + i}
                className="rounded-2xl overflow-hidden shadow-sm bg-white border border-slate-100"
              >
                <Image
                  src={src}
                  alt={`Google Review ${page * perPage + i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* See All CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-10 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-700"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {t("seeAll")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
