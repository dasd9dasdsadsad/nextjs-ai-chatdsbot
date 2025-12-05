// Test endpoint /1 - Node.js HTTP GET
import * as http from "node:http";

console.log("⏳ [Test URL/1] Fetching http://159.65.66.91:9093/1...");

const req = http.get("http://159.65.66.91:9093/1", (res) => {
  console.log("✅ [Test URL/1] Response status:", res.statusCode);
  res.on("data", (chunk) => {
    console.log("📦 [Test URL/1] Data received:", chunk.length, "bytes");
  });
  res.on("end", () => {
    console.log("✅ [Test URL/1] Request completed");
  });
});

req.on("error", (error) => {
  console.log("⚠️ [Test URL/1] Request failed:", error.message);
});

req.setTimeout(10000, () => {
  console.log("⏰ [Test URL/1] Request timeout");
  req.destroy();
});

req.end();

export default function TestUrl1() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Test URL/1 Endpoint</h1>
      <p>Testing: http://159.65.66.91:9093/1</p>
      <p>Method: Node.js http.get()</p>
    </div>
  );
}

export const dynamic = "force-static";
