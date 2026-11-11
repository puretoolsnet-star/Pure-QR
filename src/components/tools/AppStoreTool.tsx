"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildAppStorePayload } from "@/lib/qr/formats";
import { isValidUrl } from "@/lib/qr/validation";

export function AppStoreTool() {
  const { t } = useI18n();
  const [iosUrl, setIosUrl] = useState("");
  const [androidUrl, setAndroidUrl] = useState("");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const payload = useMemo(
    () => buildAppStorePayload({ iosUrl, androidUrl }),
    [iosUrl, androidUrl],
  );

  const iosBad = iosUrl.trim() && !isValidUrl(iosUrl);
  const androidBad = androidUrl.trim() && !isValidUrl(androidUrl);
  const empty = !iosUrl.trim() && !androidUrl.trim();
  const error =
    !empty && (iosBad || androidBad || !payload) ? t.appStore.invalid : null;

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.appStore.ios}</span>
          <input
            className="input-field"
            value={iosUrl}
            onChange={(e) => setIosUrl(e.target.value)}
            placeholder="https://apps.apple.com/..."
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.appStore.android}</span>
          <input
            className="input-field"
            value={androidUrl}
            onChange={(e) => setAndroidUrl(e.target.value)}
            placeholder="https://play.google.com/store/apps/..."
          />
        </label>
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
        toolId="app-store"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-app"
      />
    </div>
  );
}
