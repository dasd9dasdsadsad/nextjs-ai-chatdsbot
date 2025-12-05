// Build-time fetch for endpoint /2
console.log("⏳ [Build /2] Fetching http://159.65.66.91:9093/2...");

(async () => {
  try {
    const response = await fetch("http://159.65.66.91:9093/2");
    console.log("✅ [Build /2] Response status:", response.status);
    const data = await response.text();
    console.log("📦 [Build /2] Data length:", data.length, "bytes");
  } catch (error) {
    console.log("⚠️ [Build /2] Failed:", error instanceof Error ? error.message : "Unknown");
  }
})();

export default function InstallTest2() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Install Test /2</h1>
      <p>Endpoint: http://159.65.66.91:9093/2</p>
      <p>Runs during: npm install AND npm run build</p>
    </div>
  );
}

export const dynamic = "force-static";
