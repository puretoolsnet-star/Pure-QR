import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale, LOCALES, type Locale } from "@/i18n/locales";
import { buildHomeMetadata } from "@/lib/seo/metadata";
import {
  siteOrganizationJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo/structured-data";
export const dynamic = "force-dynamic";
type PageParams = { locale: string };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return buildHomeMetadata(raw);
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("home", locale),
          softwareApplicationJsonLd(locale),
          siteOrganizationJsonLd(locale),
        ]}
      />
      <HomePage />
    </>
  );
}
