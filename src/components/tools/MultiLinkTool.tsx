"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildMultiLinkPayload, type BioLinkRow } from "@/lib/qr/formats";

const DEFAULT_ROWS: BioLinkRow[] = [
  { label: "Website", url: "https://example.com" },
  { label: "Shop", url: "https://example.com/shop" },
];

export function MultiLinkTool() {
  const { t } = useI18n();
  const [title, setTitle] = useState("Bio");
  const [rows, setRows] = useState<BioLinkRow[]>(DEFAULT_ROWS);
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const payload = useMemo(
    () => buildMultiLinkPayload({ title, links: rows }),
    [title, rows],
  );
  const error = rows.some((r) => r.url || r.label) && !payload ? t.multiLink.invalid : null;

  function updateRow(index: number, patch: Partial<BioLinkRow>) {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  }

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.multiLink.pageTitle}</span>
          <input
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <ul className="space-y-3">
          {rows.map((row, index) => (
            <li
              key={index}
              className="space-y-2 rounded-xl border border-white/10 bg-gray-950/40 p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-gray-400">
                  #{index + 1}
                </span>
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
              <input
                className="input-field"
                placeholder={t.multiLink.linkLabel}
                value={row.label}
                onChange={(e) => updateRow(index, { label: e.target.value })}
              />
              <input
                className="input-field"
                placeholder={t.multiLink.linkUrl}
                value={row.url}
                onChange={(e) => updateRow(index, { url: e.target.value })}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn-secondary w-full"
          onClick={() => setRows((prev) => [...prev, { label: "", url: "" }])}
        >
          {t.multiLink.addLink}
        </button>
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
        toolId="multi-link"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-bio"
      />
    </div>
  );
}
