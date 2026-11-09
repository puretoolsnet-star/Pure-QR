"use client";

import Link from "next/link";
import { QrCode } from "lucide-react";

import { HeaderMenu } from "@/components/layout/HeaderMenu";
import { useI18n } from "@/i18n/context";
import { TOOL_IDS } from "@/i18n/locales";
import { homeRoute, toolRoute } from "@/lib/i18n/routing";

export function SiteHeader() {
  const { locale, t } = useI18n();

  return (
    <header className="sticky top-0 z-[80] border-b border-white/10 bg-[#090d16]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
        <Link
          href={homeRoute(locale)}
          aria-label={`${t.brand.name} — ${t.nav.home}`}
          className="flex min-w-0 items-center gap-2 text-sm font-semibold text-white sm:text-base"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 sm:h-9 sm:w-9">
            <QrCode className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <span className="truncate">{t.brand.name}</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-hidden text-sm text-gray-300 lg:flex"
          aria-label={t.nav.tools}
        >
          {TOOL_IDS.map((id) => (
            <Link
              key={id}
              href={toolRoute(locale, id)}
              className="min-w-0 truncate transition hover:text-cyan-300"
            >
              {t.tools[id].title}
            </Link>
          ))}
        </nav>

        <HeaderMenu />
      </div>
    </header>
  );
}
