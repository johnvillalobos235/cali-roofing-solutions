import type { Metadata } from "next";
import { getMessages, t } from "@/i18n";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: t(messages, "services.title"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <>
      <Hero
        locale={locale}
        messages={messages}
        kicker={t(messages, "services.kicker")}
        title={t(messages, "services.title")}
        subtitle={t(messages, "services.subtitle")}
        image="/images/hero-services.webp"
        showCtas={false}
      />
      <ServicesGrid messages={messages} showHeading={false} />
      <CtaBanner locale={locale} messages={messages} />
    </>
  );
}
