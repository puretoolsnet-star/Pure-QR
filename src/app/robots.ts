import type { MetadataRoute } from "next";

import { CANONICAL_SITE_ORIGIN } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  const base = CANONICAL_SITE_ORIGIN;
  const host = base.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/og/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host,
  };
}
