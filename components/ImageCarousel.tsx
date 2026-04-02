"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  aspectRatio?: string;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 4000,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [playing, interval, next]);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
      {/* Images */}
      <div className={`relative ${aspectRatio}`}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Project ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
      </div>

      {/* Counter Badge */}
      <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs font-medium text-white">
        {current + 1} / {images.length}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-slate-900"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause */}
        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
