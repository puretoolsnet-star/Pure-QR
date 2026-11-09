export function resolveExternalUrl(text: string): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      return new URL(trimmed).href;
    } catch {
      return null;
    }
  }

  if (/^www\./i.test(trimmed)) {
    try {
      return new URL(`https://${trimmed}`).href;
    } catch {
      return null;
    }
  }

  return null;
}
