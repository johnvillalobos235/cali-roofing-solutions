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
  compact?: boolean;
}

export default function Hero({
  locale,
  messages,
  kicker,
  title,
  subtitle,
  image,
  showCtas = true,
  compact = false,
}: HeroProps) {
  const heroTitle = title || t(messages, "hero.headline");
  const heroSubtitle = subtitle || t(messages, "hero.subheadline");
  const heroKicker = kicker || t(messages, "hero.region");
  const heroImage = image || siteConfig.hero.image;

  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        compact ? "min-h-[55vh]" : "min-h-[100svh]"
      }`}
    >
      {!compact && siteConfig.hero.backgroundType === "video" && siteConfig.hero.video ? (
        <VideoEmbed
          video={siteConfig.hero.video}
          background
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )
      )}

      <GradientOverlay />

      <div className="relative z-10 container-narrow w-full pb-24 pt-52 sm:pb-32">
        <div className="max-w-2xl space-y-6">
          <p className="kicker text-primary">{heroKicker}</p>
          <h1
            className={`font-bold tracking-tight text-white ${
              compact
                ? "text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
                : "text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] leading-[1.05]"
            }`}
          >
            {heroTitle}
          </h1>
          <p className="text-[1.05rem] text-n-400 leading-relaxed max-w-lg">
            {heroSubtitle}
          </p>
          {showCtas && (
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={`/${locale}/contact`} variant="primary" size="lg">
                {t(messages, "hero.cta_primary")}
              </Button>
              <Button href={`/${locale}/gallery`} variant="secondary" size="lg">
                {t(messages, "hero.cta_secondary")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
