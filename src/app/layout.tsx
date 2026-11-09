import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";

import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { HTML_LANG } from "@/lib/seo/alternates";
import { siteMetadataBase } from "@/lib/seo/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...siteMetadataBase(),
  title: {
    default: "PureQR — QR Code Generator",
    template: "%s | PureQR",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const rawLocale = headerStore.get("x-pureqr-locale");
  const locale = rawLocale && isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <html lang={HTML_LANG[locale]} className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh max-w-full font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
