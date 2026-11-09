import type { Locale } from "@/i18n/locales";
import { LOCALES } from "@/i18n/locales";
import { localizedPath } from "@/lib/i18n/routing";

export type EcosystemProjectId =
  | "purepdf"
  | "pureqr"
  | "pureSign"
  | "pureTable";

export type EcosystemProjectStatus = "active" | "comingSoon";

export type EcosystemProjectMeta = {
  id: EcosystemProjectId;
  status: EcosystemProjectStatus;
  /** In-app path (locale added by caller) or site origin without a locale segment. */
  href?: string;
  external?: boolean;
};

function origin(value: string | undefined, fallback: string) {
  return (value?.trim() || fallback).replace(/\/$/, "");
}

const purepdfOrigin = origin(
  process.env.NEXT_PUBLIC_ECOSYSTEM_PUREPDF_URL,
  "http://localhost:3000",
);

const pureSignOrigin = origin(
  process.env.NEXT_PUBLIC_ECOSYSTEM_PURESIGN_URL,
  "http://localhost:3004",
);

const pureTableOrigin = origin(
  process.env.NEXT_PUBLIC_ECOSYSTEM_PURETABLE_URL,
  "https://puretable.app",
);

export const ECOSYSTEM_PROJECTS: EcosystemProjectMeta[] = [
  {
    id: "purepdf",
    status: "active",
    href: purepdfOrigin,
    external: true,
  },
  { id: "pureqr", status: "active", href: "/" },
  {
    id: "pureSign",
    status: "active",
    href: pureSignOrigin,
    external: true,
  },
  {
    id: "pureTable",
    status: "active",
    href: pureTableOrigin,
    external: true,
  },
];

const localeSuffix = new RegExp(`/(${LOCALES.join("|")})$`);

/** Keep the selected locale when opening another ecosystem site. */
export function ecosystemHref(
  project: EcosystemProjectMeta,
  locale: Locale,
): string | undefined {
  if (!project.href) return undefined;
  if (!project.external) return localizedPath(locale, project.href);
  const base = project.href.replace(/\/$/, "").replace(localeSuffix, "");
  return `${base}/${locale}`;
}
