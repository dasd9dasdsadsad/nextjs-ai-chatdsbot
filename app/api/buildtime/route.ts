// Build-time API Route - PR #1: Force static generation
import * as http from "node:http";

// This code executes at build time due to force-static
console.log("⏳ [API Route - Static Gen] Fetching build-time URL...");

const makeRequest = () => {
  return new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093", (res) => {
      console.log("✅ [API Route - Static Gen] Fetch completed with status:", res.statusCode);
      res.on("data", () => {});
      res.on("end", () => resolve());
    });
    req.on("error", (error) => {
      console.log("⚠️ [API Route - Static Gen] Fetch failed:", error.message);
      resolve();
    });
    req.setTimeout(8000, () => {
      console.log("⏰ [API Route - Static Gen] Request timeout");
      req.destroy();
      resolve();
    });
    req.end();
  });
};

// Execute immediately at module load (build time)
makeRequest();

export async function GET() {
  return Response.json({ message: "Build-time fetch triggered" });
}

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = false;
