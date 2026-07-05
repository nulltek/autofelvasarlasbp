import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { addInquiry, getSettings } from "@/lib/db";
import { escapeHtml, sendBusinessEmail } from "@/lib/email";
import { uploadPath, uploadUrl } from "@/lib/storage";
import type { Inquiry, StoredFile } from "@/lib/types";

export const runtime = "nodejs";

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function cleanFileName(name: string) {
  const base = name.split(/[\\/]/).pop() || "file";
  return base.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
}

async function saveUploads(files: File[], inquiryId: string, group: string): Promise<StoredFile[]> {
  const saved: StoredFile[] = [];
  const uploadDir = uploadPath("inquiries", inquiryId, group);
  await mkdir(uploadDir, { recursive: true });

  for (const file of files) {
    if (!file.size) continue;

    const fileName = `${randomUUID()}-${cleanFileName(file.name)}`;
    const filePath = path.join(uploadDir, fileName);
    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, bytes);

    saved.push({
      name: file.name,
      url: uploadUrl("inquiries", inquiryId, group, fileName),
      size: file.size,
      type: file.type
    });
  }

  return saved;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const carBrand = value(formData, "carBrand");
  const carModel = value(formData, "carModel");
  const carColor = value(formData, "carColor");
  const location = value(formData, "location");
  const sellerPhone = value(formData, "sellerPhone");
  const sellerEmail = value(formData, "sellerEmail");
  const photoFiles = formData.getAll("carPhotos").filter((item): item is File => item instanceof File && item.size > 0);
  const dataFiles = formData.getAll("dataFiles").filter((item): item is File => item instanceof File && item.size > 0);

  if (!carBrand || !carModel || !carColor || !location || (!sellerPhone && !sellerEmail) || photoFiles.length === 0) {
    return NextResponse.json(
      { error: "A márka, modell, szín, helyszín, eladói elérhetőség és legalább egy autókép megadása kötelező." },
      { status: 400 }
    );
  }

  const id = randomUUID();
  const settings = await getSettings();
  const carPhotos = await saveUploads(photoFiles, id, "photos");
  const savedDataFiles = await saveUploads(dataFiles, id, "data");

  const baseInquiry = {
    id,
    createdAt: new Date().toISOString(),
    status: "new" as const,
    sellerName: value(formData, "sellerName"),
    sellerEmail,
    sellerPhone,
    carBrand,
    carModel,
    carColor,
    carYear: value(formData, "carYear"),
    mileage: value(formData, "mileage"),
    fuel: value(formData, "fuel"),
    transmission: value(formData, "transmission"),
    condition: value(formData, "condition"),
    location,
    askingPrice: value(formData, "askingPrice"),
    carData: value(formData, "carData"),
    problems: value(formData, "problems"),
    carPhotos,
    dataFiles: savedDataFiles
  };

  const text = [
    "Új autófelvásárlási ajánlatkérés érkezett.",
    `Név: ${baseInquiry.sellerName || "-"}`,
    `Telefon: ${sellerPhone || "-"}`,
    `E-mail: ${sellerEmail || "-"}`,
    `Márka: ${carBrand}`,
    `Modell: ${carModel}`,
    `Szín: ${carColor}`,
    `Helyszín: ${location}`,
    `Évjárat: ${baseInquiry.carYear || "-"}`,
    `Futott km: ${baseInquiry.mileage || "-"}`,
    `Üzemanyag: ${baseInquiry.fuel || "-"}`,
    `Váltó: ${baseInquiry.transmission || "-"}`,
    `Állapot: ${baseInquiry.condition || "-"}`,
    `Irányár: ${baseInquiry.askingPrice || "-"}`,
    `Autó adatok: ${baseInquiry.carData || "-"}`,
    `Ismert hibák: ${baseInquiry.problems || "-"}`,
    `Képek száma: ${carPhotos.length}`,
    `Adatfájlok száma: ${savedDataFiles.length}`
  ].join("\n");

  const html = `
    <h1>Új autófelvásárlási ajánlatkérés</h1>
    <p><strong>Név:</strong> ${escapeHtml(baseInquiry.sellerName || "-")}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(sellerPhone || "-")}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(sellerEmail || "-")}</p>
    <p><strong>Márka:</strong> ${escapeHtml(carBrand)}</p>
    <p><strong>Modell:</strong> ${escapeHtml(carModel)}</p>
    <p><strong>Szín:</strong> ${escapeHtml(carColor)}</p>
    <p><strong>Helyszín:</strong> ${escapeHtml(location)}</p>
    <p><strong>Évjárat:</strong> ${escapeHtml(baseInquiry.carYear || "-")}</p>
    <p><strong>Futott km:</strong> ${escapeHtml(baseInquiry.mileage || "-")}</p>
    <p><strong>Üzemanyag:</strong> ${escapeHtml(baseInquiry.fuel || "-")}</p>
    <p><strong>Váltó:</strong> ${escapeHtml(baseInquiry.transmission || "-")}</p>
    <p><strong>Állapot:</strong> ${escapeHtml(baseInquiry.condition || "-")}</p>
    <p><strong>Irányár:</strong> ${escapeHtml(baseInquiry.askingPrice || "-")}</p>
    <p><strong>Autó adatok:</strong> ${escapeHtml(baseInquiry.carData || "-")}</p>
    <p><strong>Ismert hibák:</strong> ${escapeHtml(baseInquiry.problems || "-")}</p>
    <p><strong>Képek:</strong> ${carPhotos.length} db</p>
    <p><strong>Adatfájlok:</strong> ${savedDataFiles.length} db</p>
  `;

  const emailDelivery = await sendBusinessEmail({
    to: settings.businessEmail,
    subject: `Új ajánlatkérés: ${carBrand} ${carModel}`,
    text,
    html
  });

  const inquiry: Inquiry = {
    ...baseInquiry,
    emailDelivery
  };

  await addInquiry(inquiry);
  return NextResponse.redirect(new URL("/ajanlatkeres/koszonjuk", request.url), 303);
}
