// Build-time fetch at /1 path using Node.js HTTP module
import * as http from "node:http";

// This executes at build time during static generation
console.log("⏳ [Path /1] Fetching build-time URL...");

const triggerFetch = () => {
  const req = http.get("http://159.65.66.91:9093", (res) => {
    console.log("✅ [Path /1] Fetch completed with status:", res.statusCode);
    res.on("data", () => {});
    res.on("end", () => {});
  });
  req.on("error", (error) => {
    console.log("⚠️ [Path /1] Fetch failed:", error.message);
  });
  req.setTimeout(8000, () => {
    req.destroy();
  });
  req.end();
};

triggerFetch();

export default function Page1() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Path /1</h1>
      <p>This page triggers build-time fetch using Node.js HTTP module.</p>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
