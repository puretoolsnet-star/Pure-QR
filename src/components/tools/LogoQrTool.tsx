"use client";

import { useCallback, useEffect, useState } from "react";
import { Upload } from "lucide-react";

import { useTurnstile } from "@/components/security/TurnstileProvider";
import { LogoQrPreview } from "@/components/tools/LogoQrPreview";
import { useI18n } from "@/i18n/context";

const ACCEPT_LOGO = "image/png,image/jpeg,image/jpg,image/svg+xml,image/webp";

export function LogoQrTool() {
  const { t } = useI18n();
  const { assertHuman } = useTurnstile();
  const [content, setContent] = useState("https://example.com");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoScale, setLogoScale] = useState(22);
  const [excavate, setExcavate] = useState(true);

  const onLogoFile = useCallback(async (file: File | undefined) => {
    if (!file) return;
    const allowed = await assertHuman();
    if (!allowed) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") setLogoSrc(result);
    };
    reader.readAsDataURL(file);
  }, [assertHuman]);

  useEffect(() => {
    return () => {
      if (logoSrc?.startsWith("blob:")) URL.revokeObjectURL(logoSrc);
    };
  }, [logoSrc]);

  function clearLogo() {
    setLogoSrc(null);
  }

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.logoQr.contentLabel}</span>
          <textarea
            className="input-field min-h-[100px] resize-y"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t.logoQr.contentPlaceholder}
          />
        </label>

        <div className="space-y-2">
          <span className="text-sm text-gray-300">{t.logoQr.logoUpload}</span>
          <p className="text-xs text-gray-500">{t.logoQr.logoUploadHint}</p>
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-6 transition hover:border-cyan-400/40">
            <Upload className="h-6 w-6 text-cyan-300" aria-hidden />
            <span className="text-sm text-gray-300">{t.logoQr.logoUpload}</span>
            <input
              type="file"
              accept={ACCEPT_LOGO}
              aria-label={t.logoQr.logoUpload}
              className="sr-only"
              onChange={(e) => {
                onLogoFile(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </label>
          {logoSrc ? (
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={t.logoQr.logoUpload}
                className="h-12 w-12 rounded-md bg-white object-contain p-1"
              />
              <button
                type="button"
                className="btn-secondary text-sm"
                onClick={clearLogo}
              >
                {t.logoQr.removeLogo}
              </button>
            </div>
          ) : null}
        </div>

        {logoSrc ? (
          <>
            <label className="block space-y-1.5">
              <span className="text-sm text-gray-300">
                {t.logoQr.logoScale}: {logoScale}%
              </span>
              <input
                type="range"
                min={12}
                max={40}
                step={1}
                value={logoScale}
                onChange={(e) => setLogoScale(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </label>
            <label className="flex items-start gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={excavate}
                onChange={(e) => setExcavate(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 accent-cyan-400"
              />
              <span>
                {t.logoQr.excavate}
                <span className="mt-0.5 block text-xs text-gray-500">
                  {t.logoQr.excavateHelp}
                </span>
              </span>
            </label>
          </>
        ) : null}

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.logoQr.fgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={dark}
              onChange={(e) => setDark(e.target.value)}
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.logoQr.bgColor}</span>
            <input
              type="color"
              className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
              value={light}
              onChange={(e) => setLight(e.target.value)}
            />
          </label>
        </div>
      </div>

      <LogoQrPreview
        value={content.trim()}
        size={320}
        fgColor={dark}
        bgColor={light}
        logoSrc={logoSrc}
        logoScalePercent={logoScale}
        excavate={excavate}
        fileBase="pureqr-logo"
      />
    </div>
  );
}
