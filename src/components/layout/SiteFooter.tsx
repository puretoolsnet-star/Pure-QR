"use client";

import { ShieldCheck } from "lucide-react";

import { useI18n } from "@/i18n/context";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#070a12]/90">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="min-w-0 break-words text-sm text-gray-400">{t.footer.rights}</p>
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200 sm:px-3 sm:py-1.5 sm:text-sm">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
          <span className="min-w-0 break-words">{t.footer.privacyBadge}</span>
        </div>
      </div>
      <p className="mx-auto max-w-5xl px-4 pb-6 text-center text-xs text-gray-500 sm:px-6 sm:text-left">
        {t.footer.tagline}
      </p>
    </footer>
  );
}
