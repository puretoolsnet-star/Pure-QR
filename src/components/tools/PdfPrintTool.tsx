"use client";

import { useMemo, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { ClientPrivacyBadge } from "@/components/tools/ClientPrivacyBadge";
import { useI18n } from "@/i18n/context";
import { downloadQrCanvasesAsPngs } from "@/lib/qr/bulk-export";
import { useRewardedExport } from "@/lib/use-rewarded-export";

type PrintRow = { label: string; value: string };

const DEFAULT: PrintRow[] = [
  { label: "Wi-Fi", value: "WIFI:S:Guest;T:nopass;H:false;;" },
  { label: "Menu", value: "https://example.com/menu" },
];

export function PdfPrintTool() {
  const { t } = useI18n();
  const { requestExport, exportModal } = useRewardedExport("pdf-print");
  const [rows, setRows] = useState<PrintRow[]>(DEFAULT);
  const exportRefs = useRef<Array<HTMLCanvasElement | null>>([]);

  const validRows = useMemo(
    () => rows.filter((r) => r.value.trim()),
    [rows],
  );

  function updateRow(index: number, patch: Partial<PrintRow>) {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  }

  function printSheet() {
    const title = t.pdfPrint.printTitle;
    const html = `
<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title>
<style>
  @page { size: A4; margin: 12mm; }
  body { font-family: system-ui, sans-serif; }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10mm; }
  .item { text-align: center; page-break-inside: avoid; }
  .item img { width: 36mm; height: 36mm; }
  .item p { margin: 4mm 0 0; font-size: 11pt; }
</style></head><body>
<h1>${title}</h1>
<div class="grid">
${validRows
  .map((row) => {
    const safe = row.label.replace(/</g, "&lt;");
    return `<div class="item" data-qr="${encodeURIComponent(row.value)}"><p><strong>${safe}</strong></p></div>`;
  })
  .join("")}
</div>
<script>
  // QR images injected from opener
</script>
</body></html>`;
    const win = window.open("", "_blank", "noopener,noreferrer");
    if (!win) return;
    win.document.write(html);
    win.document.close();
    const grid = win.document.querySelector(".grid");
    if (!grid) return;
    const items = grid.querySelectorAll(".item");
    items.forEach((item, index) => {
      const canvas = exportRefs.current[index];
      if (!canvas) return;
      const img = win.document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.alt = "";
      item.insertBefore(img, item.firstChild);
    });
    win.focus();
    win.print();
  }

  function batchPng() {
    const payloads = validRows.map((row, index) => ({
      label: row.label,
      canvas: exportRefs.current[index] ?? null,
    }));
    void downloadQrCanvasesAsPngs(payloads);
  }

  return (
    <>
      <div className="w-full min-w-0 space-y-6">
        <ClientPrivacyBadge />
        <p className="text-sm text-gray-400">{t.pdfPrint.hint}</p>

        <ul className="space-y-3">
          {rows.map((row, index) => (
            <li
              key={index}
              className="grid gap-2 rounded-xl border border-white/10 bg-gray-950/40 p-3 sm:grid-cols-2"
            >
              <input
                className="input-field"
                placeholder={t.pdfPrint.label}
                value={row.label}
                onChange={(e) => updateRow(index, { label: e.target.value })}
              />
              <input
                className="input-field"
                placeholder={t.pdfPrint.value}
                value={row.value}
                onChange={(e) => updateRow(index, { value: e.target.value })}
              />
              <div className="col-span-full flex justify-end">
                {rows.length > 1 ? (
                  <button
                    type="button"
                    className="text-xs text-gray-400 hover:text-rose-300"
                    onClick={() =>
                      setRows((prev) => prev.filter((_, i) => i !== index))
                    }
                  >
                    {t.common.removeRow}
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn-secondary w-full sm:w-auto"
          onClick={() => setRows((prev) => [...prev, { label: "", value: "" }])}
        >
          {t.pdfPrint.addRow}
        </button>

        {validRows.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {validRows.map((row) => (
              <div
                key={`${row.label}-${row.value}`}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-3"
              >
                <QRCodeCanvas
                  value={row.value}
                  size={140}
                  fgColor="#042f2e"
                  bgColor="#ffffff"
                  level="M"
                  includeMargin
                />
                <span className="text-center text-xs text-gray-400">
                  {row.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            className="btn-primary w-full sm:w-auto"
            disabled={validRows.length === 0}
            onClick={() => requestExport(printSheet)}
          >
            {t.pdfPrint.print}
          </button>
          <button
            type="button"
            className="btn-secondary w-full sm:w-auto"
            disabled={validRows.length === 0}
            onClick={() => requestExport(batchPng)}
          >
            {t.pdfPrint.exportBatch}
          </button>
        </div>

        <div
          className="pointer-events-none fixed left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0"
          aria-hidden
        >
          {validRows.map((row, index) => (
            <QRCodeCanvas
              key={`print-export-${index}`}
              value={row.value}
              size={512}
              fgColor="#042f2e"
              bgColor="#ffffff"
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
