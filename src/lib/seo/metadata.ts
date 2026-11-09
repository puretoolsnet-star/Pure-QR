import type { Metadata } from "next";

import type { Locale, ToolId } from "@/i18n/locales";
import { LOCALES } from "@/i18n/locales";
import { getSeoCopy, type SeoPageId } from "@/i18n/seo/copy";
import { hreflangLanguageAlternates } from "@/lib/seo/alternates";
import { localizedPath } from "@/lib/i18n/routing";
import {
  absoluteUrl,
  OPEN_GRAPH_LOCALE,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/seo/site";

function pathForPage(page: SeoPageId): string {
  if (page === "home") return "/";
  return `/tools/${page}`;
}

export function buildPageMetadata(page: SeoPageId, locale: Locale): Metadata {
  const copy = getSeoCopy(page, locale);
  const path = pathForPage(page);
  const canonical = absoluteUrl(localizedPath(locale, path));
  const ogImage = absoluteUrl(`/og/${locale}/${page}`);

  const imageAlt = copy.title;

  return {
    title: { absolute: copy.title },
    description: copy.description,
    keywords: copy.keywords,
    alternates: {
      canonical,
      languages: hreflangLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: copy.title,
      description: copy.description,
      siteName: SITE_NAME,
      locale: OPEN_GRAPH_LOCALE[locale],
      alternateLocale: LOCALES.filter((item) => item !== locale).map(
        (item) => OPEN_GRAPH_LOCALE[item],
      ),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: ogImage,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildToolMetadata(toolId: ToolId, locale: Locale): Metadata {
  return buildPageMetadata(toolId, locale);
}

export function buildHomeMetadata(locale: Locale): Metadata {
  return buildPageMetadata("home", locale);
}

export function siteMetadataBase(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: SITE_NAME,
    creator: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
