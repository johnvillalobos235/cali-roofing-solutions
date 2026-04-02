import Image from "next/image";
import siteConfig from "@/site.config";
import { t } from "@/i18n";
import Button from "@/components/ui/Button";
import GradientOverlay from "@/components/ui/GradientOverlay";
import VideoEmbed from "@/components/ui/VideoEmbed";

interface HeroProps {
  locale: string;
  messages: Record<string, unknown>;
  kicker?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  showCtas?: boolean;
}

export default function Hero({
  locale,
  messages,
  kicker,
  title,
  subtitle,
  image,
  showCtas = true,
}: HeroProps) {
  const heroTitle = title || t(messages, "hero.headline");
  const heroSubtitle = subtitle || t(messages, "hero.subheadline");
  const heroKicker = kicker || t(messages, "hero.region");
  const heroImage = image || siteConfig.hero.image;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      {siteConfig.hero.backgroundType === "video" && siteConfig.hero.video ? (
        <VideoEmbed
          video={siteConfig.hero.video}
          background
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        heroImage && (
          <Image
            src={heroImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )
      )}

      <GradientOverlay />

      {/* Content */}
      <div className="relative z-10 container-narrow py-32">
        <div className="max-w-2xl space-y-6">
          <p className="kicker text-white/70">{heroKicker}</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
            {heroTitle}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-lg">
            {heroSubtitle}
          </p>
          {showCtas && (
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                href={`/${locale}/contact`}
                variant="primary"
                size="lg"
              >
                {t(messages, "hero.cta_primary")}
              </Button>
              <Button
                href={`/${locale}/gallery`}
                variant="secondary"
                size="lg"
              >
                {t(messages, "hero.cta_secondary")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
