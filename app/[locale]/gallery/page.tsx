import type { Metadata } from "next";
import Image from "next/image";
import { getMessages, t } from "@/i18n";
import siteConfig from "@/site.config";
import Hero from "@/components/sections/Hero";
import FadeIn from "@/components/shared/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: t(messages, "portfolio.title"),
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <>
      <Hero
        locale={locale}
        messages={messages}
        kicker={t(messages, "portfolio.kicker")}
        title={t(messages, "portfolio.title")}
        subtitle={t(messages, "portfolio.subtitle")}
        image="/images/hero-gallery.webp"
        showCtas={false}
        compact
      />
      <section className="py-24 sm:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.portfolio.images.map((img, i) => (
              <FadeIn key={i} delay={(i % 3) * 100}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
