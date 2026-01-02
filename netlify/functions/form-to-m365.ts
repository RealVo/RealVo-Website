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

export const handler: Handler = async (event) => {
  // 🔥 Always log invocation (proves whether Netlify is calling this function)
  console.log("🔥 form-to-m365 invoked", {
    method: event.httpMethod,
    path: event.path,
    headers: event.headers,
    hasBody: !!event.body,
    bodyLen: event.body ? event.body.length : 0,
    query: event.queryStringParameters,
  });

  // ✅ CORS preflight (browser sends this before POST)
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  try {
    // ✅ Browser / health-check
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: { ...corsHeaders, "Content-Type": "text/plain" },
        body: "form-to-m365 is alive ✅",
      };
    }

    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers: corsHeaders,
        body: "Method Not Allowed",
      };
    }

    // // Simple shared-secret guard (TEMP DISABLED for testing)
// // const token = event.queryStringParameters?.token;
// // if (!token || token !== process.env.WEBHOOK_TOKEN) {
// //   console.log("⛔ Unauthorized", { tokenPresent: !!token });
// //   return { statusCode: 401, headers: corsHeaders, body: "Unauthorized" };
// // }

    // Parse and log payload shape
    const payload = JSON.parse(event.body || "{}") as NetlifyFormPayload;
    console.log("📦 parsed payload keys:", payload ? Object.keys(payload) : null);
    console.log("🧾 form/data snapshot:", {
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
    const notifyTo = process.env.NOTIFY_TO!; // e.g. dale@realvo.io

    console.log("🔐 getting Graph token...");
    const accessToken = await getGraphToken();
    console.log("✅ got Graph token", { tokenLen: accessToken?.length || 0 });

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
        toRecipients: [{ emailAddress: { address: notifyTo } }],
        replyTo: (data as any)?.email
          ? [{ emailAddress: { address: String((data as any).email) } }]
          : undefined,
      },
      saveToSentItems: "true",
    };

    console.log("📨 sending via Graph", { graphUrl, sendFrom, notifyTo, subject });

    const res = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    });

    // Graph sendMail commonly returns 202 Accepted with empty body
    const text = await res.text().catch(() => "");
    console.log("📬 Graph response", {
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      bodyPreview: text ? text.slice(0, 500) : "",
    });

    if (!res.ok) {
      throw new Error(`Graph sendMail error: ${res.status} ${text}`);
    }

    return { statusCode: 200, headers: corsHeaders, body: "OK" };
  } catch (err: any) {
    console.error("💥 handler error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: `Error: ${err?.message || err}`,
    };
  }
};
