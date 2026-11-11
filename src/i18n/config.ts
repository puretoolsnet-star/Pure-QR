export const LOCALES = ["uk", "en", "pl", "de", "es", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "uk" satisfies Locale;

export const TOOL_CATEGORIES = [
  {
    id: "basics",
    toolIds: ["generator", "wifi", "vcard"],
  },
  {
    id: "business",
    toolIds: ["menu", "email", "sms", "phone", "location"],
  },
  {
    id: "social",
    toolIds: ["socials", "multi-link"],
  },
  {
    id: "content",
    toolIds: ["event", "pdf-qr", "app-store"],
  },
  {
    id: "pro",
    toolIds: ["logo-qr", "bulk-qr", "scanner", "pdf-print"],
  },
] as const;

export type ToolCategoryId = (typeof TOOL_CATEGORIES)[number]["id"];

/** Canonical PureQR tool set (order = home catalog, sitemap). */
export const TOOL_IDS = [
  "generator",
  "wifi",
  "vcard",
  "menu",
  "email",
  "sms",
  "phone",
  "location",
  "socials",
  "multi-link",
  "event",
  "pdf-qr",
  "app-store",
  "logo-qr",
  "bulk-qr",
  "scanner",
  "pdf-print",
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

export const BULK_EXPORT_TOOL_IDS = ["bulk-qr", "pdf-print"] as const;
