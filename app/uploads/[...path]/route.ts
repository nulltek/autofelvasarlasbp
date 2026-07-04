import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { safeUploadFilePath } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".csv": "text/csv; charset=utf-8"
};

type UploadRouteProps = {
  params: Promise<{ path: string[] }>;
};

export async function GET(_request: Request, { params }: UploadRouteProps) {
  const { path: fileParts } = await params;

  try {
    const filePath = safeUploadFilePath(fileParts);
    const bytes = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();

    return new NextResponse(bytes, {
      headers: {
        "Content-Type": contentTypes[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch {
    return NextResponse.json({ error: "A fájl nem található." }, { status: 404 });
  }
}
