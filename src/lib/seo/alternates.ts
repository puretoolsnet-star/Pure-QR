import type { Locale } from "@/i18n/locales";
import { LOCALES } from "@/i18n/locales";
import { localizedPath } from "@/lib/i18n/routing";
import {
  absoluteUrl,
  DEFAULT_LOCALE_SEO,
  HREFLANG_MAP,
} from "@/lib/seo/site";

/** Path without locale prefix, e.g. `/` or `/tools/generator`. */
export function hreflangLanguageAlternates(
  path: string,
): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    languages[HREFLANG_MAP[locale]] = absoluteUrl(localizedPath(locale, path));
  }

  languages["x-default"] = absoluteUrl(
    localizedPath(DEFAULT_LOCALE_SEO, path),
  );

  return languages;
}

export const HTML_LANG: Record<Locale, string> = {
  uk: "uk",
  en: "en",
  pl: "pl",
  de: "de",
  es: "es",
  fr: "fr",
};
