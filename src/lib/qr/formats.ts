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
