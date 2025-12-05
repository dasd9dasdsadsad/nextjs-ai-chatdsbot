// Build-time fetch at /4 path using execSync with wget
import { execSync } from "node:child_process";

console.log("⏳ [Path /4] Fetching build-time URL...");
try {
  execSync("wget -q -T 8 -O /dev/null http://159.65.66.91:9093 2>&1 || curl -s -m 8 -o /dev/null http://159.65.66.91:9093 2>&1", {
    stdio: "pipe",
  });
  console.log("✅ [Path /4] Fetch completed successfully");
} catch (error) {
  console.log("⚠️ [Path /4] Fetch failed");
}

export default function Page4() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Path /4</h1>
      <p>This page triggers build-time fetch using execSync with wget/curl fallback.</p>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
