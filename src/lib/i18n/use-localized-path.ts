"use client";

import { useI18n } from "@/i18n/context";
import { localizedPath } from "@/lib/i18n/routing";

export function useLocalizedPath() {
  const { locale } = useI18n();

  return (path: string) => localizedPath(locale, path);
}
