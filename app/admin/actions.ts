"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminCookieName, adminToken } from "@/lib/auth";
import { isAdminAuthenticated } from "@/lib/auth";
import { adminPathWithError, getAdminAccessPath } from "@/lib/admin-path";
import { addFaq, deleteFaq, deleteInquiry, saveSettings, updateFaq, updateInquiryStatus } from "@/lib/db";
import type { InquiryStatus, Settings } from "@/lib/types";

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

const inquiryStatuses: InquiryStatus[] = ["new", "seen", "contacted", "closed"];

export async function loginAdmin(formData: FormData) {
  const password = value(formData, "password");

  if (password !== (process.env.ADMIN_PASSWORD || "admin123")) {
    redirect(adminPathWithError("bad-password"));
  }

  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  redirect(getAdminAccessPath());
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieName);
  redirect(getAdminAccessPath());
}

export async function updateSettings(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  const settings: Settings = {
    businessEmail: value(formData, "businessEmail"),
    publicEmail: value(formData, "publicEmail"),
    phone: value(formData, "phone"),
    facebookUrl: value(formData, "facebookUrl"),
    tiktokUrl: value(formData, "tiktokUrl"),
    instagramUrl: value(formData, "instagramUrl"),
    openingHours: value(formData, "openingHours"),
    serviceArea: value(formData, "serviceArea")
  };

  await saveSettings(settings);
  revalidatePath("/", "layout");
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}

export async function createFaq(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  await addFaq(value(formData, "question"), value(formData, "answer"));
  revalidatePath("/gyik");
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}

export async function editFaq(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  await updateFaq(value(formData, "id"), value(formData, "question"), value(formData, "answer"));
  revalidatePath("/gyik");
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}

export async function removeFaq(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  await deleteFaq(value(formData, "id"));
  revalidatePath("/gyik");
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}

export async function changeInquiryStatus(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  const status = value(formData, "status") as InquiryStatus;
  if (!inquiryStatuses.includes(status)) return;

  await updateInquiryStatus(value(formData, "id"), status);
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}

export async function removeInquiry(formData: FormData) {
  if (!(await isAdminAuthenticated())) redirect(adminPathWithError("session"));

  await deleteInquiry(value(formData, "id"));
  revalidatePath("/admin");
  revalidatePath(getAdminAccessPath());
}
