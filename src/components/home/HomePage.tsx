"use client";

import { useEffect, useState } from "react";

import { HomeCategorySection } from "@/components/home/HomeCategorySection";
import { useCategoryAccordion } from "@/components/home/use-category-accordion";
import { useI18n } from "@/i18n/context";
import { TOOL_CATEGORIES } from "@/lib/tools/catalog";
import type { Locale } from "@/i18n/locales";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const { t } = useI18n();
  const [isMounted, setIsMounted] = useState(false);
  const { openCategories, toggleCategory } = useCategoryAccordion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-[60vh]" />;
  }

  void locale;

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

      <div className="space-y-5 sm:space-y-6" aria-label={t.home.toolsAria}>
        {TOOL_CATEGORIES.map((category) => (
          <HomeCategorySection
            key={category.id}
            categoryId={category.id}
            isOpen={openCategories[category.id] ?? true}
            onToggleCategory={() => toggleCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
}
