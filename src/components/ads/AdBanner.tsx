"use client";

import { useEffect, useRef } from "react";

import { useI18n } from "@/i18n/context";
import {
  ADSTERRA_BANNER,
  mountAdsterraBanner,
} from "@/lib/ads/adsterra";
import { cn } from "@/lib/cn";

export type AdBannerLayout = "sidebar" | "inline";

type AdBannerProps = {
  className?: string;
  /** Sidebar: sticky column on lg; stacks under tool form on mobile. */
  layout?: AdBannerLayout;
  /** Value for `data-ad-slot` (analytics / ad network hooks). */
  slot?: string;
};

/**
 * Sidebar / inline Adsterra 300×250 — i18n sponsored label, scales inside narrow columns.
 */
export function AdBanner({
  className,
  layout = "sidebar",
  slot = "tool-sidebar",
}: AdBannerProps) {
  const { t } = useI18n();
  const adHostRef = useRef<HTMLDivElement>(null);
  const isSidebar = layout === "sidebar";
  const { width, height } = ADSTERRA_BANNER;

  useEffect(() => {
    const host = adHostRef.current;
    if (!host) return;
    return mountAdsterraBanner(host);
  }, []);

  return (
    <aside
      aria-label={t.toolAd.sponsored}
      data-ad-slot={slot}
      className={cn(
        "pointer-events-auto relative z-0 min-w-0 w-full max-w-full shrink-0",
        isSidebar &&
          "order-2 border-t border-white/10 pt-6 lg:order-none lg:border-t-0 lg:pt-0",
        className,
      )}
    >
      <p
        className={cn(
          "mb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-500",
          isSidebar && "lg:text-left",
        )}
      >
        {t.toolAd.sponsored}
      </p>
      <div
        className={cn(
          "glass-card w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-surface/30",
          isSidebar ? "max-w-[300px] mx-auto lg:mx-0" : "mx-auto max-w-[300px]",
        )}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <div
          className="relative h-full w-full [container-type:inline-size]"
          style={{ maxWidth: width }}
        >
          <div
            ref={adHostRef}
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width,
              height,
              transform: `scale(calc(100cqw / ${width}px))`,
            }}
          />
        </div>
      </div>
    </aside>
  );
}