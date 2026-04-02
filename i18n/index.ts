import siteConfig from "@/site.config";

export type Locale = string;

export const defaultLocale = siteConfig.i18n.defaultLocale;
export const locales = siteConfig.i18n.locales;

type Messages = Record<string, unknown>;

const messageCache: Record<string, Messages> = {};

export async function getMessages(locale: string): Promise<Messages> {
  if (messageCache[locale]) return messageCache[locale];

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    messageCache[locale] = messages;
    return messages;
  } catch {
    const fallback = (
      await import(`./messages/${defaultLocale}.json`)
    ).default;
    messageCache[locale] = fallback;
    return fallback;
  }
}

export function t(messages: Messages, key: string): string {
  const keys = key.split(".");
  let current: unknown = messages;

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof current === "string" ? current : key;
}

export function tArray(messages: Messages, key: string): string[] {
  const keys = key.split(".");
  let current: unknown = messages;

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return [];
    }
  }

  return Array.isArray(current) ? (current as string[]) : [];
}

export function tObject(
  messages: Messages,
  key: string
): Record<string, unknown> {
  const keys = key.split(".");
  let current: unknown = messages;

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return {};
    }
  }

  return typeof current === "object" && current !== null
    ? (current as Record<string, unknown>)
    : {};
}
