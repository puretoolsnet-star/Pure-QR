import type { MetadataRoute } from "next";

import { LOCALES, TOOL_IDS } from "@/i18n/locales";
import { hreflangLanguageAlternates } from "@/lib/seo/alternates";
import { localizedPath } from "@/lib/i18n/routing";
import { absoluteUrl } from "@/lib/seo/site";

const STATIC_PATHS = ["/", ...TOOL_IDS.map((id) => `/tools/${id}`)] as const;

function sitemapEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  lastModified: Date,
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: absoluteUrl(localizedPath(locale, path)),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: hreflangLanguageAlternates(path),
    },
  }));
}

const CONTENT_UPDATED = new Date("2026-11-06T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_UPDATED;
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    const priority = path === "/" ? 1 : 0.85;
    const changeFrequency = path === "/" ? "weekly" : "monthly";
    entries.push(
      ...sitemapEntry(path, priority, changeFrequency, lastModified),
    );
  }

  return entries;
}
