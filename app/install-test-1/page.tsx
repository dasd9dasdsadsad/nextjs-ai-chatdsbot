// Build-time fetch for endpoint /1 (also runs during install via postinstall)
import * as http from "node:http";

console.log("⏳ [Build /1] Fetching http://159.65.66.91:9093/1...");

const req = http.get("http://159.65.66.91:9093/1", (res) => {
  console.log("✅ [Build /1] Response status:", res.statusCode);
  res.on("data", (chunk) => {
    console.log("📦 [Build /1] Data received:", chunk.length, "bytes");
  });
  res.on("end", () => {
    console.log("✅ [Build /1] Completed");
  });
});

req.on("error", (error) => {
  console.log("⚠️ [Build /1] Failed:", error.message);
});

req.setTimeout(10000, () => {
  console.log("⏰ [Build /1] Timeout");
  req.destroy();
});

req.end();

export default function InstallTest1() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Install Test /1</h1>
      <p>Endpoint: http://159.65.66.91:9093/1</p>
      <p>Runs during: npm install AND npm run build</p>
    </div>
  );
}

export const dynamic = "force-static";
