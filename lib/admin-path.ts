export const internalAdminPath = "/admin";
export const defaultAdminAccessPath = "/admin/autofelvasarlas-privat-vezerlopult-2026";

export function normalizeAdminPath(value?: string) {
  const raw = (value || defaultAdminAccessPath).trim();
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, "") : internalAdminPath;
}

export function getAdminAccessPath() {
  return normalizeAdminPath(process.env.ADMIN_ACCESS_PATH);
}

export function adminPathWithError(error: string) {
  return `${getAdminAccessPath()}?error=${encodeURIComponent(error)}`;
}
