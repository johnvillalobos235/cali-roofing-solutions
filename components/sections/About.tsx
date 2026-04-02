import {
  CheckCircle,
  UserCheck,
  Shield,
  Camera,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import siteConfig from "@/site.config";
import { t, tArray } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  Shield,
  Camera,
  DollarSign,
  CheckCircle,
};

interface AboutProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function About({ locale, messages }: AboutProps) {
  const highlights = tArray(messages, "about.highlights");

  return (
    <section className="py-20">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <FadeIn>
            <div className="space-y-6">
              <SectionHeading
                kicker={t(messages, "about.kicker")}
                title={t(messages, "about.title")}
              />
              <p className="text-base text-n-600 leading-relaxed">
                {t(messages, "about.description")}
              </p>
              <Button href={`/${locale}/contact`}>
                {t(messages, "about.cta")}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.about.highlights.map((highlight, i) => {
                const IconComponent = iconMap[highlight.icon] || CheckCircle;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-n-50"
                  >
                    <IconComponent className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-n-600">
                      {highlights[i] || highlight.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
