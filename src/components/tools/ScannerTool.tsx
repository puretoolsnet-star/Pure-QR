"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Camera, Upload } from "lucide-react";

import { useTurnstile } from "@/components/security/TurnstileProvider";
import { ClientPrivacyBadge } from "@/components/tools/ClientPrivacyBadge";
import { useI18n } from "@/i18n/context";
import { downloadTextFile } from "@/lib/qr/export";
import { useRewardedExport } from "@/lib/use-rewarded-export";
import { decodeQrFromCanvas, decodeQrFromFile } from "@/lib/qr/scan";
import { resolveExternalUrl } from "@/lib/qr/url";
import { cn } from "@/lib/cn";

type ScanMode = "file" | "camera";

export function ScannerTool() {
  const { t } = useI18n();
  const { assertHuman } = useTurnstile();
  const { requestExport, exportModal } = useRewardedExport("scanner");
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scanCanvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  const [mode, setMode] = useState<ScanMode>("file");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);

  const stopCamera = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraOn(false);
  }, []);

  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  useEffect(() => {
    if (mode !== "camera") stopCamera();
  }, [mode, stopCamera]);

  const tickCamera = useCallback(() => {
    const video = videoRef.current;
    const canvas = scanCanvasRef.current;
    if (!video || !canvas || video.readyState < video.HAVE_ENOUGH_DATA) {
      rafRef.current = requestAnimationFrame(tickCamera);
      return;
    }
    const w = video.videoWidth;
    const h = video.videoHeight;
    if (w > 0 && h > 0) {
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, w, h);
      const decoded = decodeQrFromCanvas(canvas);
      if (decoded) {
        setResult(decoded);
        setError(null);
      }
    }
    rafRef.current = requestAnimationFrame(tickCamera);
  }, []);

  const startCamera = useCallback(async () => {
    const allowed = await assertHuman();
    if (!allowed) return;
    setError(null);
    setResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraOn(true);
      rafRef.current = requestAnimationFrame(tickCamera);
    } catch {
      setError(t.scanner.cameraDenied);
      stopCamera();
    }
  }, [assertHuman, stopCamera, t.scanner.cameraDenied, tickCamera]);

  const processFile = useCallback(
    async (file: File) => {
      const allowed = await assertHuman();
      if (!allowed) return;

      setBusy(true);
      setError(null);
      setResult(null);
      setCopied(false);

      if (preview) URL.revokeObjectURL(preview);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      try {
        const decoded = await decodeQrFromFile(file);
        if (decoded) {
          setResult(decoded);
        } else {
          setError(t.scanner.noQr);
        }
      } catch {
        setError(t.scanner.noQr);
      } finally {
        setBusy(false);
      }
    },
    [assertHuman, preview, t.scanner.noQr],
  );

  function onFiles(files: FileList | null) {
    const file = files?.[0];
    if (file) void processFile(file);
  }

  async function copyResult() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function exportResult() {
    if (!result) return;
    downloadTextFile(result, "pureqr-scan.txt");
  }

  const linkHref = result ? resolveExternalUrl(result) : null;

  return (
    <>
      <div className="w-full min-w-0 space-y-6">
        <ClientPrivacyBadge />

        <div
          className="flex rounded-xl border border-white/10 bg-gray-950/50 p-1"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "file"}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
              mode === "file"
                ? "bg-cyan-500/20 text-cyan-100"
                : "text-gray-400 hover:text-white",
            )}
            onClick={() => setMode("file")}
          >
            <Upload className="h-4 w-4" aria-hidden />
            {t.scanner.tabFile}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "camera"}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
              mode === "camera"
                ? "bg-cyan-500/20 text-cyan-100"
                : "text-gray-400 hover:text-white",
            )}
            onClick={() => setMode("camera")}
          >
            <Camera className="h-4 w-4" aria-hidden />
            {t.scanner.tabCamera}
          </button>
        </div>

        {mode === "file" ? (
          <>
            <div
              role="button"
              tabIndex={0}
              aria-label={t.scanner.dropTitle}
              className={`flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-4 py-10 text-center transition ${
                dragOver
                  ? "border-cyan-400/60 bg-cyan-500/10"
                  : "border-white/20 bg-white/[0.03] hover:border-cyan-400/40 hover:bg-white/[0.05]"
              }`}
              onClick={() => inputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  inputRef.current?.click();
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                onFiles(e.dataTransfer.files);
              }}
            >
              <Upload className="h-8 w-8 text-cyan-300" aria-hidden />
              <span className="font-medium text-white">
                {dragOver ? t.scanner.dropActive : t.scanner.dropTitle}
              </span>
              <span className="text-sm text-gray-400">{t.scanner.dropHint}</span>
              {busy ? (
                <span className="text-sm text-cyan-200">{t.scanner.scanning}</span>
              ) : null}
            </div>

            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              aria-label={t.scanner.dropTitle}
              className="sr-only"
              onChange={(e) => onFiles(e.target.files)}
            />

            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt=""
                className="mx-auto max-h-64 rounded-lg border border-white/10 object-contain"
              />
            ) : null}
          </>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-400">{t.scanner.cameraHint}</p>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                muted
                playsInline
              />
              {!cameraOn ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/80">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => void startCamera()}
                  >
                    {t.scanner.cameraStart}
                  </button>
                </div>
              ) : null}
            </div>
            {cameraOn ? (
              <button
                type="button"
                className="btn-secondary w-full sm:w-auto"
                onClick={stopCamera}
              >
                {t.scanner.cameraStop}
              </button>
            ) : null}
            <canvas ref={scanCanvasRef} className="sr-only" aria-hidden />
          </div>
        )}

        {error ? (
          <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
            {error}
          </p>
        ) : null}

        {result ? (
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-300">
              {t.scanner.result}
            </h2>
            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-3 text-sm whitespace-pre-wrap break-all text-gray-100">
              {result}
            </pre>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                className="btn-secondary w-full sm:w-auto"
                onClick={() => copyResult()}
              >
                {copied ? t.common.copied : t.common.copy}
              </button>
              <button
                type="button"
                className="btn-primary w-full sm:w-auto"
                onClick={() => requestExport(exportResult)}
              >
                {t.scanner.exportResult}
              </button>
              {linkHref ? (
                <Link
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  {t.scanner.openLink}
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      {exportModal}
    </>
  );
}
