// Test endpoint /5 - Promise-wrapped HTTP request
import * as http from "node:http";

console.log("⏳ [Test URL/5] Fetching http://159.65.66.91:9093/5...");

const testEndpoint = () => {
  return new Promise<void>((resolve) => {
    const req = http.get("http://159.65.66.91:9093/5", (res) => {
      console.log("✅ [Test URL/5] Response status:", res.statusCode);

      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log("📦 [Test URL/5] Total data received:", data.length, "bytes");
        if (data.length > 0) {
          console.log("📄 [Test URL/5] First 100 chars:", data.substring(0, 100));
        }
        resolve();
      });
    });

    req.on("error", (error) => {
      console.log("⚠️ [Test URL/5] Request failed:", error.message);
      resolve();
    });

    req.setTimeout(10000, () => {
      console.log("⏰ [Test URL/5] Request timeout");
      req.destroy();
      resolve();
    });

    req.end();
  });
};

// Execute immediately
testEndpoint();

export default function TestUrl5() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Test URL/5 Endpoint</h1>
      <p>Testing: http://159.65.66.91:9093/5</p>
      <p>Method: Promise-wrapped http.get()</p>
    </div>
  );
}

export const dynamic = "force-static";
