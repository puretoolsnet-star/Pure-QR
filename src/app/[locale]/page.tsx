import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/home/HomePage";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale, LOCALES, type Locale } from "@/i18n/locales";
import { buildHomeMetadata } from "@/lib/seo/metadata";
import {
  homeToolsItemListJsonLd,
  siteOrganizationJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo/structured-data";

type PageParams = { locale: string };

export const instant = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  return buildHomeMetadata(raw);
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }

  const locale = raw as Locale;

  return (
    <>
      <JsonLd
        data={[
          siteOrganizationJsonLd(locale),
          softwareApplicationJsonLd(locale),
          webPageJsonLd("home", locale),
          homeToolsItemListJsonLd(locale),
        ]}
      />
      <HomePage locale={locale} />
      <SeoContentSection page="home" locale={locale} />
    </>
  );
}