import type { Handler } from "@netlify/functions";

type NetlifyFormPayload = {
  site?: { name?: string; url?: string };
  form_name?: string;
  data?: Record<string, any>;
  created_at?: string;
};

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "https://realvo.io",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function getGraphToken() {
  const tenantId = process.env.M365_TENANT_ID!;
  const clientId = process.env.M365_CLIENT_ID!;
  const clientSecret = process.env.M365_CLIENT_SECRET!;

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams();
  body.set("client_id", clientId);
  body.set("client_secret", clientSecret);
  body.set("grant_type", "client_credentials");
  body.set("scope", "https://graph.microsoft.com/.default");

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Token error: ${res.status} ${txt}`);
  }

  const json = await res.json();
  return json.access_token as string;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * 🔔 Minimal alert throttling (prevents email spam if something is repeatedly broken).
 * In-memory per warm instance. Good enough for "don’t miss leads" alerting.
 */
let lastAlertAt = 0;
const ALERT_COOLDOWN_MS = 15 * 60 * 1000; // 15 minutes

async function trySendAlertEmail(params: {
  requestId: string;
  reason: string;
  details?: Record<string, any>;
}) {
  try {
    const now = Date.now();
    if (now - lastAlertAt < ALERT_COOLDOWN_MS) {
      console.log("🔕 alert suppressed (cooldown)", {
        requestId: params.requestId,
        secondsSinceLast: Math.round((now - lastAlertAt) / 1000),
      });
      return;
    }

    const sendFrom = process.env.M365_SEND_FROM!;
    const notifyTo = process.env.NOTIFY_TO!;

    if (!sendFrom || !notifyTo) {
      console.log("⚠️ alert not sent (missing env)", {
        requestId: params.requestId,
        hasSendFrom: !!sendFrom,
        hasNotifyTo: !!notifyTo,
      });
      return;
    }

    lastAlertAt = now;

    const accessToken = await getGraphToken();
    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      sendFrom
    )}/sendMail`;

    const lines = Object.entries(params.details || {}).map(([k, v]) => {
      const val = typeof v === "string" ? v : JSON.stringify(v);
      return `${k}: ${val}`;
    });

    const textBody = [
      "RealVo contact pipeline alert",
      "",
      `Reason: ${params.reason}`,
      `RequestId: ${params.requestId}`,
      "",
      ...lines,
    ].join("\n");

    const mail = {
      message: {
        subject: "ALERT: RealVo contact pipeline issue",
        body: { contentType: "Text", content: textBody },
        toRecipients: [{ emailAddress: { address: notifyTo } }],
      },
      saveToSentItems: "true",
    };

    const res = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    });

    const preview = await res.text().catch(() => "");
    console.log("🔔 alert email send result", {
      requestId: params.requestId,
      ok: res.ok,
      status: res.status,
      graphRequestId:
        res.headers.get("request-id") || res.headers.get("x-ms-request-id"),
      bodyPreview: preview ? preview.slice(0, 300) : "",
    });
  } catch (err: any) {
    console.error("🔔 alert email failed", { err });
    // nothing else we can do (avoid throwing)
  }
}

