"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { useI18n } from "@/i18n/context";
import type { ToolId } from "@/i18n/locales";
import { toolRoute } from "@/lib/i18n/routing";

type HomeToolCardProps = {
  toolId: ToolId;
  icon: LucideIcon;
};

export function HomeToolCard({ toolId, icon: Icon }: HomeToolCardProps) {
  const { locale, t } = useI18n();
  const copy = t.tools[toolId];

  return (
    <Link
      href={toolRoute(locale, toolId)}
      className="glass-card group flex h-full w-full min-w-0 flex-col rounded-2xl p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
    >
      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 transition group-hover:bg-cyan-500/25">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="break-words text-lg font-semibold text-white">{copy.title}</h2>
      <p className="mt-1 flex-1 break-words text-sm text-gray-400">{copy.description}</p>
      <span className="mt-4 text-sm font-medium text-cyan-300">
        {t.home.openTool}
      </span>
    </Link>
  );
}
