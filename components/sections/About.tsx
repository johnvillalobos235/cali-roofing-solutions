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
  UserCheck, Shield, Camera, DollarSign, CheckCircle,
};

interface AboutProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function About({ locale, messages }: AboutProps) {
  const highlights = tArray(messages, "about.highlights");

  return (
    <section className="py-24 sm:py-32">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          <FadeIn>
            <div className="space-y-6">
              <SectionHeading
                kicker={t(messages, "about.kicker")}
                title={t(messages, "about.title")}
              />
              <p className="text-[0.95rem] text-n-500 leading-[1.75]">
                {t(messages, "about.description")}
              </p>
              <div className="pt-2">
                <Button href={`/${locale}/contact`}>
                  {t(messages, "about.cta")}
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.about.highlights.map((highlight, i) => {
                const IconComponent = iconMap[highlight.icon] || CheckCircle;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl border border-n-200/80 bg-n-50/50"
                  >
                    <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10 shrink-0">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-n-600 leading-snug pt-1.5">
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
