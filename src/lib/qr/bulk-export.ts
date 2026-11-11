import { downloadCanvasPng } from "@/lib/qr/export";

function safeFilename(label: string, index: number): string {
  const slug = label
    .trim()
    .replace(/[^\w\-+]+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 48);
  return `pureqr-${slug || `code-${index + 1}`}.png`;
}

export async function downloadQrCanvasesAsPngs(
  canvases: Array<{ canvas: HTMLCanvasElement | null; label: string }>,
): Promise<void> {
  for (let i = 0; i < canvases.length; i += 1) {
    const item = canvases[i];
    if (!item.canvas) continue;
    downloadCanvasPng(item.canvas, safeFilename(item.label, i));
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
}
