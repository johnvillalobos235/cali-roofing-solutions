import { t } from "@/i18n";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface CtaBannerProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function CtaBanner({ locale, messages }: CtaBannerProps) {
  return (
    <section className="py-24 sm:py-28 bg-n-950 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container-narrow text-center relative z-10">
        <FadeIn>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.1]">
              {t(messages, "cta_banner.headline")}
            </h2>
            <p className="text-[0.95rem] text-n-400 leading-relaxed">
              {t(messages, "cta_banner.description")}
            </p>
            <div className="pt-2">
              <Button href={`/${locale}/contact`} size="lg">
                {t(messages, "cta_banner.button")}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
