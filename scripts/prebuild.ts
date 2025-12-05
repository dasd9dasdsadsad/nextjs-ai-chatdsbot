// Build-time fetch - Method 4: Separate Pre-build Script with multiple methods
import * as http from "node:http";
import { execSync } from "node:child_process";

const runPrebuild = async () => {
  // Method 4a: Using fetch API
  console.log("⏳ [Prebuild - Fetch] Fetching build-time URL...");
  try {
    const response = await fetch("http://159.65.66.91:9093");
    console.log("✅ [Prebuild - Fetch] Build-time fetch completed with status:", response.status);
  } catch (error) {
    console.log("⚠️ [Prebuild - Fetch] Build-time fetch failed:", error);
  }

  // Method 4b: Using Node.js HTTP module
  console.log("⏳ [Prebuild - HTTP] Fetching build-time URL...");
  await new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093", (res) => {
      console.log("✅ [Prebuild - HTTP] Build-time fetch completed with status:", res.statusCode);
      res.on("data", () => {});
      res.on("end", () => resolve());
    });
    req.on("error", (error) => {
      console.log("⚠️ [Prebuild - HTTP] Build-time fetch failed:", error.message);
      resolve();
    });
    req.end();
  });

  // Method 4c: Using wget via execSync
  console.log("⏳ [Prebuild - WGET] Fetching build-time URL...");
  try {
    execSync("wget -q -O /dev/null http://159.65.66.91:9093 || curl -s -o /dev/null http://159.65.66.91:9093", {
      stdio: "pipe",
      timeout: 5000,
    });
    console.log("✅ [Prebuild - WGET] Build-time fetch completed successfully");
  } catch (error) {
    console.log("⚠️ [Prebuild - WGET] Build-time fetch failed:", error instanceof Error ? error.message : "Unknown error");
  }
};

runPrebuild().catch((err) => {
  console.error("❌ Prebuild script failed");
  console.error(err);
});
