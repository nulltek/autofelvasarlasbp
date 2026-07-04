import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { addContactMessage, getSettings } from "@/lib/db";
import { escapeHtml, sendBusinessEmail } from "@/lib/email";
import type { ContactMessage } from "@/lib/types";

export const runtime = "nodejs";

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = value(formData, "name");
  const email = value(formData, "email");
  const phone = value(formData, "phone");
  const message = value(formData, "message");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "A név, az e-mail cím és az üzenet megadása kötelező." }, { status: 400 });
  }

  const settings = await getSettings();
  const text = [
    "Új kapcsolatfelvétel érkezett.",
    `Név: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || "-"}`,
    `Üzenet: ${message}`
  ].join("\n");

  const html = `
    <h1>Új kapcsolatfelvétel</h1>
    <p><strong>Név:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Üzenet:</strong> ${escapeHtml(message)}</p>
  `;

  const emailDelivery = await sendBusinessEmail({
    to: settings.businessEmail,
    subject: `Új weboldali üzenet: ${name}`,
    text,
    html
  });

  const contactMessage: ContactMessage = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    phone,
    message,
    emailDelivery
  };

  await addContactMessage(contactMessage);
  return NextResponse.redirect(new URL("/uzenet-elkuldve", request.url), 303);
}
