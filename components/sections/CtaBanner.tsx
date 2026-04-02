import { t } from "@/i18n";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface CtaBannerProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function CtaBanner({ locale, messages }: CtaBannerProps) {
  return (
    <section className="py-20 bg-n-950">
      <div className="container-narrow text-center">
        <FadeIn>
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t(messages, "cta_banner.headline")}
            </h2>
            <p className="text-base text-n-400 leading-relaxed">
              {t(messages, "cta_banner.description")}
            </p>
            <Button href={`/${locale}/contact`} size="lg">
              {t(messages, "cta_banner.button")}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
