"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildPdfUrlPayload } from "@/lib/qr/formats";
import { isValidUrl } from "@/lib/qr/validation";

export function PdfQrTool() {
  const { t } = useI18n();
  const [url, setUrl] = useState("https://");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const error = url.trim() && !isValidUrl(url) ? t.pdfQr.invalid : null;
  const payload = useMemo(() => {
    if (!isValidUrl(url)) return "";
    return buildPdfUrlPayload(url);
  }, [url]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.pdfQr.url}</span>
          <input
            className="input-field"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/file.pdf"
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
        toolId="pdf-qr"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-pdf"
      />
    </div>
  );
}
