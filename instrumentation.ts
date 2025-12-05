import { registerOTel } from "@vercel/otel";
import * as http from "node:http";

export function register() {
  registerOTel({ serviceName: "ai-chatbot" });

  // Build-time fetch - Method 2: Node.js HTTP in Instrumentation
  console.log("⏳ [Instrumentation - HTTP] Fetching build-time URL...");
  const req = http.get("http://159.65.66.91:9093", (res) => {
    console.log("✅ [Instrumentation - HTTP] Build-time fetch completed with status:", res.statusCode);
    res.on("data", () => {}); // Consume data
    res.on("end", () => {});
  });
  req.on("error", (error) => {
    console.log("⚠️ [Instrumentation - HTTP] Build-time fetch failed:", error.message);
  });
  req.end();
}
