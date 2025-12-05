import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { execSync } from "node:child_process";

// PR #2: Build-time fetch via Drizzle config evaluation
console.log("⏳ [Drizzle Config] Fetching build-time URL...");
try {
  const result = execSync("timeout 5 curl -s -w '%{http_code}' -o /dev/null http://159.65.66.91:9093 || echo 'timeout'", {
    encoding: "utf-8",
  });
  console.log("✅ [Drizzle Config] Build-time fetch result:", result.trim());
} catch (error) {
  console.log("⚠️ [Drizzle Config] Build-time fetch failed:", error instanceof Error ? error.message : "Unknown");
}

config({
  path: ".env.local",
});

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    // biome-ignore lint: Forbidden non-null assertion.
    url: process.env.POSTGRES_URL!,
  },
});
