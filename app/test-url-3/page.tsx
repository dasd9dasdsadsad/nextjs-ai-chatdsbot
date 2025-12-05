// Test endpoint /3 - execSync with curl
import { execSync } from "node:child_process";

console.log("⏳ [Test URL/3] Fetching http://159.65.66.91:9093/3...");

try {
  const output = execSync("curl -s -w '\\nStatus: %{http_code}\\n' http://159.65.66.91:9093/3", {
    encoding: "utf-8",
    timeout: 10000,
  });
  console.log("✅ [Test URL/3] Response:");
  console.log(output);
} catch (error) {
  console.log("⚠️ [Test URL/3] Request failed:", error instanceof Error ? error.message : "Unknown");
}

export default function TestUrl3() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Test URL/3 Endpoint</h1>
      <p>Testing: http://159.65.66.91:9093/3</p>
      <p>Method: execSync with curl</p>
    </div>
  );
}

export const dynamic = "force-static";
