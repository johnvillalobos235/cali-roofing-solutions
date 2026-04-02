import {
  Award,
  Eye,
  Heart,
  Clock,
  Star,
  type LucideIcon,
} from "lucide-react";
import siteConfig from "@/site.config";
import { t, tObject } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Eye,
  Heart,
  Clock,
  Star,
};

interface WhyChooseUsProps {
  locale: string;
  messages: Record<string, unknown>;
}

export default function WhyChooseUs({ locale, messages }: WhyChooseUsProps) {
  const pillarKeys = ["quality", "transparency", "integrity", "experience"];

  return (
    <section className="py-20">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <SectionHeading
                kicker={t(messages, "whyUs.kicker")}
                title={t(messages, "whyUs.title")}
              />
              <p className="text-base text-n-600 leading-relaxed">
                {t(messages, "whyUs.description")}
              </p>
              <Button href={`/${locale}/contact`}>
                {t(messages, "whyUs.cta")}
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.whyChooseUs.pillars.map((pillar, i) => {
              const pillarMessages = tObject(
                messages,
                `whyUs.pillars.${pillarKeys[i] || pillar.title.toLowerCase()}`
              );
              const IconComponent = iconMap[pillar.icon] || Star;

              return (
                <FadeIn key={i} delay={i * 100}>
                  <div className="space-y-3 p-5 rounded-2xl bg-n-50">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <h3 className="text-base font-semibold text-n-900">
                      {(pillarMessages.title as string) || pillar.title}
                    </h3>
                    <p className="text-sm text-n-600 leading-relaxed">
                      {(pillarMessages.description as string) ||
                        pillar.description}
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
