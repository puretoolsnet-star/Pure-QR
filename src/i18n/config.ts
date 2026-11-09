export const LOCALES = ["uk", "en", "pl", "de", "es", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "uk" satisfies Locale;

/** Canonical PureQR tool set (order = home grid, nav, sitemap). */
export const TOOL_IDS = [
  "generator",
  "wifi",
  "vcard",
  "scanner",
  "menu",
  "logo-qr",
] as const;

export const LOCALE_LABELS: Record<
  Locale,
  { code: string; native: string; flag: string }
> = {
  uk: { code: "UK", native: "Українська", flag: "🇺🇦" },
  en: { code: "EN", native: "English", flag: "🇬🇧" },
  pl: { code: "PL", native: "Polski", flag: "🇵🇱" },
  de: { code: "DE", native: "Deutsch", flag: "🇩🇪" },
  es: { code: "ES", native: "Español", flag: "🇪🇸" },
  fr: { code: "FR", native: "Français", flag: "🇫🇷" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
