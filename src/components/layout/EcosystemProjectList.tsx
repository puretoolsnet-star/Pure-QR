"use client";

import { FileText, PenLine, QrCode, Table2 } from "lucide-react";
import Link from "next/link";

import { useI18n } from "@/i18n/context";
import {
  ECOSYSTEM_PROJECTS,
  ecosystemHref,
  type EcosystemProjectId,
} from "@/lib/ecosystem";
import { cn } from "@/lib/cn";

const PROJECT_ICONS: Record<EcosystemProjectId, typeof QrCode> = {
  purepdf: FileText,
  pureqr: QrCode,
  pureSign: PenLine,
  pureTable: Table2,
};

type EcosystemProjectListProps = {
  onNavigate?: () => void;
  className?: string;
};

export function EcosystemProjectList({
  onNavigate,
  className,
}: EcosystemProjectListProps) {
  const { locale, t } = useI18n();

  return (
    <ul className={cn("flex w-full min-w-0 flex-col gap-0.5", className)}>
      {ECOSYSTEM_PROJECTS.map((project) => {
        const copy = t.ecosystem.items[project.id];
        const Icon = PROJECT_ICONS[project.id];
        const href = ecosystemHref(project, locale);
        const isCurrent = project.id === "pureqr";
        const isComingSoon = project.status === "comingSoon";

        const rowClass = cn(
          "flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
          isCurrent &&
            "bg-cyan-50 ring-1 ring-cyan-200 dark:bg-cyan-950/40 dark:ring-cyan-700",
          !isCurrent &&
            href &&
            "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
          isComingSoon && "cursor-default opacity-75",
        );

        const badge = isComingSoon ? (
          <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-100">
            {t.ecosystem.comingSoon}
          </span>
        ) : (
          <span className="shrink-0 rounded-full border border-cyan-300 bg-cyan-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-900 dark:border-cyan-600 dark:bg-cyan-900/60 dark:text-cyan-100">
            {t.ecosystem.active}
          </span>
        );

        const inner = (
          <>
            <div
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600",
                isCurrent
                  ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {copy.name}
                </span>
                {badge}
              </div>
              <p className="mt-0.5 break-words text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                {copy.tagline}
              </p>
            </div>
          </>
        );

        if (isCurrent && href) {
          return (
            <li key={project.id} className="min-w-0">
              <Link
                href={href}
                className={rowClass}
                aria-current="page"
                onClick={onNavigate}
              >
                {inner}
              </Link>
            </li>
          );
        }

        if (href) {
          return (
            <li key={project.id} className="min-w-0">
              <a
                href={href}
                className={rowClass}
                onClick={onNavigate}
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            </li>
          );
        }

        return (
          <li key={project.id} className="min-w-0">
            <div className={rowClass} aria-disabled="true">
              {inner}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
