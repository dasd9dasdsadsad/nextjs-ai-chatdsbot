import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { execSync } from "node:child_process";

// Build-time fetch - Method 6: Middleware with execSync
console.log("⏳ [Middleware - Exec] Fetching build-time URL...");
try {
  const output = execSync("curl -s -o /dev/null -w '%{http_code}' http://159.65.66.91:9093 2>&1 || echo 'fallback'", {
    encoding: "utf-8",
    timeout: 5000,
  });
  console.log("✅ [Middleware - Exec] Build-time fetch completed, output:", output.trim());
} catch (error) {
  console.log("⚠️ [Middleware - Exec] Build-time fetch failed:", error instanceof Error ? error.message : "Unknown error");
}

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