export const handler: Handler = async (event) => {
  const requestId =
    event.headers["x-nf-request-id"] ||
    (globalThis.crypto?.randomUUID ? crypto.randomUUID() : `req-${Date.now()}`);

  console.log("🔥 form-to-m365 invoked", {
    requestId,
    method: event.httpMethod,
    path: event.path,
    hasBody: !!event.body,
    bodyLen: event.body ? event.body.length : 0,
  });

  // ✅ CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  // ✅ Browser / health-check
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "text/plain" },
      body: "form-to-m365 is alive ✅",
    };
  }

  // ✅ Only POST should process form webhook
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200, // IMPORTANT: never 4xx/5xx to webhook infra
      headers: corsHeaders,
      body: "OK",
    };
  }

  // ✅ Shared-secret guard (Netlify HTTP POST notification includes ?token=...)
  const token = event.queryStringParameters?.token;
  if (!token || token !== process.env.WEBHOOK_TOKEN) {
    console.log("⛔ Unauthorized webhook call", {
      requestId,
      tokenPresent: !!token,
      ip: event.headers["x-nf-client-connection-ip"],
    });

    // 🔔 Alert (throttled) because a misconfigured token would silently kill leads.
    await trySendAlertEmail({
      requestId,
      reason: "Unauthorized webhook call (token missing or mismatch)",
      details: {
        ip: event.headers["x-nf-client-connection-ip"],
        tokenPresent: !!token,
        path: event.path,
      },
    });

    // IMPORTANT: return 200 so Netlify doesn't disable the webhook
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "OK",
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}") as NetlifyFormPayload;

    console.log("📦 parsed payload keys:", payload ? Object.keys(payload) : null);
    console.log("🧾 form/data snapshot:", {
      requestId,
      form_name: payload?.form_name,
      created_at: payload?.created_at,
      data_keys: payload?.data ? Object.keys(payload.data) : [],
    });

    const formName = payload.form_name || "contact";
    const data = payload.data || {};
    const createdAt = payload.created_at || new Date().toISOString();
    const siteUrl = payload.site?.url || "https://realvo.io";

    const rows = Object.entries(data).map(
      ([k, v]) => `<tr>
        <td style="padding:6px 10px;border:1px solid #eee;"><b>${escapeHtml(
          k
        )}</b></td>
        <td style="padding:6px 10px;border:1px solid #eee;">${escapeHtml(
          String(v ?? "")
        )}</td>
      </tr>`
    );

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;">
        <h2 style="margin:0 0 10px;">New RealVo Website Contact</h2>
        <p style="margin:0 0 8px;"><b>Form:</b> ${escapeHtml(formName)}</p>
        <p style="margin:0 0 16px;"><b>Submitted:</b> ${escapeHtml(createdAt)}</p>
        <p style="margin:0 0 16px;"><b>Site:</b> ${escapeHtml(siteUrl)}</p>

        <table style="border-collapse:collapse;width:100%;max-width:760px;">
          <tbody>${rows.join("")}</tbody>
        </table>
      </div>
    `;

    const sendFrom = process.env.M365_SEND_FROM!; // e.g. dale@videobooth.ca
    const notifyTo = process.env.NOTIFY_TO!; // primary recipient
    const notifyToSecondary = process.env.NOTIFY_TO_SECONDARY; // optional fallback

    console.log("🔐 getting Graph token...", { requestId });
    const accessToken = await getGraphToken();
    console.log("✅ got Graph token", { requestId, tokenLen: accessToken?.length || 0 });

    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      sendFrom
    )}/sendMail`;

    const subject = `RealVo Inquiry – Website Contact Form (${
      (data as any)?.organization || "New"
    })`;

    const mail = {
      message: {
        subject,
        body: { contentType: "HTML", content: html },
        toRecipients: [
          { emailAddress: { address: notifyTo } },
          ...(notifyToSecondary
            ? [{ emailAddress: { address: notifyToSecondary } }]
            : []),
        ],
        replyTo: (data as any)?.email
          ? [{ emailAddress: { address: String((data as any).email) } }]
          : undefined,
      },
      saveToSentItems: "true",
    };

    console.log("📨 sending via Graph", {
      requestId,
      graphUrl,
      sendFrom,
      notifyTo,
      notifyToSecondary: notifyToSecondary ? "set" : "not-set",
      subject,
    });

    const res = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    });

    const text = await res.text().catch(() => "");
    const graphRequestId =
      res.headers.get("request-id") || res.headers.get("x-ms-request-id");

    console.log("📬 Graph response", {
      requestId,
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      graphRequestId,
      date: res.headers.get("date"),
      bodyPreview: text ? text.slice(0, 500) : "",
    });

    if (!res.ok) {
      // 🔔 Alert you, but still return 200 to Netlify
      await trySendAlertEmail({
        requestId,
        reason: "Graph sendMail returned non-OK",
        details: {
          status: res.status,
          statusText: res.statusText,
          graphRequestId: graphRequestId || "n/a",
          bodyPreview: text ? text.slice(0, 500) : "",
        },
      });

      return { statusCode: 200, headers: corsHeaders, body: "OK" };
    }

    return { statusCode: 200, headers: corsHeaders, body: "OK" };
  } catch (err: any) {
    console.error("💥 handler error:", { requestId, err });

    // 🔔 Alert you, but still return 200 to Netlify
    await trySendAlertEmail({
      requestId,
      reason: "Handler threw exception",
      details: {
        message: err?.message || String(err),
        stack: err?.stack ? String(err.stack).slice(0, 1500) : "n/a",
      },
    });

    // IMPORTANT: never 500 back to Netlify webhook
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "OK",
    };
  }
};


