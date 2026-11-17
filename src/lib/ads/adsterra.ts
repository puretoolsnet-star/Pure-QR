const NATIVE_SRC = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SRC?.trim() ?? "";
const NATIVE_ID = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_ID?.trim() ?? "";
const SOCIAL_SRC =
  process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_SRC?.trim() ||
  "https://bauval.org/14/12dce9c8fc0a8bb8903d0b79449a67aa";

/** Social Bar — підключається глобально в root layout. */
export const ADSTERRA_SOCIAL_BAR_SRC = SOCIAL_SRC;
const POPUNDER_SRC = process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SRC?.trim() ?? "";

export const ADSTERRA_WATCH_MS = 12_000;

export const ADSTERRA_BANNER = {
  key:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY?.trim() ||
    "d880160c56795af463ca0f10208784b2",
  src:
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_SRC?.trim() ||
    "https://bauval.org/22/d880160c56795af463ca0f10208784b2",
  width: 300,
  height: 250,
} as const;

/** 300×250 iframe — монтується в контейнер сайдбару. */
export function mountAdsterraBanner(container: HTMLElement): () => void {
  const { key, src, width, height } = ADSTERRA_BANNER;
  if (!key || !src) return () => {};

  container.replaceChildren();

  const optionsScript = document.createElement("script");
  optionsScript.textContent = `atOptions = {
    'key' : '${key}',
    'format' : 'iframe',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };`;

  const invokeScript = document.createElement("script");
  invokeScript.async = true;
  invokeScript.setAttribute("data-cfasync", "false");
  invokeScript.src = src.startsWith("//") ? `https:${src}` : src;

  container.appendChild(optionsScript);
  container.appendChild(invokeScript);

  return () => {
    container.replaceChildren();
    const w = window as Window & { atOptions?: { key?: string } };
    if (w.atOptions?.key === key) {
      delete w.atOptions;
    }
  };
}

export const adsterraNative = {
  src: NATIVE_SRC,
  containerId: NATIVE_ID,
};

function ensureScript(src: string, id: string) {
  if (!src || typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const normalized = src.startsWith("//") ? `https:${src}` : src;
  if (document.querySelector(`script[src="${normalized}"]`)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  script.src = src.startsWith("//") ? `https:${src}` : src;
  document.body.appendChild(script);
}

export function loadAdsterraNative() {
  if (!NATIVE_SRC) return;
  ensureScript(NATIVE_SRC, "adsterra-native-invoke");
}

export function triggerAdsterraReward() {
  if (typeof window === "undefined") return;
  const popunder = POPUNDER_SRC || SOCIAL_SRC;
  if (popunder) ensureScript(popunder, "adsterra-reward-trigger");
  const invoke = (window as Window & { invoke?: () => void }).invoke;
  if (typeof invoke === "function") invoke();
}
