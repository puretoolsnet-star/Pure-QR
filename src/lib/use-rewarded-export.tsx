"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";

import { RewardedAdModal } from "@/components/ads/RewardedAdModal";
import { useTurnstile } from "@/components/security/TurnstileProvider";
import type { ToolId } from "@/i18n/locales";

export function useRewardedExport(toolId: ToolId): {
  requestExport: (action: () => void) => void;
  exportModal: ReactNode;
} {
  const { assertHuman } = useTurnstile();
  const [open, setOpen] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);
  const pendingActionRef = useRef<(() => void) | null>(null);

  const requestExport = useCallback(
    (action: () => void) => {
      void (async () => {
        const allowed = await assertHuman();
        if (!allowed) return;
        pendingActionRef.current = action;
        setSessionKey((key) => key + 1);
        setOpen(true);
      })();
    },
    [assertHuman],
  );

  const closeAd = useCallback(() => {
    setOpen(false);
    pendingActionRef.current = null;
  }, []);

  const completeAd = useCallback(() => {
    pendingActionRef.current?.();
  }, []);

  const exportModal = (
    <RewardedAdModal
      open={open}
      toolId={toolId}
      sessionKey={sessionKey}
      onClose={closeAd}
      onUnlocked={completeAd}
    />
  );

  return { requestExport, exportModal };
}
