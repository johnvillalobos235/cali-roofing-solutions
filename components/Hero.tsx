"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate h-[100svh] w-full overflow-hidden bg-slate-950"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-hero-dark.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-hero-dark.png" type="video/mp4" />
      </video>

      {/* Hero Background Image Fallback */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-hero-dark.png)",
        }}
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-start px-6 pb-16 text-left md:px-14 lg:px-20">
        <div className="max-w-2xl">
          <h1 className="flex flex-col leading-none drop-shadow-[0_8px_24px_rgba(15,23,42,0.7)]">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.35em] text-white/50 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {t("subtitle")}
            </span>
            <span
              className={`mt-3 text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-[82px] transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {t("line1")}
            </span>
            <span
              className={`text-5xl font-black tracking-tighter text-white/75 sm:text-7xl md:text-[82px] transition-all duration-700 delay-[400ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {t("line2")}
            </span>
          </h1>
          <p
            className={`mt-6 max-w-md text-sm text-white/60 leading-relaxed transition-all duration-700 delay-[600ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {t("description")}
          </p>
          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-[800ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg backdrop-blur hover:bg-zinc-100 transition-colors"
            >
              {t("getQuote")}
            </Link>
            <Link
              href={`/${locale}/gallery`}
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur border border-white/20 hover:bg-white/20 transition-colors"
            >
              {t("viewWork")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
