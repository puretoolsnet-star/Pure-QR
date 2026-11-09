import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import { JsonLd } from "@/components/seo/JsonLd";
import { ToolShell } from "@/components/tools/ToolShell";
import { isLocale, LOCALES, type Locale, type ToolId } from "@/i18n/locales";
import { buildToolMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbJsonLd,
  buildToolStructuredData,
  webPageJsonLd,
} from "@/lib/seo/structured-data";

type PageParams = { locale: string };

export function createToolPage(toolId: ToolId, ToolComponent: ComponentType) {
  async function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<PageParams>;
  }): Promise<Metadata> {
    const { locale: raw } = await params;
    if (!isLocale(raw)) return {};
    return buildToolMetadata(toolId, raw);
  }

  async function ToolPage({ params }: { params: Promise<PageParams> }) {
    const { locale: raw } = await params;
    if (!isLocale(raw)) notFound();

    const locale = raw as Locale;
    const jsonLd = [
      webPageJsonLd(toolId, locale),
      breadcrumbJsonLd(toolId, locale),
      buildToolStructuredData(toolId, locale),
    ];

    return (
      <>
        <JsonLd data={jsonLd} />
        <ToolShell toolId={toolId}>
          <ToolComponent />
        </ToolShell>
      </>
    );
  }

  return { ToolPage, generateMetadata, generateStaticParams };
}
