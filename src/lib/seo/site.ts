import type { Locale } from "@/i18n/locales";
import { DEFAULT_LOCALE } from "@/i18n/locales";

export const SITE_NAME = "PureQR";

export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return env.replace(/\/$/, "");
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const DEFAULT_LOCALE_SEO = DEFAULT_LOCALE;

/** BCP 47 codes emitted as rel=alternate hreflang. Ukrainian is `uk`. */
export const HREFLANG_MAP: Record<Locale, string> = {
  uk: "uk",
  en: "en",
  pl: "pl",
  de: "de",
  es: "es",
  fr: "fr",
};

export const OPEN_GRAPH_LOCALE: Record<Locale, string> = {
  uk: "uk_UA",
  en: "en_US",
  pl: "pl_PL",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
};

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
