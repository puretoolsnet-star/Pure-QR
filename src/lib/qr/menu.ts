export type MenuTemplateId = "custom" | "cafe" | "restaurant" | "catalog";

export type MenuTemplatePreset = {
  sampleUrl: string;
  fgColor: string;
  bgColor: string;
};

export const MENU_TEMPLATE_PRESETS: Record<MenuTemplateId, MenuTemplatePreset> =
  {
    custom: {
      sampleUrl: "https://example.com/menu",
      fgColor: "#042f2e",
      bgColor: "#ffffff",
    },
    cafe: {
      sampleUrl: "https://example.com/cafe-menu",
      fgColor: "#78350f",
      bgColor: "#fffbeb",
    },
    restaurant: {
      sampleUrl: "https://example.com/restaurant-menu",
      fgColor: "#1e3a8a",
      bgColor: "#f8fafc",
    },
    catalog: {
      sampleUrl: "https://example.com/price-list",
      fgColor: "#134e4a",
      bgColor: "#ffffff",
    },
  };

export function normalizeMenuUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  try {
    if (/^https?:\/\//i.test(trimmed)) {
      return new URL(trimmed).href;
    }
    return new URL(`https://${trimmed}`).href;
  } catch {
    return null;
  }
}
