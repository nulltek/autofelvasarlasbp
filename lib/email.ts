import nodemailer from "nodemailer";
import { addEmailLog } from "@/lib/db";

type MailInput = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendBusinessEmail(input: MailInput): Promise<"sent" | "logged" | "failed"> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    await addEmailLog({
      to: input.to,
      subject: input.subject,
      text: input.text
    });
    return "logged";
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: input.to,
      subject: input.subject,
      text: input.text,
      html: input.html
    });

    return "sent";
  } catch (error) {
    console.error("Email send failed", error);
    await addEmailLog({
      to: input.to,
      subject: `[FAILED] ${input.subject}`,
      text: input.text
    });
    return "failed";
  }
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
