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
    <section className="py-20 bg-n-950">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {siteConfig.stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm text-n-400 uppercase tracking-widest">
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
