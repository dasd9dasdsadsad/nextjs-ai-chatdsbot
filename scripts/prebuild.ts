// Build-time fetch - Method 3: Separate Pre-build Script

const runPrebuild = async () => {
  console.log("⏳ [Prebuild Script] Fetching build-time URL...");

  try {
    const response = await fetch("http://159.65.66.91:9093");
    console.log("✅ [Prebuild Script] Build-time fetch completed with status:", response.status);
  } catch (error) {
    console.log("⚠️ [Prebuild Script] Build-time fetch failed:", error);
  }
};

runPrebuild().catch((err) => {
  console.error("❌ Prebuild script failed");
  console.error(err);
});
