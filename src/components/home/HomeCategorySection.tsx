"use client";

import { ChevronDown } from "lucide-react";

import { HomeToolCard } from "@/components/home/HomeToolCard";
import { useI18n } from "@/i18n/context";
import type { ToolCategoryId } from "@/i18n/config";
import { toolsInCategory, TOOL_ICONS } from "@/lib/tools/catalog";
import { cn } from "@/lib/cn";

type HomeCategorySectionProps = {
  categoryId: ToolCategoryId;
  isOpen: boolean;
  onToggleCategory: () => void;
};

export function HomeCategorySection({
  categoryId,
  isOpen,
  onToggleCategory,
}: HomeCategorySectionProps) {
  const { t } = useI18n();
  const copy = t.home.categories[categoryId];
  const toolIds = toolsInCategory(categoryId);
  const headingId = `category-heading-${categoryId}`;
  const panelId = `category-panel-${categoryId}`;
  const toggleLabel = isOpen
    ? `${t.home.collapseCategory}: ${copy.title}`
    : `${t.home.expandCategory}: ${copy.title}`;

  return (
    <section
      id={`category-${categoryId}`}
      className="scroll-mt-24"
      aria-labelledby={headingId}
    >
      <div className="flex w-full items-start gap-2 rounded-2xl border border-white/10 bg-gray-900/70 px-4 py-3.5 shadow-sm shadow-black/20 sm:px-5 sm:py-4">
        <div className="min-w-0 flex-1">
          <h2
            id={headingId}
            className="text-lg font-semibold text-white sm:text-xl"
          >
            {copy.title}
          </h2>
          <p className="mt-1 text-sm text-gray-400">{copy.subtitle}</p>
        </div>
        <button
          type="button"
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 text-cyan-400 transition hover:border-cyan-500/35 hover:bg-gray-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-labelledby={headingId}
          aria-label={toggleLabel}
          onClick={() => onToggleCategory()}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300 ease-out",
              isOpen && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>

      {isOpen ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="pt-4"
        >
          <ul
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-label={`${t.home.categoryToolsListAria}: ${copy.title}`}
          >
            {toolIds.map((id) => {
              const Icon = TOOL_ICONS[id];
              return (
                <li key={id}>
                  <HomeToolCard toolId={id} icon={Icon} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
