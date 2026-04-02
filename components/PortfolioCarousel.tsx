"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const portfolioImages = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roof-1-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0267-2-1-edited-4.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-7-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0266-2-min-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-3-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-4-1-edited.webp",
];

export default function PortfolioCarousel() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="section" id="portfolio">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-2">
                {t("label")}
              </p>
              <h2 className="text-[36px] font-semibold leading-tight text-slate-900 md:text-[48px]">
                {t("title")}
              </h2>
              <p className="mt-2 text-slate-500">{t("subtitle")}</p>
            </div>
            <Link
              href={`/${locale}/gallery`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700 shrink-0"
            >
              {t("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="relative px-4">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex items-center gap-4 overflow-x-auto no-scrollbar select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {portfolioImages.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[420px] h-[300px] overflow-hidden rounded-3xl transition-all duration-500 ease-out"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover pointer-events-none"
                sizes="420px"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <div className="container-narrow flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <Link
            href={`/${locale}/gallery`}
            className="md:hidden inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
