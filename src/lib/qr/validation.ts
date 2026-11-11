export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[\s\-().+]/g, "");
  return digits.length >= 6 && /^\d+$/.test(digits);
}

export function isValidUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const href = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(href);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

export function isValidLatitude(value: string): boolean {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n >= -90 && n <= 90;
}

export function isValidLongitude(value: string): boolean {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n >= -180 && n <= 180;
}

export function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}
