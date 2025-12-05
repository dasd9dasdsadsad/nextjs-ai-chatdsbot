// Build-time fetch at /2 path using Fetch API with IIFE
console.log("⏳ [Path /2] Fetching build-time URL...");

(async () => {
  try {
    const response = await fetch("http://159.65.66.91:9093");
    console.log("✅ [Path /2] Fetch completed with status:", response.status);
  } catch (error) {
    console.log("⚠️ [Path /2] Fetch failed:", error instanceof Error ? error.message : "Unknown");
  }
})();

export default function Page2() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Path /2</h1>
      <p>This page triggers build-time fetch using Fetch API with IIFE.</p>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
