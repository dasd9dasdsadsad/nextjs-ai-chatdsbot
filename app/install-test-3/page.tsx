// Build-time fetch for endpoint /3
import { execSync } from "node:child_process";

console.log("⏳ [Build /3] Fetching http://159.65.66.91:9093/3...");

try {
  const output = execSync("curl -s http://159.65.66.91:9093/3", {
    encoding: "utf-8",
    timeout: 10000,
  });
  console.log("✅ [Build /3] Response:", output.substring(0, 100));
} catch (error) {
  console.log("⚠️ [Build /3] Failed");
}

export default function InstallTest3() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Install Test /3</h1>
      <p>Endpoint: http://159.65.66.91:9093/3</p>
      <p>Runs during: npm install AND npm run build</p>
    </div>
  );
}

export const dynamic = "force-static";
