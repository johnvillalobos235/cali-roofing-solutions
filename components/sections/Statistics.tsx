import siteConfig from "@/site.config";
import { t } from "@/i18n";
import FadeIn from "@/components/shared/FadeIn";

interface StatisticsProps {
  messages: Record<string, unknown>;
}

export default function Statistics({ messages }: StatisticsProps) {
  const statLabels = [
    t(messages, "stats.projects"),
    t(messages, "stats.clients"),
    t(messages, "stats.years"),
  ];

  return (
    <section className="py-24 sm:py-28 bg-n-950">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 text-center">
          {siteConfig.stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="space-y-3">
                <p className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="kicker text-n-500">
                  {statLabels[i] || stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
