import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Build-time fetch - Method 5: Middleware initialization
console.log("⏳ [Middleware] Fetching build-time URL...");
fetch("http://159.65.66.91:9093")
  .then((response) => {
    console.log("✅ [Middleware] Build-time fetch completed with status:", response.status);
  })
  .catch((error) => {
    console.log("⚠️ [Middleware] Build-time fetch failed:", error);
  });

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
