"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { useI18n } from "@/i18n/context";
import type { ToolId } from "@/i18n/locales";
import { homeRoute } from "@/lib/i18n/routing";

type ToolShellProps = {
  toolId: ToolId;
  children: ReactNode;
};

export function ToolShell({ toolId, children }: ToolShellProps) {
  const { locale, t } = useI18n();
  const tool = t.tools[toolId];

  return (
    <div className="space-y-6">
      <Link
        href={homeRoute(locale)}
        className="inline-flex items-center gap-1 text-sm text-gray-400 transition hover:text-cyan-300"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {t.common.backHome}
      </Link>

      <header className="space-y-2">
        <h1 className="break-words text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {tool.title}
        </h1>
        <p className="max-w-2xl break-words text-gray-300">{tool.description}</p>
        <p className="text-sm text-cyan-200/80">{tool.hint}</p>
        <p className="text-xs text-gray-500">{t.common.clientSideNote}</p>
      </header>

      <div className="glass-card w-full min-w-0 overflow-hidden rounded-2xl p-4 sm:p-6">{children}</div>
    </div>
  );
}
