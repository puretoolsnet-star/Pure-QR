"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import {
  buildSocialPayload,
  type SocialPlatform,
} from "@/lib/qr/formats";
import { isValidUrl } from "@/lib/qr/validation";

export function SocialsTool() {
  const { t } = useI18n();
  const [platform, setPlatform] = useState<SocialPlatform>("instagram");
  const [handle, setHandle] = useState("");
  const [customUrl, setCustomUrl] = useState("https://");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const payload = useMemo(
    () => buildSocialPayload({ platform, handle, customUrl }),
    [platform, handle, customUrl],
  );

  const invalid =
    platform === "custom"
      ? customUrl.trim() && !isValidUrl(customUrl)
      : handle.trim() === "";
  const error =
    (handle.trim() || customUrl.trim()) && (!payload || invalid)
      ? t.socials.invalid
      : null;

  const platformLabel: Record<SocialPlatform, string> = {
    instagram: t.socials.instagram,
    telegram: t.socials.telegram,
    whatsapp: t.socials.whatsapp,
    facebook: t.socials.facebook,
    x: t.socials.x,
    tiktok: t.socials.tiktok,
    linkedin: t.socials.linkedin,
    youtube: t.socials.youtube,
    custom: t.socials.custom,
  };

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.socials.platform}</span>
          <select
            className="input-field"
            value={platform}
            onChange={(e) => setPlatform(e.target.value as SocialPlatform)}
          >
            {(Object.keys(platformLabel) as SocialPlatform[]).map((key) => (
              <option key={key} value={key}>
                {platformLabel[key]}
              </option>
            ))}
          </select>
        </label>
        {platform === "custom" ? (
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.socials.customUrl}</span>
            <input
              className="input-field"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
            />
          </label>
        ) : (
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.socials.username}</span>
            <input
              className="input-field"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="@username"
            />
          </label>
        )}
        <FieldError message={error} />
        <QrStyleFields
          dark={dark}
          light={light}
          size={size}
          onDarkChange={setDark}
          onLightChange={setLight}
          onSizeChange={setSize}
        />
      </div>
      <QrCodePreview
        toolId="socials"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-social"
      />
    </div>
  );
}
