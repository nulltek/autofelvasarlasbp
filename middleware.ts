import { NextRequest, NextResponse } from "next/server";
import { defaultAdminAccessPath, getAdminAccessPath, internalAdminPath } from "@/lib/admin-path";

const robotHeaderValue = "noindex, nofollow, noarchive, nosnippet, noimageindex";

function withAdminBotHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", robotHeaderValue);
  response.headers.set("Cache-Control", "no-store, private");
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const allowedAdminPaths = Array.from(new Set([getAdminAccessPath(), defaultAdminAccessPath]));
  const matchedAdminPath = allowedAdminPaths.find((path) => pathname === path || pathname.startsWith(`${path}/`));
  const isPrivateAdminPath = Boolean(matchedAdminPath);
  const isAdminPath = pathname === internalAdminPath || pathname.startsWith(`${internalAdminPath}/`);

  if (!isAdminPath) {
    return NextResponse.next();
  }

  if (!isPrivateAdminPath) {
    return withAdminBotHeaders(new NextResponse(null, { status: 404 }));
  }

  return withAdminBotHeaders(NextResponse.next());
}

export const config = {
  matcher: ["/admin/:path*"]
};
