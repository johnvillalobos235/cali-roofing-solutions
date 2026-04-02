import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react";
import { getMessages, t } from "@/i18n";
import siteConfig from "@/site.config";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import FadeIn from "@/components/shared/FadeIn";
import Card from "@/components/ui/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: t(messages, "contact.title"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  const contactCards = [
    {
      icon: Phone,
      label: t(messages, "contact.info.phone_label"),
      items: siteConfig.company.phone,
      isLink: true,
      linkPrefix: "tel:",
    },
    {
      icon: Mail,
      label: t(messages, "contact.info.email_label"),
      items: [siteConfig.company.email],
      isLink: true,
      linkPrefix: "mailto:",
    },
    {
      icon: MapPin,
      label: t(messages, "contact.info.areas_label"),
      items: siteConfig.company.serviceAreas,
      isLink: false,
    },
    ...(siteConfig.company.businessHours
      ? [
          {
            icon: Clock,
            label: t(messages, "contact.info.hours_label"),
            items: [siteConfig.company.businessHours],
            isLink: false,
          },
        ]
      : []),
    ...(siteConfig.company.license
      ? [
          {
            icon: Award,
            label: t(messages, "contact.info.license_label"),
            items: [siteConfig.company.license],
            isLink: false,
          },
        ]
      : []),
  ];

  return (
    <>
      <Hero
        locale={locale}
        messages={messages}
        kicker={t(messages, "contact.kicker")}
        title={t(messages, "contact.title")}
        subtitle={t(messages, "contact.subtitle")}
        image="/images/hero-contact.webp"
        showCtas={false}
        compact
      />
      <section className="py-24 sm:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <card.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-n-600 mb-2">
                          {card.label}
                        </p>
                        <div className="space-y-1">
                          {card.items.map((item, j) =>
                            card.isLink ? (
                              <a
                                key={j}
                                href={`${card.linkPrefix}${card.linkPrefix === "tel:" ? item.replace(/\D/g, "") : item}`}
                                className="block text-sm text-n-600 hover:text-primary transition-colors"
                              >
                                {item}
                              </a>
                            ) : (
                              <p key={j} className="text-sm text-n-600">
                                {item}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>

            {/* Contact Form */}
            <ContactForm locale={locale} messages={messages} />
          </div>
        </div>
      </section>
    </>
  );
}
