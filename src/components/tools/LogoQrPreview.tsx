"use client";

import { useMemo, useRef } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

import { ClientPrivacyBadge } from "@/components/tools/ClientPrivacyBadge";
import { useI18n } from "@/i18n/context";
import { downloadCanvasPng, downloadSvgElement } from "@/lib/qr/export";
import { useRewardedExport } from "@/lib/use-rewarded-export";

export type LogoQrPreviewProps = {
  value: string;
  size: number;
  fgColor: string;
  bgColor: string;
  logoSrc: string | null;
  logoScalePercent: number;
  excavate: boolean;
  fileBase: string;
};

export function LogoQrPreview({
  value,
  size,
  fgColor,
  bgColor,
  logoSrc,
  logoScalePercent,
  excavate,
  fileBase,
}: LogoQrPreviewProps) {
  const { t } = useI18n();
  const { requestExport, exportModal } = useRewardedExport("logo-qr");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const hasValue = Boolean(value.trim());

  const logoPixelSize = Math.round((size * logoScalePercent) / 100);

  const imageSettings = useMemo(() => {
    if (!logoSrc) return undefined;
    return {
      src: logoSrc,
      height: logoPixelSize,
      width: logoPixelSize,
      excavate,
      crossOrigin: "anonymous" as const,
    };
  }, [logoSrc, logoPixelSize, excavate]);

  const qrProps = {
    value: hasValue ? value : " ",
    size,
    bgColor,
    fgColor,
    level: "H" as const,
    includeMargin: true,
    marginSize: 2,
    imageSettings,
  };

  return (
    <>
      <div className="flex w-full min-w-0 flex-col items-stretch gap-4">
        <ClientPrivacyBadge />
        <h2 className="text-sm font-medium text-gray-300">{t.generator.preview}</h2>
        <p className="text-xs text-gray-500">{t.logoQr.errorLevel}</p>

        <div
          className="flex w-full min-w-0 justify-center"
          role="img"
          aria-label={t.generator.preview}
        >
          {hasValue ? (
            <div className="qr-stage" style={{ maxWidth: size }}>
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-black/30">
                <QRCodeCanvas {...qrProps} ref={canvasRef} />
              </div>
            </div>
          ) : (
            <div
              className="flex aspect-square w-full items-center justify-center rounded-xl border border-dashed border-white/20 text-sm text-gray-500"
              style={{ maxWidth: size }}
            >
              —
            </div>
          )}
        </div>

        {hasValue ? (
          <div
            className="pointer-events-none fixed left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0"
            aria-hidden
          >
            <QRCodeSVG {...qrProps} ref={svgRef} />
          </div>
        ) : null}

        <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
          <button
            type="button"
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            disabled={!hasValue}
            onClick={() =>
              requestExport(() =>
                downloadCanvasPng(canvasRef.current, `${fileBase}.png`),
              )
            }
          >
            {t.common.downloadPng}
          </button>
          <button
            type="button"
            className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            disabled={!hasValue}
            onClick={() =>
              requestExport(() =>
                downloadSvgElement(svgRef.current, `${fileBase}.svg`),
              )
            }
          >
            {t.common.downloadSvg}
          </button>
        </div>
      </div>
      {exportModal}
    </>
  );
}
