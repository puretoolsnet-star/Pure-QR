"use client";

import { useMemo, useState } from "react";

import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { useI18n } from "@/i18n/context";

export function GeneratorTool() {
  const { t } = useI18n();
  const [text, setText] = useState("https://example.com");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(320);
  const [includeMargin, setIncludeMargin] = useState(true);
  const [marginSize, setMarginSize] = useState(2);

  const qrValue = useMemo(() => text.trim(), [text]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.generator.contentLabel}</span>
          <textarea
            className="input-field min-h-[120px] resize-y"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.generator.contentPlaceholder}
          />
        </label>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
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

        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">
            {t.generator.size}: {size}
          </span>
          <input
            type="range"
            min={180}
            max={640}
            step={20}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full accent-cyan-400"
          />
        </label>

        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={includeMargin}
            onChange={(e) => setIncludeMargin(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 accent-cyan-400"
          />
          {t.generator.includeMargin}
        </label>

        {includeMargin ? (
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">
              {t.generator.margin}: {marginSize}
            </span>
            <input
              type="range"
              min={0}
              max={8}
              step={1}
              value={marginSize}
              onChange={(e) => setMarginSize(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </label>
        ) : null}
      </div>

      <QrCodePreview
        toolId="generator"
        value={qrValue}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin={includeMargin}
        marginSize={marginSize}
        fileBase="pureqr"
      />
    </div>
  );
}
