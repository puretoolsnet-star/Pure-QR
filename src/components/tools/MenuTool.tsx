"use client";

import { useMemo, useState } from "react";

import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { useI18n } from "@/i18n/context";
import {
  MENU_TEMPLATE_PRESETS,
  normalizeMenuUrl,
  type MenuTemplateId,
} from "@/lib/qr/menu";

export function MenuTool() {
  const { t } = useI18n();
  const [template, setTemplate] = useState<MenuTemplateId>("custom");
  const [url, setUrl] = useState(MENU_TEMPLATE_PRESETS.custom.sampleUrl);
  const [showHint, setShowHint] = useState(true);
  const [dark, setDark] = useState(MENU_TEMPLATE_PRESETS.custom.fgColor);
  const [light, setLight] = useState(MENU_TEMPLATE_PRESETS.custom.bgColor);
  const [urlTouched, setUrlTouched] = useState(false);

  const normalizedUrl = useMemo(() => normalizeMenuUrl(url), [url]);
  const qrValue = normalizedUrl ?? "";

  function onTemplateChange(next: MenuTemplateId) {
    setTemplate(next);
    const preset = MENU_TEMPLATE_PRESETS[next];
    if (!urlTouched || next !== "custom") {
      setUrl(preset.sampleUrl);
    }
    setDark(preset.fgColor);
    setLight(preset.bgColor);
  }

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.menu.templateLabel}</span>
          <select
            className="input-field"
            value={template}
            onChange={(e) =>
              onTemplateChange(e.target.value as MenuTemplateId)
            }
          >
            <option value="custom">{t.menu.templateCustom}</option>
            <option value="cafe">{t.menu.templateCafe}</option>
            <option value="restaurant">{t.menu.templateRestaurant}</option>
            <option value="catalog">{t.menu.templateCatalog}</option>
          </select>
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.menu.urlLabel}</span>
          <input
            className="input-field"
            type="url"
            value={url}
            onChange={(e) => {
              setUrlTouched(true);
              setUrl(e.target.value);
            }}
            placeholder={t.menu.urlPlaceholder}
          />
          {url.trim() && !normalizedUrl ? (
            <p className="text-xs text-amber-200/90">{t.menu.invalidUrl}</p>
          ) : null}
        </label>

        <label className="flex items-start gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={showHint}
            onChange={(e) => setShowHint(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-white/20 accent-cyan-400"
          />
          <span>
            {t.menu.hintToggle}
            <span className="mt-1 block text-xs text-gray-500">
              {t.menu.hintHelp}
            </span>
          </span>
        </label>

        {showHint ? (
          <p className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-200">
            {t.menu.hintCaption}
          </p>
        ) : null}

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.menu.fgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={dark}
              onChange={(e) => setDark(e.target.value)}
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.menu.bgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={light}
              onChange={(e) => setLight(e.target.value)}
            />
          </label>
        </div>
      </div>

      <QrCodePreview
        toolId="menu"
        value={qrValue}
        size={320}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-menu"
      />
    </div>
  );
}
