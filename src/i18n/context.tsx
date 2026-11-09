"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Dictionary, Locale } from "@/i18n/locales";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  locale: Locale;
  children: ReactNode;
};

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const value = useMemo(
    () => ({ locale, t: getDictionary(locale) }),
    [locale],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
