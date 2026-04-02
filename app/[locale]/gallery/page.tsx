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
];

export default function GalleryPage() {
  const t = useTranslations("portfolio");

  return (
    <>
      <SubpageHero title={t("pageTitle")} subtitle={t("pageSubtitle")} />
      <section className="section">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 50}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={src}
                    alt={`Roofing project ${i + 1}`}
                    fill
                    className="object-cover"
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
