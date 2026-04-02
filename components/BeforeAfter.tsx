"use client";

import ScrollReveal from "./ScrollReveal";
import ImageCarousel from "./ImageCarousel";

const images = [
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-2.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-3.png",
];

export default function BeforeAfter() {
  return (
    <section className="section">
      <div className="container-narrow">
        <ScrollReveal>
          <ImageCarousel images={images} autoPlay={false} />
        </ScrollReveal>
      </div>
    </section>
  );
}
