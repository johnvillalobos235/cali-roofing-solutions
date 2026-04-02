import {
  Award, Eye, Heart, Clock, Star, type LucideIcon,
} from "lucide-react";
import siteConfig from "@/site.config";
import { t, tObject } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

const iconMap: Record<string, LucideIcon> = { Award, Eye, Heart, Clock, Star };

interface WhyChooseUsProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function WhyChooseUs({ locale, messages }: WhyChooseUsProps) {
  const pillarKeys = ["quality", "transparency", "integrity", "experience"];

  return (
    <section className="py-24 sm:py-28 bg-n-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          <FadeIn>
            <div className="space-y-6 lg:sticky lg:top-32">
              <SectionHeading
                kicker={t(messages, "whyUs.kicker")}
                title={t(messages, "whyUs.title")}
              />
              <p className="text-[0.95rem] text-n-500 leading-[1.75]">
                {t(messages, "whyUs.description")}
              </p>
              <div className="pt-2">
                <Button href={`/${locale}/contact`}>
                  {t(messages, "whyUs.cta")}
                </Button>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.whyChooseUs.pillars.map((pillar, i) => {
              const pillarMessages = tObject(
                messages,
                `whyUs.pillars.${pillarKeys[i] || pillar.title.toLowerCase()}`
              );
              const IconComponent = iconMap[pillar.icon] || Star;

              return (
                <FadeIn key={i} delay={i * 100}>
                  <div className="space-y-3 p-6 rounded-xl bg-white border border-n-200/80">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-n-900">
                      {(pillarMessages.title as string) || pillar.title}
                    </h3>
                    <p className="text-sm text-n-500 leading-relaxed">
                      {(pillarMessages.description as string) || pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
