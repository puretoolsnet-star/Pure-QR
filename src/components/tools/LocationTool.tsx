"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildGeoPayload } from "@/lib/qr/formats";
import { isValidLatitude, isValidLongitude } from "@/lib/qr/validation";

export function LocationTool() {
  const { t } = useI18n();
  const [lat, setLat] = useState("50.4501");
  const [lng, setLng] = useState("30.5234");
  const [label, setLabel] = useState("");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const invalid =
    (lat.trim() && !isValidLatitude(lat)) ||
    (lng.trim() && !isValidLongitude(lng));
  const error = invalid ? t.location.invalid : null;

  const payload = useMemo(() => {
    if (!isValidLatitude(lat) || !isValidLongitude(lng)) return "";
    return buildGeoPayload({ lat, lng, label });
  }, [lat, lng, label]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.location.lat}</span>
            <input
              className="input-field"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              inputMode="decimal"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.location.lng}</span>
            <input
              className="input-field"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              inputMode="decimal"
            />
          </label>
        </div>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.location.label}</span>
          <input
            className="input-field"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
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
        toolId="location"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-location"
      />
    </div>
  );
}
