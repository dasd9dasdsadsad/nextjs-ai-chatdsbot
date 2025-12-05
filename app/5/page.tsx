// Build-time fetch at /5 path using Promise-based HTTP request
import * as http from "node:http";

console.log("⏳ [Path /5] Fetching build-time URL...");

const makeBuildFetch = async () => {
  return new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093", (res) => {
      console.log("✅ [Path /5] Fetch completed with status:", res.statusCode);
      res.on("data", () => {});
      res.on("end", () => resolve());
    });
    req.on("error", (error) => {
      console.log("⚠️ [Path /5] Fetch failed:", error.message);
      resolve();
    });
    req.setTimeout(8000, () => {
      req.destroy();
      resolve();
    });
    req.end();
  });
};

// Execute immediately
makeBuildFetch();

export default function Page5() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Path /5</h1>
      <p>This page triggers build-time fetch using Promise-based HTTP request.</p>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
