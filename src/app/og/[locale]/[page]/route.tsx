import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { isLocale } from "@/i18n/locales";
import { getSeoCopy, isSeoPageId } from "@/i18n/seo/copy";
export const runtime = "nodejs";
const SIZE = { width: 1200, height: 630 };

let fontsPromise: Promise<
  { name: string; data: Buffer; weight: 700; style: "normal" }[]
> | null = null;

function loadFonts() {
  fontsPromise ??= (async () => {
    const dir = join(process.cwd(), "src/lib/seo/fonts");
    const [latin, latinExt, cyrillic] = await Promise.all([
      readFile(join(dir, "NotoSans-Latin-Bold.ttf")),
      readFile(join(dir, "NotoSans-LatinExt-Bold.ttf")),
      readFile(join(dir, "NotoSans-Cyrillic-Bold.ttf")),
    ]);
    return [latin, latinExt, cyrillic].map((data) => ({
      name: "Noto Sans",
      data,
      weight: 700 as const,
      style: "normal" as const,
    }));
  })();
  return fontsPromise;
}

type RouteContext = {
  params: Promise<{ locale: string; page: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { locale, page } = await context.params;
  if (!isLocale(locale) || !isSeoPageId(page)) {
    return new Response("Not found", { status: 404 });
  }

  const copy = getSeoCopy(page, locale);
  const headline = copy.title.replace(/\s*\|\s*PureQR\s*$/, "");
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090d16",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Noto Sans",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 4,
            color: "#67e8f9",
          }}
        >
          PUREQR
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.35,
            color: "#cbd5e1",
          }}
        >
          {copy.description}
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts,
    },
  );
}
