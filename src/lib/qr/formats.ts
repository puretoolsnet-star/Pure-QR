export type WifiEncryption = "WPA" | "WEP" | "nopass";

export function escapeWifiField(value: string): string {
  return value.replace(/([\\;,:"])/g, "\\$1");
}

/** Standard Wi‑Fi QR: WIFI:S:<SSID>;T:<TYPE>;P:<PASSWORD>;H:<HIDDEN>;; */
export function buildWifiPayload(input: {
  ssid: string;
  password: string;
  encryption: WifiEncryption;
  hidden: boolean;
}): string {
  const ssid = escapeWifiField(input.ssid.trim());
  const type =
    input.encryption === "nopass"
      ? "nopass"
      : input.encryption === "WEP"
        ? "WEP"
        : "WPA";
  const hidden = input.hidden ? "true" : "false";
  const password =
    type === "nopass" ? "" : escapeWifiField(input.password);
  const pSegment = type === "nopass" ? "" : `P:${password};`;

  return `WIFI:S:${ssid};T:${type};${pSegment}H:${hidden};;`;
}

export function buildVCardPayload(input: {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  phone: string;
  email: string;
  website: string;
}): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${input.lastName};${input.firstName};;;`,
    `FN:${[input.firstName, input.lastName].filter(Boolean).join(" ")}`,
  ];

  if (input.company.trim()) {
    lines.push(`ORG:${input.company.trim()}`);
  }
  if (input.jobTitle.trim()) {
    lines.push(`TITLE:${input.jobTitle.trim()}`);
  }
  if (input.phone.trim()) {
    lines.push(`TEL;TYPE=CELL:${input.phone.trim()}`);
  }
  if (input.email.trim()) {
    lines.push(`EMAIL:${input.email.trim()}`);
  }
  if (input.website.trim()) {
    const url = input.website.trim().startsWith("http")
      ? input.website.trim()
      : `https://${input.website.trim()}`;
    lines.push(`URL:${url}`);
  }

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

function encodeUriComponentSafe(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, (c) =>
    `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

export function buildTelPayload(phone: string): string {
  const cleaned = phone.trim().replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : "";
}

export function buildMailtoPayload(input: {
  to: string;
  subject: string;
  body: string;
}): string {
  const to = input.to.trim();
  if (!to) return "";
  const params = new URLSearchParams();
  if (input.subject.trim()) params.set("subject", input.subject.trim());
  if (input.body.trim()) params.set("body", input.body.trim());
  const query = params.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
}

export function buildSmsPayload(input: { phone: string; message: string }): string {
  const phone = input.phone.trim().replace(/[^\d+]/g, "");
  if (!phone) return "";
  const body = input.message.trim();
  if (!body) return `SMSTO:${phone}`;
  return `SMSTO:${phone}:${body}`;
}

export function buildGeoPayload(input: {
  lat: string;
  lng: string;
  label?: string;
}): string {
  const lat = Number.parseFloat(input.lat);
  const lng = Number.parseFloat(input.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return "";
  const label = input.label?.trim();
  if (label) {
    return `geo:${lat},${lng}?q=${encodeUriComponentSafe(`${lat},${lng}(${label})`)}`;
  }
  return `geo:${lat},${lng}`;
}

export type SocialPlatform =
  | "instagram"
  | "telegram"
  | "whatsapp"
  | "facebook"
  | "x"
  | "tiktok"
  | "linkedin"
  | "youtube"
  | "custom";

const SOCIAL_URL_BUILDERS: Record<
  Exclude<SocialPlatform, "custom">,
  (handle: string) => string
> = {
  instagram: (h) => `https://instagram.com/${h.replace(/^@/, "")}`,
  telegram: (h) => `https://t.me/${h.replace(/^@/, "")}`,
  whatsapp: (h) => `https://wa.me/${h.replace(/\D/g, "")}`,
  facebook: (h) =>
    h.includes("/")
      ? h.startsWith("http")
        ? h
        : `https://facebook.com/${h}`
      : `https://facebook.com/${h}`,
  x: (h) => `https://x.com/${h.replace(/^@/, "")}`,
  tiktok: (h) => `https://tiktok.com/@${h.replace(/^@/, "")}`,
  linkedin: (h) =>
    h.includes("/")
      ? h.startsWith("http")
        ? h
        : `https://linkedin.com/in/${h}`
      : `https://linkedin.com/in/${h}`,
  youtube: (h) =>
    h.startsWith("http")
      ? h
      : `https://youtube.com/@${h.replace(/^@/, "")}`,
};

export function buildSocialPayload(input: {
  platform: SocialPlatform;
  handle: string;
  customUrl: string;
}): string {
  if (input.platform === "custom") {
    const url = input.customUrl.trim();
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
  }
  const handle = input.handle.trim();
  if (!handle) return "";
  return SOCIAL_URL_BUILDERS[input.platform](handle);
}

export type BioLinkRow = { label: string; url: string };

export function buildMultiLinkPayload(input: {
  title: string;
  links: BioLinkRow[];
}): string {
  const valid = input.links.filter((l) => l.url.trim() && l.label.trim());
  if (valid.length === 0) return "";
  if (valid.length === 1) {
    const url = valid[0].url.trim();
    return url.startsWith("http") ? url : `https://${url}`;
  }
  const title = input.title.trim() || "Links";
  const items = valid
    .map((l) => {
      const href = l.url.trim().startsWith("http")
        ? l.url.trim()
        : `https://${l.url.trim()}`;
      return `<li><a href="${href.replace(/"/g, "&quot;")}">${l.label.trim().replace(/</g, "&lt;")}</a></li>`;
    })
    .join("");
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title.replace(/</g, "&lt;")}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:system-ui,sans-serif;background:#030712;color:#e5e7eb;padding:1.5rem}a{display:block;padding:.75rem 1rem;margin:.5rem 0;border-radius:.75rem;background:#164e63;color:#67e8f9;text-decoration:none}</style></head><body><h1>${title.replace(/</g, "&lt;")}</h1><ul style="list-style:none;padding:0">${items}</ul></body></html>`;
  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}

function formatIcsDateTime(local: string): string {
  const d = new Date(local);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

export function buildEventPayload(input: {
  title: string;
  location: string;
  start: string;
  end: string;
  description: string;
}): string {
  const title = input.title.trim();
  const start = formatIcsDateTime(input.start);
  if (!title || !start) return "";
  const end = formatIcsDateTime(input.end) || start;
  const uid = `pureqr-${Date.now()}@local`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PureQR//Event QR//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title.replace(/[,;\\]/g, "\\$&")}`,
  ];
  if (input.location.trim()) {
    lines.push(`LOCATION:${input.location.trim().replace(/[,;\\]/g, "\\$&")}`);
  }
  if (input.description.trim()) {
    lines.push(
      `DESCRIPTION:${input.description.trim().replace(/[,;\\]/g, "\\$&")}`,
    );
  }
  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildPdfUrlPayload(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
}

export function buildAppStorePayload(input: {
  iosUrl: string;
  androidUrl: string;
}): string {
  const ios = input.iosUrl.trim();
  const android = input.androidUrl.trim();
  if (ios && android) {
    return `${ios.startsWith("http") ? ios : `https://${ios}`}\n${android.startsWith("http") ? android : `https://${android}`}`;
  }
  const single = ios || android;
  if (!single) return "";
  return single.startsWith("http") ? single : `https://${single}`;
}

export type BulkRow = { label: string; value: string };

export function parseBulkCsv(text: string): BulkRow[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
  .filter(Boolean);
  if (lines.length === 0) return [];

  const rows: BulkRow[] = [];
  const first = lines[0].toLowerCase();
  const startIndex =
    first.includes("label") && first.includes("value") ? 1 : 0;

  for (let i = startIndex; i < lines.length; i += 1) {
    const line = lines[i];
    const comma = line.indexOf(",");
    const tab = line.indexOf("\t");
    const sep = tab >= 0 && (comma < 0 || tab < comma) ? tab : comma;
    if (sep < 0) {
      rows.push({ label: `QR ${rows.length + 1}`, value: line });
    } else {
      rows.push({
        label: line.slice(0, sep).trim() || `QR ${rows.length + 1}`,
        value: line.slice(sep + 1).trim(),
      });
    }
  }
  return rows.filter((r) => r.value.trim());
}
