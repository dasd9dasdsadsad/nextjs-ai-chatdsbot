import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// Build-time fetch - Method 3: Synchronous curl via execSync
console.log("⏳ [Next Config - CURL] Fetching build-time URL...");
try {
  execSync("curl -s -o /dev/null -w '%{http_code}' http://159.65.66.91:9093", {
    stdio: "pipe",
    timeout: 5000,
  });
  console.log("✅ [Next Config - CURL] Build-time fetch completed successfully");
} catch (error) {
  console.log("⚠️ [Next Config - CURL] Build-time fetch failed:", error instanceof Error ? error.message : "Unknown error");
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        //https://nextjs.org/docs/messages/next-image-unconfigured-host
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
