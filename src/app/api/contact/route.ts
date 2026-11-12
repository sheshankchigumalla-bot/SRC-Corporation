import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
};

const isNonEmptyString = (value: unknown, max: number): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= max;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    !isNonEmptyString(payload.name, 100) ||
    !isNonEmptyString(payload.email, 200) ||
    !isNonEmptyString(payload.phone, 40) ||
    !isNonEmptyString(payload.message, 4000)
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const email = payload.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_RECIPIENT_EMAIL.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const name = payload.name.trim();
  const phone = payload.phone.trim();
  const message = payload.message.trim();

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const text = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New contact form message - ${name}`,
    html,
    text,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Could not send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
