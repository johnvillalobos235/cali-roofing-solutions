"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import SubpageHero from "@/components/SubpageHero";
import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roof-1-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0267-2-1-edited-4.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-7-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/dji_0266-2-min-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-3-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/10/cali-roofing-4-1-edited.webp",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02995-1-edited-1.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/photos19-1-edited-3.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02964-1-edited.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/a7s02948-1-edited-3.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/photos5-1-edited-2.jpg",
  "https://caliroofing.wordpress.com/wp-content/uploads/2025/11/aa-resized-1-1-edited.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-edited.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-2.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-tile-close-up-gradient-3-edited.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-2.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aa-before-3.png",
  "https://caliroofingsolutions.com/wp-content/uploads/2025/12/aaa-before-roofing-logo.png",
];

export default function GalleryPage() {
  const t = useTranslations("portfolio");

  return (
    <>
      <SubpageHero title={t("pageTitle")} subtitle={t("pageSubtitle")} />
      <section className="section">
        <div className="container-narrow">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 50}>
                <div className="group relative w-full overflow-hidden rounded-2xl bg-slate-100 block break-inside-avoid">
                  <Image
                    src={src}
                    alt={`Roofing project ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
