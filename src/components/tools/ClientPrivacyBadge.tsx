"use client";

import { ShieldCheck } from "lucide-react";

import { useI18n } from "@/i18n/context";

export function ClientPrivacyBadge() {
  const { t } = useI18n();

  return (
    <p className="flex w-full min-w-0 max-w-full items-start gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-xs leading-relaxed text-emerald-100/95 sm:inline-flex sm:w-auto sm:text-sm">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span className="min-w-0 break-words">{t.common.privacyReminder}</span>
    </p>
  );
}
