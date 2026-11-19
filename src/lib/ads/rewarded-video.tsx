"use client";

import { useCallback } from "react";

/**
 * Isolated placeholder for a future Rewarded Video SDK.
 * Disabled: loads no scripts, renders nothing, and stays off the download path.
 * A real SDK belongs only in the enabled branch below.
 */
export const REWARDED_VIDEO_ENABLED = false;

export type RewardedVideoPlacement = "qr-download";

export type RewardedVideoRequest = {
  placement: RewardedVideoPlacement;
  toolId?: string;
};

export function useRewardedVideo() {
  const requestReward = useCallback(async (request: RewardedVideoRequest) => {
    if (!REWARDED_VIDEO_ENABLED) return true;
    return request.placement.length > 0;
  }, []);

  return {
    enabled: REWARDED_VIDEO_ENABLED,
    requestReward,
  };
}

/** Renders nothing while the Rewarded Video SDK is disabled. */
export function RewardedVideoSlot(): null {
  return REWARDED_VIDEO_ENABLED ? null : null;
}
