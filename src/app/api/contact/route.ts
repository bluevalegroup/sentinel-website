import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, workEmail, orgName, country, envType, cameraCount, requirements } = body;

    if (!fullName || !workEmail) {
      return NextResponse.json(
        { error: "Full name and email are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "nummitech@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Sentinel Enquiries <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn(
        "[Sentinel API] RESEND_API_KEY is not set in .env.local. Submission logged to console:",
        { fullName, workEmail, orgName, country, envType, cameraCount, requirements }
      );
      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Logged in development (add RESEND_API_KEY in .env.local to dispatch real emails).",
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = `[Sentinel Demo Request] ${fullName} (${country || "Global"}) — ${orgName || "Direct Briefing"}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #07090e; margin: 0; padding: 32px 16px; color: #f1f5f9; }
            .container { max-width: 600px; margin: 0 auto; background: #0e1117; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6); }
            .header { background: linear-gradient(135deg, #0b1320 0%, #05080e 100%); padding: 32px 28px; border-bottom: 1px solid rgba(255,255,255,0.08); }
            .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); margin-bottom: 12px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
            .header p { color: rgba(255,255,255,0.65); margin: 6px 0 0 0; font-size: 13px; }
            .content { padding: 28px; }
            .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .meta-table td { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
            .meta-table td.label { font-weight: 600; color: #94a3b8; width: 140px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
            .meta-table td.value { color: #ffffff; font-weight: 500; }
            .message-box { background: rgba(255,255,255,0.03); border-left: 3px solid #3b82f6; border-radius: 4px; padding: 18px; margin-top: 20px; }
            .message-box h4 { margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { background: rgba(0,0,0,0.3); padding: 16px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.06); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">Tactical Briefing</span>
              <h1>Sentinel // Demo Briefing Request</h1>
              <p>Submitted via Sentinel Platform portal</p>
            </div>
            <div class="content">
              <table class="meta-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${fullName}</td>
                </tr>
                <tr>
                  <td class="label">Work Email</td>
                  <td class="value"><a href="mailto:${workEmail}" style="color: #60a5fa; text-decoration: none;">${workEmail}</a></td>
                </tr>
                <tr>
                  <td class="label">Organization</td>
                  <td class="value">${orgName || "Not specified"}</td>
                </tr>
                <tr>
                  <td class="label">Country</td>
                  <td class="value"><strong>${country || "Not specified"}</strong></td>
                </tr>
                <tr>
                  <td class="label">Primary Environment</td>
                  <td class="value">${envType || "Not specified"}</td>
                </tr>
                <tr>
                  <td class="label">Camera Infrastructure</td>
                  <td class="value">${cameraCount || "Not specified"}</td>
                </tr>
              </table>

              ${
                requirements
                  ? `
                <div class="message-box">
                  <h4>Intelligence Requirements &amp; Notes</h4>
                  <p>${requirements.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              Direct reply will go to <strong>${workEmail}</strong>
            </div>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: workEmail,
      subject: emailSubject,
      html: htmlContent,
    });

    if (result.error) {
      console.error("[Sentinel API] Resend error:", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (err: unknown) {
    console.error("[Sentinel API] Unexpected error:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
