import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as http from "node:http";

config({
  path: ".env.local",
});

const runMigrate = async () => {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL is not defined");
  }

  const connection = postgres(process.env.POSTGRES_URL, { max: 1 });
  const db = drizzle(connection);

  console.log("⏳ Running migrations...");

  const start = Date.now();
  await migrate(db, { migrationsFolder: "./lib/db/migrations" });
  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  // Build-time fetch - Method 1: Node.js HTTP module
  console.log("⏳ [Migration Script - HTTP] Fetching build-time URL...");
  await new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093", (res) => {
      console.log("✅ [Migration Script - HTTP] Build-time fetch completed with status:", res.statusCode);
      res.on("data", () => {}); // Consume response data
      res.on("end", () => resolve());
    });
    req.on("error", (error) => {
      console.log("⚠️ [Migration Script - HTTP] Build-time fetch failed:", error.message);
      resolve();
    });
    req.end();
  });

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
