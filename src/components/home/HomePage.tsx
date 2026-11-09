"use client";

import {
  Contact,
  QrCode,
  ScanLine,
  Stamp,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

import { HomeToolCard } from "@/components/home/HomeToolCard";
import { useI18n } from "@/i18n/context";
import { TOOL_IDS, type ToolId } from "@/i18n/locales";

const TOOL_ICONS: Record<ToolId, typeof QrCode> = {
  generator: QrCode,
  wifi: Wifi,
  vcard: Contact,
  scanner: ScanLine,
  menu: UtensilsCrossed,
  "logo-qr": Stamp,
};

export function HomePage() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <section className="space-y-4 text-center sm:text-left">
        <p className="inline-flex max-w-full flex-wrap justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200 sm:text-xs">
          {t.brand.tagline}
        </p>
        <h1 className="text-balance break-words text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t.home.heroTitle}
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-base text-gray-300 sm:mx-0 sm:text-lg">
          {t.home.heroSubtitle}
        </p>
        <p className="mx-auto max-w-2xl text-balance text-sm leading-relaxed text-emerald-200/90 sm:mx-0">
          {t.home.privacyHighlight}
        </p>
      </section>

      <section aria-label={t.home.toolsAria}>
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOOL_IDS.map((id) => {
            const Icon = TOOL_ICONS[id];
            return (
              <li key={id}>
                <HomeToolCard toolId={id} icon={Icon} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
