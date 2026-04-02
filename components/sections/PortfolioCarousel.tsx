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

export default function PortfolioCarousel({
  messages,
}: PortfolioCarouselProps) {
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
      // Read initial index without triggering a state update in the effect
      requestAnimationFrame(() => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const images = siteConfig.portfolio.images;

  return (
    <section className="py-20 bg-n-50">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading
            kicker={t(messages, "portfolio.kicker")}
            title={t(messages, "portfolio.title")}
            subtitle={t(messages, "portfolio.subtitle")}
          />
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-sm text-n-500 tabular-nums">
              {selectedIndex + 1}/{images.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full border border-n-800 text-n-600 hover:bg-n-900 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 rounded-full border border-n-800 text-n-600 hover:bg-n-900 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[30%]"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full border border-n-800 text-n-600 hover:bg-n-900 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-n-500 tabular-nums">
            {selectedIndex + 1}/{images.length}
          </span>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full border border-n-800 text-n-600 hover:bg-n-900 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
