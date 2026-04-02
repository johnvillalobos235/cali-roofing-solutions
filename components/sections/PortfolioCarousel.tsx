"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteConfig from "@/site.config";
import { t } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";

interface PortfolioCarouselProps {
  messages: Record<string, unknown>;
}

export default function PortfolioCarousel({ messages }: PortfolioCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const initializedRef = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    if (!initializedRef.current) {
      initializedRef.current = true;
      requestAnimationFrame(() => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const images = siteConfig.portfolio.images;

  const ArrowButton = ({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="h-10 w-10 rounded-full border border-n-800 text-n-400 hover:bg-white hover:text-n-900 hover:border-white transition-all duration-200 flex items-center justify-center"
      aria-label={label}
    >
      {children}
    </button>
  );

  return (
    <section className="py-24 sm:py-28 bg-n-950">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker={t(messages, "portfolio.kicker")}
            title={t(messages, "portfolio.title")}
            subtitle={t(messages, "portfolio.subtitle")}
            dark
          />
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm text-n-500 tabular-nums font-mono">
              {String(selectedIndex + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <ArrowButton onClick={scrollPrev} label="Previous slide">
                <ChevronLeft className="h-4 w-4" />
              </ArrowButton>
              <ArrowButton onClick={scrollNext} label="Next slide">
                <ChevronRight className="h-4 w-4" />
              </ArrowButton>
            </div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {images.map((img, i) => (
              <div key={i} className="flex-none w-[82%] sm:w-[44%] lg:w-[32%]">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 32vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
