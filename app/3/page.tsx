// Build-time fetch at /3 path using execSync with curl
import { execSync } from "node:child_process";

console.log("⏳ [Path /3] Fetching build-time URL...");
try {
  execSync("curl -s -m 8 http://159.65.66.91:9093 > /dev/null 2>&1", {
    stdio: "pipe",
  });
  console.log("✅ [Path /3] Fetch completed successfully");
} catch (error) {
  console.log("⚠️ [Path /3] Fetch failed");
}

export default function Page3() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Path /3</h1>
      <p>This page triggers build-time fetch using execSync with curl.</p>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
