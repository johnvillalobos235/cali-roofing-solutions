import siteConfig from "@/site.config";
import { t, tObject } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/shared/FadeIn";

interface ServicesGridProps {
  messages: Record<string, unknown>;
  showHeading?: boolean;
}

export default function ServicesGrid({
  messages,
  showHeading = true,
}: ServicesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-narrow">
        {showHeading && (
          <FadeIn>
            <div className="mb-12">
              <SectionHeading
                kicker={t(messages, "services.kicker")}
                title={t(messages, "services.title")}
                subtitle={t(messages, "services.subtitle")}
              />
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const serviceMessages = tObject(
              messages,
              `services.items.${service.id}`
            );
            const title =
              (serviceMessages.title as string) || service.title;
            const description =
              (serviceMessages.description as string) ||
              service.description;
            const features = Array.isArray(serviceMessages.features)
              ? (serviceMessages.features as string[])
              : service.features;

            return (
              <FadeIn key={service.id} delay={i * 100}>
                <ServiceCard
                  title={title}
                  description={description}
                  features={features}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
