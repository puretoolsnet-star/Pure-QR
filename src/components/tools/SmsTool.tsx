"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildSmsPayload } from "@/lib/qr/formats";
import { isValidPhone } from "@/lib/qr/validation";

export function SmsTool() {
  const { t } = useI18n();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const error =
    phone.trim() && !isValidPhone(phone) ? t.sms.invalid : null;
  const payload = useMemo(() => {
    if (!isValidPhone(phone)) return "";
    return buildSmsPayload({ phone, message });
  }, [phone, message]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.sms.phone}</span>
          <input
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.sms.message}</span>
          <textarea
            className="input-field min-h-[88px] resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
        toolId="sms"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-sms"
      />
    </div>
  );
}
