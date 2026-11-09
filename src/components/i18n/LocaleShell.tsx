"use client";

import type { ReactNode } from "react";

import { HtmlLangSync } from "@/components/i18n/HtmlLangSync";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TurnstileProvider } from "@/components/security/TurnstileProvider";
import { I18nProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/locales";

type LocaleShellProps = {
  locale: Locale;
  children: ReactNode;
};

export function LocaleShell({ locale, children }: LocaleShellProps) {
  return (
    <I18nProvider locale={locale}>
      <HtmlLangSync locale={locale} />
      <TurnstileProvider>
        <div className="pureqr-page-shell relative flex min-h-dvh w-full max-w-full flex-col">
          <SiteHeader />
          <main className="mx-auto w-full min-w-0 max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </TurnstileProvider>
    </I18nProvider>
  );
}
