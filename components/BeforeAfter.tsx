"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const images = [
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-2.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-3.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aaa-before-roofing-logo.png",
];

export default function BeforeAfter() {
  return (
    <section className="section">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(0, 2).map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Before and after project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={images[2]}
              alt="Before and after project 3"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
