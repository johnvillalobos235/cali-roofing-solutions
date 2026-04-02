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
          <div className="space-y-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Before and after project ${i + 1}`}
                  width={1280}
                  height={i === 2 ? 720 : 427}
                  className="w-full h-auto"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
