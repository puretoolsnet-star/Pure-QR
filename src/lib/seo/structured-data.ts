import type { Locale, ToolId } from "@/i18n/locales";
import { TOOL_IDS } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { getSeoCopy, type SeoPageId } from "@/i18n/seo/copy";
import { localizedPath } from "@/lib/i18n/routing";
import {
  CANONICAL_SITE_ORIGIN,
  HREFLANG_MAP,
  SITE_NAME,
  canonicalAbsoluteUrl,
} from "@/lib/seo/site";

export function siteOrganizationJsonLd(locale: Locale) {
  const siteUrl = CANONICAL_SITE_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: Object.values(HREFLANG_MAP),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
    },
    mainEntityOfPage: canonicalAbsoluteUrl(localizedPath(locale, "/")),
  };
}

export function homeToolsItemListJsonLd(locale: Locale) {
  const dictionary = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dictionary.nav.tools,
    numberOfItems: TOOL_IDS.length,
    itemListElement: TOOL_IDS.map((id, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: dictionary.tools[id].title,
      url: canonicalAbsoluteUrl(localizedPath(locale, `/tools/${id}`)),
    })),
  };
}

export function softwareApplicationJsonLd(locale: Locale) {
  const d = getDictionary(locale);
  const url = canonicalAbsoluteUrl(localizedPath(locale, "/"));
  const siteUrl = CANONICAL_SITE_ORIGIN;

  const featureList = TOOL_IDS.map((id) => d.tools[id].title);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: SITE_NAME,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "QR code generator and scanner",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description: getSeoCopy("home", locale).description,
    url,
    inLanguage: HREFLANG_MAP[locale],
    isAccessibleForFree: true,
    featureList,
  };
}

function pagePath(page: SeoPageId): string {
  if (page === "home") return "/";
  return `/tools/${page}`;
}

export function webPageJsonLd(page: SeoPageId, locale: Locale) {
  const copy = getSeoCopy(page, locale);
  const url = canonicalAbsoluteUrl(localizedPath(locale, pagePath(page)));
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    description: copy.description,
    url,
    inLanguage: HREFLANG_MAP[locale],
    isPartOf: { "@id": `${CANONICAL_SITE_ORIGIN}/#website` },
  };
}

export function breadcrumbJsonLd(toolId: ToolId, locale: Locale) {
  const dictionary = getDictionary(locale);
  const homeUrl = canonicalAbsoluteUrl(localizedPath(locale, "/"));
  const toolUrl = canonicalAbsoluteUrl(localizedPath(locale, `/tools/${toolId}`));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dictionary.nav.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dictionary.tools[toolId].title,
        item: toolUrl,
      },
    ],
  };
}

export function faqPageJsonLd(
  faq: { question: string; answer: string }[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildToolStructuredData(toolId: ToolId, locale: Locale) {
  const d = getDictionary(locale);
  const tool = d.tools[toolId];
  const url = canonicalAbsoluteUrl(localizedPath(locale, `/tools/${toolId}`));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${tool.title} — ${SITE_NAME}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    description: getSeoCopy(toolId, locale).description,
    url,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
