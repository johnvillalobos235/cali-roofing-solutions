import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inter } from "@/lib/fonts";
import { getMessages, locales } from "@/i18n";
import siteConfig from "@/site.config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: siteConfig.company.name,
      template: siteConfig.seo.titleTemplate,
    },
    description: siteConfig.seo.defaultDescription,
    metadataBase: new URL(siteConfig.seo.canonical),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`])
      ),
    },
    openGraph: {
      title: siteConfig.company.name,
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.seo.canonical,
      siteName: siteConfig.company.name,
      locale: locale,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header locale={locale} messages={messages} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} messages={messages} />
      </body>
    </html>
  );
}
