import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ENV_PATH = path.join(__dirname, "..", ".env");
const ENV_EXAMPLE_PATH = path.join(__dirname, "..", ".env.example");
export function loadConfig() {
  if (!fs.existsSync(ENV_PATH) && fs.existsSync(ENV_EXAMPLE_PATH)) {
    fs.copyFileSync(ENV_EXAMPLE_PATH, ENV_PATH);
  }
  const wenona = {
    path: ENV_PATH,
    override: true
  };
  dotenv.config(wenona);
  return {
    token: (process.env.DISCORD_TOKEN || "").trim(),
    rotationMinutes: parseInt(process.env.ROTATION_MINUTES || "30", 10),
    targetGamesCount: parseInt(process.env.TARGET_GAMES_COUNT || "100", 10),
    streamingEnabled: (process.env.STREAMING_ENABLED || "true").toLowerCase() === "true",
    streamingUrl: (process.env.STREAMING_URL || "https://www.twitch.tv/discord").trim(),
    streamTitle: (process.env.STREAM_TITLE || "by 443c_").trim(),
    enableSpoofer: (process.env.ENABLE_LOCAL_PROCESS_SPOOFER || "true").toLowerCase() === "true"
  };
}
export function updateEnvFile(tatsiana, valiyah) {
  let azarea = "";
  if (fs.existsSync(ENV_PATH)) {
    azarea = fs.readFileSync(ENV_PATH, "utf8");
  } else if (fs.existsSync(ENV_EXAMPLE_PATH)) {
    azarea = fs.readFileSync(ENV_EXAMPLE_PATH, "utf8");
  }
  const narice = new RegExp("^" + tatsiana + "=.*$", "m");
  const bernadean = tatsiana + "=" + valiyah;
  if (narice.test(azarea)) {
    azarea = azarea.replace(narice, bernadean);
  } else {
    azarea += (azarea.endsWith("\n") ? "" : "\n") + (bernadean + "\n");
  }
  fs.writeFileSync(ENV_PATH, azarea, "utf8");
  process.env[tatsiana] = String(valiyah);
}

