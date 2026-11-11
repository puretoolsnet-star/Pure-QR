"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildTelPayload } from "@/lib/qr/formats";
import { isValidPhone } from "@/lib/qr/validation";

export function PhoneTool() {
  const { t } = useI18n();
  const [number, setNumber] = useState("+380");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const error = number.trim() && !isValidPhone(number) ? t.phone.invalid : null;
  const payload = useMemo(() => {
    if (!isValidPhone(number)) return "";
    return buildTelPayload(number);
  }, [number]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.phone.number}</span>
          <input
            className="input-field"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            inputMode="tel"
            autoComplete="tel"
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
        toolId="phone"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-phone"
      />
    </div>
  );
}
