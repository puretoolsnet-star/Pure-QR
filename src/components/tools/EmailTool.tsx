"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildMailtoPayload } from "@/lib/qr/formats";
import { isValidEmail } from "@/lib/qr/validation";

export function EmailTool() {
  const { t } = useI18n();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const error = to.trim() && !isValidEmail(to) ? t.email.invalid : null;
  const payload = useMemo(() => {
    if (!isValidEmail(to)) return "";
    return buildMailtoPayload({ to, subject, body });
  }, [to, subject, body]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.email.to}</span>
          <input
            className="input-field"
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.email.subject}</span>
          <input
            className="input-field"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.email.body}</span>
          <textarea
            className="input-field min-h-[88px] resize-y"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
        toolId="email"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-email"
      />
    </div>
  );
}
