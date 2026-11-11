"use client";

import { useMemo, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { ClientPrivacyBadge } from "@/components/tools/ClientPrivacyBadge";
import { FieldError } from "@/components/tools/FieldError";
import { useI18n } from "@/i18n/context";
import { downloadQrCanvasesAsPngs } from "@/lib/qr/bulk-export";
import { parseBulkCsv } from "@/lib/qr/formats";
import { useRewardedExport } from "@/lib/use-rewarded-export";

const PREVIEW_LIMIT = 12;
const MAX_EXPORT = 200;

export function BulkQrTool() {
  const { t } = useI18n();
  const { requestExport, exportModal } = useRewardedExport("bulk-qr");
  const [csv, setCsv] = useState(t.bulkQr.csvPlaceholder);
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const exportRefs = useRef<Array<HTMLCanvasElement | null>>([]);

  const rows = useMemo(() => parseBulkCsv(csv), [csv]);
  const preview = rows.slice(0, PREVIEW_LIMIT);
  const error = csv.trim() && rows.length === 0 ? t.bulkQr.invalidRows : null;

  function runBulkExport() {
    const slice = rows.slice(0, MAX_EXPORT);
    const payloads = slice.map((row, index) => ({
      label: row.label,
      canvas: exportRefs.current[index] ?? null,
    }));
    void downloadQrCanvasesAsPngs(payloads);
  }

  return (
    <>
      <div className="w-full min-w-0 space-y-6">
        <ClientPrivacyBadge />
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.bulkQr.csvLabel}</span>
          <textarea
            className="input-field min-h-[160px] font-mono text-xs sm:text-sm"
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            spellCheck={false}
          />
        </label>
        <p className="text-xs text-gray-400">{t.bulkQr.csvHint}</p>
        <FieldError message={error} />
        {rows.length > 0 ? (
          <p className="text-sm text-cyan-200/90">{t.bulkQr.rowCount(rows.length)}</p>
        ) : null}

        {preview.length > 0 ? (
          <div className="space-y-3">
            <p className="text-xs text-gray-500">{t.bulkQr.previewLimit}</p>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {preview.map((row) => (
                <li
                  key={`${row.label}-${row.value}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-gray-950/50 p-2"
                >
                  <QRCodeCanvas
                    value={row.value}
                    size={120}
                    fgColor={dark}
                    bgColor={light}
                    level="M"
                    includeMargin
                  />
                  <span className="line-clamp-2 text-center text-[11px] text-gray-400">
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-4 sm:max-w-md">
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.generator.fgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={dark}
              onChange={(e) => setDark(e.target.value)}
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.generator.bgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={light}
              onChange={(e) => setLight(e.target.value)}
            />
          </label>
        </div>

        <button
          type="button"
          className="btn-primary w-full sm:w-auto"
          disabled={rows.length === 0}
          onClick={() => requestExport(runBulkExport)}
        >
          {t.bulkQr.exportAll}
        </button>

        <div
          className="pointer-events-none fixed left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0"
          aria-hidden
        >
          {rows.slice(0, MAX_EXPORT).map((row, index) => (
            <QRCodeCanvas
              key={`export-${row.label}-${index}`}
              value={row.value}
              size={512}
              fgColor={dark}
              bgColor={light}
              level="M"
              includeMargin
              ref={(el) => {
                exportRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
      {exportModal}
    </>
  );
}
