import siteConfig from "@/site.config";
import { t } from "@/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FadeIn from "@/components/shared/FadeIn";

interface TestimonialsProps {
  messages: Record<string, unknown>;
}

export default function Testimonials({ messages }: TestimonialsProps) {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-narrow">
        <FadeIn>
          <div className="mb-14 text-center">
            <SectionHeading
              kicker={t(messages, "testimonials.kicker")}
              title={t(messages, "testimonials.title")}
              subtitle={t(messages, "testimonials.subtitle")}
              align="center"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {siteConfig.testimonials.items.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 120}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
