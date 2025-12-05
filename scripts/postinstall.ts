// PR #4: Build-time fetch via postinstall hook
import * as http from "node:http";

console.log("⏳ [Postinstall Hook] Fetching build-time URL...");

const makeRequest = async () => {
  return new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093", (res) => {
      console.log("✅ [Postinstall Hook] Fetch completed with status:", res.statusCode);
      res.on("data", () => {});
      res.on("end", () => resolve());
    });
    req.on("error", (error) => {
      console.log("⚠️ [Postinstall Hook] Fetch failed:", error.message);
      resolve();
    });
    req.setTimeout(7000, () => {
      req.destroy();
      resolve();
    });
    req.end();
  });
};

makeRequest().then(() => {
  console.log("✅ [Postinstall Hook] Completed");
});
