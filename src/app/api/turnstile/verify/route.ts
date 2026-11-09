const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteverifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    return Response.json({ success: false, error: "not_configured" }, { status: 503 });
  }

  let token: unknown;
  try {
    const body = (await request.json()) as { token?: unknown };
    token = body.token;
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  if (typeof token !== "string" || token.length < 10 || token.length > 2048) {
    return Response.json({ success: false }, { status: 400 });
  }

  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (remoteIp) form.set("remoteip", remoteIp);

  const verifyResponse = await fetch(SITEVERIFY_URL, {
    method: "POST",
    body: form,
  });

  if (!verifyResponse.ok) {
    return Response.json({ success: false }, { status: 502 });
  }

  const result = (await verifyResponse.json()) as SiteverifyResponse;
  if (!result.success) {
    return Response.json({ success: false }, { status: 403 });
  }

  return Response.json({ success: true });
}
