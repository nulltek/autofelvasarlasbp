import { createHash } from "crypto";
import { cookies } from "next/headers";

export const adminCookieName = "autofelvasarlas_admin";

function adminPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

export function adminToken() {
  return createHash("sha256").update(`admin:${adminPassword()}`).digest("hex");
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(adminCookieName)?.value === adminToken();
}
