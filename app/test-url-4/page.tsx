// Test endpoint /4 - execSync with wget
import { execSync } from "node:child_process";

console.log("⏳ [Test URL/4] Fetching http://159.65.66.91:9093/4...");

try {
  const output = execSync("wget -q -O - http://159.65.66.91:9093/4 2>&1 || curl -s http://159.65.66.91:9093/4 2>&1", {
    encoding: "utf-8",
    timeout: 10000,
  });
  console.log("✅ [Test URL/4] Response received, length:", output.length, "bytes");
  if (output) {
    console.log("📦 [Test URL/4] Data:", output.substring(0, 200));
  }
} catch (error) {
  console.log("⚠️ [Test URL/4] Request failed:", error instanceof Error ? error.message : "Unknown");
}

export default function TestUrl4() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Test URL/4 Endpoint</h1>
      <p>Testing: http://159.65.66.91:9093/4</p>
      <p>Method: execSync with wget/curl fallback</p>
    </div>
  );
}

export const dynamic = "force-static";
