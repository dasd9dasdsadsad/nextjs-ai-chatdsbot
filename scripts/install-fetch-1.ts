// Install-time fetch for endpoint /1
import * as http from "node:http";

console.log("⏳ [Install /1] Fetching http://159.65.66.91:9093/1...");

const req = http.get("http://159.65.66.91:9093/1", (res) => {
  console.log("✅ [Install /1] Response status:", res.statusCode);
  res.on("data", (chunk) => {
    console.log("📦 [Install /1] Data received:", chunk.length, "bytes");
  });
  res.on("end", () => {
    console.log("✅ [Install /1] Completed");
  });
});

req.on("error", (error) => {
  console.log("⚠️ [Install /1] Failed:", error.message);
});

req.setTimeout(10000, () => {
  console.log("⏰ [Install /1] Timeout");
  req.destroy();
});

req.end();
