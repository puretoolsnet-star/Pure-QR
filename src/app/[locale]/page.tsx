import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale, LOCALES, type Locale } from "@/i18n/locales";
import { buildHomeMetadata } from "@/lib/seo/metadata";
import {
  siteOrganizationJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo/structured-data";

// Динамічний імпорт HomePage з вимкненим SSR (розв'язує помилку prerender-error)
const HomePage = dynamic(
  () => import("@/components/home/HomePage").then((mod) => mod.HomePage),
  { ssr: false }
);

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
        ]}
      />
      <HomePage locale={locale} />
    </>
  );
}