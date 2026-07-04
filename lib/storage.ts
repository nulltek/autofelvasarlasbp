import path from "path";

const rootDir = process.cwd();

export const dataDir = process.env.DATA_DIR || path.join(rootDir, "data");
export const uploadDir = process.env.UPLOAD_DIR || path.join(rootDir, "public", "uploads");

export function uploadPath(...parts: string[]) {
  return path.join(uploadDir, ...parts);
}

export function uploadUrl(...parts: string[]) {
  return `/uploads/${parts.map((part) => encodeURIComponent(part)).join("/")}`;
}

export function safeUploadFilePath(parts: string[]) {
  const cleanParts = parts.filter(Boolean);
  const filePath = path.resolve(uploadDir, ...cleanParts);
  const uploadRoot = path.resolve(uploadDir);

  if (filePath !== uploadRoot && !filePath.startsWith(`${uploadRoot}${path.sep}`)) {
    throw new Error("Invalid upload path");
  }

  return filePath;
}
