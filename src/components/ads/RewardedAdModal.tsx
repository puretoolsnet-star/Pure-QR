"use client";

import { Download, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useI18n } from "@/i18n/context";
import type { ToolId } from "@/i18n/locales";
import {
  ADSTERRA_WATCH_MS,
  adsterraNative,
  loadAdsterraNative,
  triggerAdsterraReward,
} from "@/lib/ads/adsterra";
import { cn } from "@/lib/cn";

type Phase = "idle" | "watching" | "ready";

type RewardedAdModalProps = {
  open: boolean;
  toolId: ToolId | null;
  sessionKey: number;
  onClose: () => void;
  onUnlocked: () => void;
};

function RewardedAdModalPanel({
  onClose,
  onUnlocked,
}: {
  onClose: () => void;
  onUnlocked: () => void;
}) {
  const { t } = useI18n();
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const autoStarted = useRef(false);

  useEffect(() => {
    loadAdsterraNative();
  }, []);

  useEffect(() => {
    if (phase !== "watching") return;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - started) / ADSTERRA_WATCH_MS);
      setProgress(next);
      if (next >= 1) {
        setPhase("ready");
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [phase]);

  useEffect(() => {
    if (phase !== "ready" || autoStarted.current) return;
    autoStarted.current = true;
    onUnlocked();
  }, [phase, onUnlocked]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && phase !== "watching") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, onClose]);

  const secondsLeft = Math.max(0, Math.ceil((1 - progress) * (ADSTERRA_WATCH_MS / 1000)));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rewarded-ad-title"
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-x-hidden overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:items-center"
    >
      <div className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3 border-b border-slate-800 px-4 py-4 sm:gap-4 sm:px-5">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/80">
              {t.rewardedAd.sponsored}
            </p>
            <h2 id="rewarded-ad-title" className="mt-1 break-words text-base font-semibold text-white sm:text-lg">
              {t.rewardedAd.title}
            </h2>
            <p className="mt-2 break-words text-sm leading-relaxed text-gray-300">
              {t.rewardedAd.message}
            </p>
          </div>
          {phase !== "watching" && (
            <button
              type="button"
              onClick={onClose}
              aria-label={t.rewardedAd.close}
              className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          )}
        </div>

        <div className="space-y-4 px-4 py-4 sm:px-5">
          <div
            id={adsterraNative.containerId || undefined}
            className="flex min-h-[7.5rem] w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/80 px-4 py-5 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {t.rewardedAd.slotLabel}
            </p>
            <p className="mt-2 text-xs text-gray-400">Adsterra</p>
          </div>

          {phase === "watching" && (
            <div className="space-y-2">
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-400">
                {t.rewardedAd.watching} {t.rewardedAd.progress(secondsLeft)}
              </p>
            </div>
          )}
          {phase === "idle" && (
            <p className="text-sm text-gray-400">{t.rewardedAd.waitHint}</p>
          )}
          {phase === "ready" && (
            <p className="text-sm text-cyan-200/90">{t.rewardedAd.thanks}</p>
          )}
        </div>

        <div className="border-t border-slate-800 bg-slate-950/40 px-4 py-4 sm:px-5">
          {phase === "ready" ? (
            <button type="button" onClick={onUnlocked} className="btn-primary w-full">
              <Download className="h-4 w-4" aria-hidden />
              {t.rewardedAd.download}
            </button>
          ) : (
            <button
              type="button"
              disabled={phase === "watching"}
              onClick={() => {
                triggerAdsterraReward();
                setPhase("watching");
              }}
              className={cn(
                "btn-primary w-full",
                phase === "watching" && "cursor-not-allowed opacity-60",
              )}
            >
              <Play className="h-4 w-4 fill-current" aria-hidden />
              {t.rewardedAd.watch}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function RewardedAdModal({
  open,
  toolId,
  sessionKey,
  onClose,
  onUnlocked,
}: RewardedAdModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !toolId || !mounted) {
    return null;
  }

  return createPortal(
    <RewardedAdModalPanel
      key={`${toolId}-${sessionKey}`}
      onClose={onClose}
      onUnlocked={onUnlocked}
    />,
    document.body,
  );
}
