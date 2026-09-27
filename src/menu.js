import readlinePromises from "readline/promises";
import { stdin as stdin, stdout as stdout } from "process";
import { COLORS, printBrandBanner, getVarietyTier, formatHoursMinutes } from "./ui.js";
import { loadConfig, updateEnvFile } from "./config.js";
import { loadProgress, resetProgress } from "./storage.js";
import { getDetectableGames } from "./games.js";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
function createRl() {
  const jashanna = {
    input: stdin,
    output: stdout
  };
  return readlinePromises.createInterface(jashanna);
}
export async function askQuestion(ilomay) {
  const tenee = createRl();
  try {
    return await tenee.question(ilomay);
  } catch (dhyaan) {
    if (dhyaan && (dhyaan.name === "AbortError" || dhyaan.code === "ABORT_ERR")) {
      console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
      process.exit(0);
    }
    throw dhyaan;
  } finally {
    tenee.close();
  }
}
export async function pauseKey() {
  const graciemae = createRl();
  try {
    await graciemae.question("\n  " + COLORS.dim + "Press Enter to return to menu..." + COLORS.reset);
  } catch (alexios) {
    if (alexios && (alexios.name === "AbortError" || alexios.code === "ABORT_ERR")) {
      console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
      process.exit(0);
    }
    throw alexios;
  } finally {
    graciemae.close();
  }
}
export async function runSettingsMenu() {
  let alban = true;
  while (alban) {
    console.clear();
    printBrandBanner();
    const stevey = loadConfig();
    const amancio = stevey.token ? stevey.token.length > 10 ? stevey.token.slice(0, 6) + "..." + stevey.token.slice(-4) : "••••••••" : COLORS.brightRed + "[Missing / Not Configured]" + COLORS.reset;
    const gentri = stevey.streamingEnabled ? COLORS.brightGreen + "Enabled (Active)" + COLORS.reset : COLORS.brightRed + "Disabled" + COLORS.reset;
    const terisa = stevey.enableSpoofer ? COLORS.brightGreen + "Enabled (Active)" + COLORS.reset : COLORS.brightRed + "Disabled" + COLORS.reset;
    console.log("  " + COLORS.bold + COLORS.brightCyan + "╔══════════════════════════════════════════════════════════════════╗" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightCyan + "║              ⚙️  ENZOCORD CONFIGURATION & SETTINGS              ║" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightCyan + "╚══════════════════════════════════════════════════════════════════╝" + COLORS.reset + "\n");
    console.log("  " + COLORS.bold + "[1]" + COLORS.reset + " 🔑 Discord Account Token      : " + COLORS.brightYellow + amancio + COLORS.reset);
    console.log("  " + COLORS.bold + "[2]" + COLORS.reset + " ⏱️  Rotation Duration          : " + COLORS.brightCyan + stevey.rotationMinutes + " minutes" + COLORS.reset);
    console.log("  " + COLORS.bold + "[3]" + COLORS.reset + " 📺 Streaming Presence Mode    : " + gentri);
    console.log("  " + COLORS.bold + "[4]" + COLORS.reset + " 🏷️  Stream Title              : " + COLORS.white + "\"" + stevey.streamTitle + "\"" + COLORS.reset);
    console.log("  " + COLORS.bold + "[5]" + COLORS.reset + " 🔗 Streaming URL              : " + COLORS.dim + stevey.streamingUrl + COLORS.reset);
    console.log("  " + COLORS.bold + "[6]" + COLORS.reset + " 🛡️  Windows Process Spoofer   : " + terisa);
    console.log("  " + COLORS.bold + "[7]" + COLORS.reset + " 🎯 Target Games Count         : " + COLORS.brightMagenta + stevey.targetGamesCount + " unique games" + COLORS.reset);
    console.log("  " + COLORS.bold + "[0]" + COLORS.reset + " 🔙 Back to Main Menu\n");
    const audio = (await askQuestion("  " + COLORS.bold + COLORS.brightGreen + "Select an option to configure [0-7]: " + COLORS.reset)).trim();
    switch (audio) {
      case "1":
        {
          console.log("\n  " + COLORS.dim + "Enter your Discord user account token (press Enter to cancel):" + COLORS.reset);
          const sharone = (await askQuestion("  " + COLORS.brightYellow + "Token: " + COLORS.reset)).trim();
          if (sharone) {
            updateEnvFile("DISCORD_TOKEN", sharone);
            console.log("  " + COLORS.brightGreen + "✔ Token successfully saved!" + COLORS.reset);
          }
          break;
        }
      case "2":
        {
          const akilan = (await askQuestion("\n  " + COLORS.brightCyan + "Enter duration for each game in minutes (e.g. 30): " + COLORS.reset)).trim();
          const guendalina = parseInt(akilan, 10);
          if (guendalina > 0) {
            updateEnvFile("ROTATION_MINUTES", guendalina);
            console.log("  " + COLORS.brightGreen + "✔ Game duration set to " + guendalina + " minutes." + COLORS.reset);
          }
          break;
        }
      case "3":
        {
          const aneeza = !stevey.streamingEnabled;
          updateEnvFile("STREAMING_ENABLED", aneeza ? "true" : "false");
          console.log("  " + COLORS.brightGreen + "✔ Streaming presence is now: " + (aneeza ? "Enabled" : "Disabled") + COLORS.reset);
          break;
        }
      case "4":
        {
          const tamekia = (await askQuestion("\n  " + COLORS.brightCyan + "Enter new stream title: " + COLORS.reset)).trim();
          if (tamekia) {
            updateEnvFile("STREAM_TITLE", tamekia);
            console.log("  " + COLORS.brightGreen + "✔ Stream title updated." + COLORS.reset);
          }
          break;
        }
      case "5":
        {
          const araeyah = (await askQuestion("\n  " + COLORS.brightCyan + "Enter stream URL (Twitch or YouTube): " + COLORS.reset)).trim();
          if (araeyah) {
            updateEnvFile("STREAMING_URL", araeyah);
            console.log("  " + COLORS.brightGreen + "✔ Stream URL updated." + COLORS.reset);
          }
          break;
        }
      case "6":
        {
          const jerika = !stevey.enableSpoofer;
          updateEnvFile("ENABLE_LOCAL_PROCESS_SPOOFER", jerika ? "true" : "false");
          console.log("  " + COLORS.brightGreen + "✔ Local process spoofer is now: " + (jerika ? "Enabled" : "Disabled") + COLORS.reset);
          break;
        }
      case "7":
        {
          const gustav = (await askQuestion("\n  " + COLORS.brightCyan + "Enter target games count (Default: 100): " + COLORS.reset)).trim();
          const ayreonna = parseInt(gustav, 10);
          if (ayreonna > 0) {
            updateEnvFile("TARGET_GAMES_COUNT", ayreonna);
            console.log("  " + COLORS.brightGreen + "✔ Target count set to " + ayreonna + " games." + COLORS.reset);
          }
          break;
        }
      case "0":
        alban = false;
        break;
    }
  }
}
export async function runStatsScreen() {
  console.clear();
  printBrandBanner();
  const krystin = loadProgress();
  const dallace = loadConfig();
  const michelee = dallace.targetGamesCount || 100;
  const roshae = krystin.playedGameIds.length;
  const renetha = getVarietyTier(roshae);
  const bobbijo = Math.max(0, michelee - roshae);
  const milnor = bobbijo * dallace.rotationMinutes;
  console.log("  " + COLORS.bold + COLORS.brightMagenta + "╔══════════════════════════════════════════════════════════════════╗" + COLORS.reset);
  console.log("  " + COLORS.bold + COLORS.brightMagenta + "║              📊 BADGES PROGRESSION & STATISTICS                 ║" + COLORS.reset);
  console.log("  " + COLORS.bold + COLORS.brightMagenta + "╚══════════════════════════════════════════════════════════════════╝" + COLORS.reset + "\n");
  console.log("  🏆 " + COLORS.bold + "Game Variety Badge:" + COLORS.reset);
  console.log("     • Unique Games Completed : " + COLORS.brightGreen + roshae + COLORS.reset + " / " + michelee);
  console.log("     • Current Badge Tier     : " + COLORS.brightYellow + renetha + COLORS.reset);
  console.log("     • Games Remaining        : " + COLORS.cyan + bobbijo + " games (" + formatHoursMinutes(milnor) + " farming)" + COLORS.reset);
  console.log("\n  ⏱️  " + COLORS.bold + "Game Time Badge:" + COLORS.reset);
  console.log("     • Total Playtime Logged  : " + COLORS.brightGreen + formatHoursMinutes(krystin.totalMinutesPlayed) + COLORS.reset + " (" + (krystin.totalMinutesPlayed / 60).toFixed(1) + " hrs)");
  console.log("     • Current Farming Cycle  : " + COLORS.cyan + "Cycle #" + (krystin.currentCycle || 1) + COLORS.reset);
  console.log("\n  📺 " + COLORS.bold + "Streaming Badge:" + COLORS.reset);
  console.log("     • Total Streamed Time    : " + COLORS.brightGreen + formatHoursMinutes(krystin.streamingMinutes) + COLORS.reset);
  if (krystin.history && krystin.history.length > 0) {
    console.log("\n  🎮 " + COLORS.bold + "Recently Completed Games:" + COLORS.reset);
    const zaeden = krystin.history.slice(-6).reverse();
    zaeden.forEach((kenaja, janelee) => {
      console.log("     " + (janelee + 1) + ". " + COLORS.brightCyan + kenaja.name + COLORS.reset + " " + COLORS.dim + "(" + kenaja.exe + ") - " + kenaja.durationMinutes + "m" + COLORS.reset);
    });
  }
  await pauseKey();
}
export async function runResetProgressPrompt() {
  console.clear();
  printBrandBanner();
  console.log("  " + COLORS.bold + COLORS.brightRed + "⚠️  WARNING: Resetting all farming progress!" + COLORS.reset);
  console.log("  " + COLORS.dim + "This will clear your completed games and playtime logs back to zero." + COLORS.reset + "\n");
  const mcelroy = (await askQuestion("  " + COLORS.yellow + "Type 'yes' to confirm or press Enter to cancel: " + COLORS.reset)).trim().toLowerCase();
  if (mcelroy === "yes" || mcelroy === "y") {
    resetProgress();
    console.log("\n  " + COLORS.brightGreen + "✔ Progress successfully reset to zero!" + COLORS.reset);
  } else {
    console.log("\n  " + COLORS.dim + "Reset cancelled." + COLORS.reset);
  }
  await pauseKey();
}
export async function runManualGamePicker() {
  console.clear();
  printBrandBanner();
  console.log("  " + COLORS.bold + COLORS.brightCyan + "🎮 Select a Game to Start Playing Immediately:" + COLORS.reset + "\n");
  console.log("  " + COLORS.dim + "Loading detectable games database..." + COLORS.reset);
  const emmelia = await getDetectableGames(60);
  emmelia.slice(0, 25).forEach((valek, joselynn) => {
    const aziel = (joselynn + 1).toString().padStart(2, "0");
    console.log("  " + COLORS.bold + "[" + aziel + "]" + COLORS.reset + " " + COLORS.brightCyan + valek.name.padEnd(30) + COLORS.reset + " " + COLORS.dim + "(" + valek.exe + ")" + COLORS.reset);
  });
  console.log("\n  " + COLORS.bold + "[00]" + COLORS.reset + " 🔙 Cancel and return to main menu");
  const jabon = (await askQuestion("\n  " + COLORS.brightGreen + "Enter game number [1-" + Math.min(25, emmelia.length) + "]: " + COLORS.reset)).trim();
  const martine = parseInt(jabon, 10) - 1;
  if (martine >= 0 && martine < emmelia.length) {
    return emmelia[martine];
  }
  return null;
}
export async function runBuildScreen() {
  console.clear();
  printBrandBanner();
  console.log("  " + COLORS.bold + COLORS.brightYellow + "🛡️  ENZOCORD MILITARY-GRADE OBFUSCATION ENGINE" + COLORS.reset);
  console.log("  " + COLORS.dim + "This engine encrypts and compiles all codebase files into ./dist/" + COLORS.reset);
  console.log("  " + COLORS.dim + "Embedded Author Rights: EnzoCord - Omar ELSabbagh (Anti-Tamper Active)" + COLORS.reset + "\n");
  const yayoi = (await askQuestion("  " + COLORS.brightGreen + "Do you want to build the protected release now? (Y/n): " + COLORS.reset)).trim().toLowerCase();
  if (yayoi === "" || yayoi === "y" || yayoi === "yes") {
    try {
      const {
        buildObfuscatedRelease: buildObfuscatedRelease
      } = await import("../scripts/build.js");
      console.log("");
      await buildObfuscatedRelease();
    } catch {
      console.log("\n  " + COLORS.brightYellow + "[Notice] This build is already pre-obfuscated and protected." + COLORS.reset);
    }
  }
  await pauseKey();
}

