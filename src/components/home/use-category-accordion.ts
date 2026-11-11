"use client";

import { useCallback, useEffect, useState } from "react";

import { TOOL_CATEGORIES, type ToolCategoryId } from "@/i18n/config";

const STORAGE_KEY = "pureqr-catalog-expanded-v1";

export type OpenCategoriesState = Record<ToolCategoryId, boolean>;

function createDefaultOpenState(): OpenCategoriesState {
  return Object.fromEntries(
    TOOL_CATEGORIES.map((category) => [category.id, true]),
  ) as OpenCategoriesState;
}

function readStoredOpenState(): OpenCategoriesState {
  const defaults = createDefaultOpenState();
  if (typeof window === "undefined") return defaults;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<OpenCategoriesState>;
    const merged = { ...defaults };
    for (const category of TOOL_CATEGORIES) {
      const stored = parsed[category.id];
      if (typeof stored === "boolean") {
        merged[category.id] = stored;
      }
    }
    return merged;
  } catch {
    return defaults;
  }
}

function persistOpenState(state: OpenCategoriesState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* private mode / quota */
  }
}

export function useCategoryAccordion() {
  const [openCategories, setOpenCategories] =
    useState<OpenCategoriesState>(createDefaultOpenState);

  useEffect(() => {
    setOpenCategories(readStoredOpenState());
  }, []);

  const toggleCategory = useCallback((categoryId: ToolCategoryId) => {
    setOpenCategories((prev) => {
      const currentlyOpen = prev[categoryId] ?? true;
      const next: OpenCategoriesState = {
        ...prev,
        [categoryId]: !currentlyOpen,
      };
      persistOpenState(next);
      return next;
    });
  }, []);

  return { openCategories, toggleCategory };
}
