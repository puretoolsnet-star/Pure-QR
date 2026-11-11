import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { DEFAULT_LOCALE } from "@/i18n/config";
import { localizedPath } from "@/lib/i18n/routing";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/og") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(localizedPath(DEFAULT_LOCALE, "/"), request.url),
    );
  }

  if (pathname.startsWith("/tools/")) {
    return NextResponse.redirect(
      new URL(localizedPath(DEFAULT_LOCALE, pathname), request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
