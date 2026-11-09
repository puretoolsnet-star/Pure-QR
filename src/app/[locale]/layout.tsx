import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocaleShell } from "@/components/i18n/LocaleShell";
import { isLocale, LOCALES, type Locale } from "@/i18n/locales";
import { OPEN_GRAPH_LOCALE } from "@/lib/seo/site";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  return {
    robots: { index: true, follow: true },
    openGraph: {
      locale: OPEN_GRAPH_LOCALE[raw],
      alternateLocale: LOCALES.filter((item) => item !== raw).map(
        (item) => OPEN_GRAPH_LOCALE[item],
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <LocaleShell locale={raw as Locale}>{children}</LocaleShell>;
}
