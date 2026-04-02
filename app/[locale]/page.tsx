import { getMessages } from "@/i18n";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioCarousel from "@/components/sections/PortfolioCarousel";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages} />
      <About locale={locale} messages={messages} />
      <ServicesGrid messages={messages} />
      <PortfolioCarousel messages={messages} />
      <Statistics messages={messages} />
      <WhyChooseUs locale={locale} messages={messages} />
      <Testimonials messages={messages} />
      <CtaBanner locale={locale} messages={messages} />
      <ContactForm messages={messages} />
    </>
  );
}
