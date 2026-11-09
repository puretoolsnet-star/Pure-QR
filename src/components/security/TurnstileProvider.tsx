"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      appearance: "execute";
      execution: "render";
      theme: "dark";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileContextValue = {
  /** Resolves true when a background token has been accepted by Siteverify. */
  assertHuman: () => Promise<boolean>;
};

const TurnstileContext = createContext<TurnstileContextValue>({
  assertHuman: async () => true,
});

export function useTurnstile() {
  return useContext(TurnstileContext);
}

export function TurnstileProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const tokenRef = useRef<string | null>(null);
  const waitersRef = useRef<Array<(token: string | null) => void>>([]);
  const queueRef = useRef(Promise.resolve());

  const deliver = useCallback((token: string | null) => {
    if (token) tokenRef.current = token;
    const waiters = waitersRef.current;
    waitersRef.current = [];
    for (const waiter of waiters) waiter(token);
  }, []);

  const waitForToken = useCallback(() => {
    if (tokenRef.current) return Promise.resolve(tokenRef.current);
    return new Promise<string | null>((resolve) => {
      const timer = window.setTimeout(() => resolve(null), 12_000);
      waitersRef.current.push((token) => {
        window.clearTimeout(timer);
        resolve(token);
      });
    });
  }, []);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;
    const container = containerRef.current;
    let cancelled = false;
    let widgetId: string | undefined;

    const mount = () => {
      if (cancelled || !window.turnstile || widgetId) return;
      widgetId = window.turnstile.render(container, {
        sitekey: SITE_KEY,
        appearance: "execute",
        execution: "render",
        theme: "dark",
        callback: (token) => deliver(token),
        "error-callback": () => deliver(null),
        "expired-callback": () => {
          tokenRef.current = null;
        },
      });
      widgetIdRef.current = widgetId;
    };

    if (window.turnstile) {
      mount();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${SCRIPT_SRC}"]`,
      );
      const script = existing ?? document.createElement("script");
      script.addEventListener("load", mount, { once: true });
      if (!existing) {
        script.src = SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      widgetIdRef.current = null;
      tokenRef.current = null;
    };
  }, [deliver]);

  const assertHuman = useCallback(() => {
    const run = async () => {
      if (!SITE_KEY) return true;

      const token = await waitForToken();
      if (!token) return false;
      tokenRef.current = null;

      try {
        const response = await fetch("/api/turnstile/verify", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const payload = (await response.json()) as { success?: boolean };
        return response.ok && payload.success === true;
      } catch {
        return false;
      } finally {
        const id = widgetIdRef.current;
        if (id && window.turnstile) window.turnstile.reset(id);
      }
    };

    const job = queueRef.current.then(run, run);
    queueRef.current = job.then(
      () => undefined,
      () => undefined,
    );
    return job;
  }, [waitForToken]);

  return (
    <TurnstileContext.Provider value={{ assertHuman }}>
      {children}
      {SITE_KEY ? (
        <div
          ref={containerRef}
          aria-hidden
          className="pointer-events-none absolute h-px w-px overflow-hidden"
        />
      ) : null}
    </TurnstileContext.Provider>
  );
}
