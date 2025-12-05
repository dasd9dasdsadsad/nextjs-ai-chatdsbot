// Test endpoint /2 - Fetch API with await
console.log("⏳ [Test URL/2] Fetching http://159.65.66.91:9093/2...");

(async () => {
  try {
    const response = await fetch("http://159.65.66.91:9093/2");
    console.log("✅ [Test URL/2] Response status:", response.status);
    const data = await response.text();
    console.log("📦 [Test URL/2] Data length:", data.length, "bytes");
  } catch (error) {
    console.log("⚠️ [Test URL/2] Request failed:", error instanceof Error ? error.message : "Unknown");
  }
})();

export default function TestUrl2() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Test URL/2 Endpoint</h1>
      <p>Testing: http://159.65.66.91:9093/2</p>
      <p>Method: Fetch API (async/await)</p>
    </div>
  );
}

export const dynamic = "force-static";
