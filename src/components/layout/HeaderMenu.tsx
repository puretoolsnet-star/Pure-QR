"use client";

import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { EcosystemProjectList } from "@/components/layout/EcosystemProjectList";
import { useI18n } from "@/i18n/context";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/i18n/locales";
import { localizedPath, stripLocalePrefix } from "@/lib/i18n/routing";
import { cn } from "@/lib/cn";

const menuSurfaceClass =
  "z-[70] flex max-w-md flex-col overflow-hidden border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900";

const sheetClass =
  "fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 max-h-[min(calc(100dvh-5.5rem),32rem)] w-[92vw] -translate-x-1/2 rounded-2xl";

const dropdownClass =
  "fixed max-h-[min(85vh,32rem)] w-[min(22rem,92vw)] rounded-xl";

export function HeaderMenu() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [anchor, setAnchor] = useState<{ top: number; left: number } | null>(
    null,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setSheet(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open || sheet) return;
    const place = () => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      setAnchor({
        top: rect.bottom + 8,
        left: rect.right,
      });
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, sheet]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        rootRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectLocale(next: Locale) {
    const rest = stripLocalePrefix(pathname);
    router.push(localizedPath(next, rest));
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? t.nav.menuClose : t.nav.menuAria}
        onClick={() => {
          const rect = rootRef.current?.getBoundingClientRect();
          if (rect) {
            setAnchor({
              top: rect.bottom + 8,
              left: rect.right,
            });
          }
          setOpen((value) => !value);
        }}
        className="relative z-[80] inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-[#111827] text-gray-100 shadow-sm transition hover:bg-gray-800 sm:h-10 sm:w-10"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {open
        ? createPortal(
        <>
        <button
          type="button"
          tabIndex={-1}
          aria-label={t.nav.menuClose}
          className={cn(
            "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm",
            !sheet && "hidden",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menuAria}
          className={cn(menuSurfaceClass, sheet ? sheetClass : dropdownClass)}
          style={
            sheet || !anchor
              ? undefined
              : {
                  top: anchor.top,
                  left: anchor.left,
                  transform: "translateX(-100%)",
                }
          }
        >
          <div className="shrink-0 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {t.nav.menuAria}
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
              {t.ecosystem.menuHint}
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white px-4 py-3 dark:bg-gray-900">
            <section aria-labelledby="header-menu-lang">
              <h2
                id="header-menu-lang"
                className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-200"
              >
                {t.nav.selectLanguage}
              </h2>
              <ul className="mb-4 grid w-full grid-cols-2 gap-1.5">
                {LOCALES.map((code) => (
                  <li key={code}>
                    <button
                      type="button"
                      onClick={() => selectLocale(code)}
                      className={cn(
                        "w-full min-w-0 break-words rounded-lg border px-2 py-1.5 text-left text-xs font-medium leading-tight transition-colors sm:px-2.5 sm:py-2 sm:text-sm",
                        code === locale
                          ? "border-cyan-600 bg-cyan-50 text-cyan-950 dark:border-cyan-400 dark:bg-cyan-950/50 dark:text-cyan-50"
                          : "border-gray-200 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
                      )}
                    >
                      <span className="mr-1.5" aria-hidden>
                        {LOCALE_LABELS[code].flag}
                      </span>
                      {LOCALE_LABELS[code].native}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="header-menu-ecosystem">
              <h2
                id="header-menu-ecosystem"
                className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-200"
              >
                {t.ecosystem.menuLabel}
              </h2>
              <EcosystemProjectList onNavigate={() => setOpen(false)} />
            </section>
          </div>
        </div>
        </>,
        document.body,
      )
        : null}
    </div>
  );
}
