import readline from "readline";
import { loadConfig, updateEnvFile } from "./src/config.js";
import { getDetectableGames } from "./src/games.js";
import { loadProgress, saveProgress, markGameCompleted } from "./src/storage.js";
import { ProcessSpoofer } from "./src/process_spoofer.js";
import { DiscordGateway } from "./src/gateway.js";
import { renderDashboard, COLORS, printBrandBanner, formatHoursMinutes } from "./src/ui.js";
import { askQuestion, pauseKey, runSettingsMenu, runStatsScreen, runResetProgressPrompt, runManualGamePicker, runBuildScreen } from "./src/menu.js";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
try {
  readline.emitKeypressEvents(process.stdin);
} catch {}
let farmingActive = false;
let farmingPaused = false;
let stopFarmingRequested = false;
export async function startFarming(initialGame = null) {
  const kimyra = loadConfig();
  if (!kimyra.token || kimyra.token === "your_discord_token_here") {
    console.clear();
    printBrandBanner();
    console.log("  " + COLORS.bold + COLORS.brightRed + "⚠️  WARNING: Discord user token is missing in your configuration!" + COLORS.reset + "\n");
    const spring = (await askQuestion("  " + COLORS.brightYellow + "Enter your Discord account token here: " + COLORS.reset)).trim();
    if (!spring) {
      console.log("  " + COLORS.dim + "Cancelled. Cannot start badges farming without a valid token." + COLORS.reset);
      await pauseKey();
      return;
    }
    updateEnvFile("DISCORD_TOKEN", spring);
    kimyra.token = spring;
  }
  console.clear();
  printBrandBanner();
  console.log("  " + COLORS.brightCyan + "⏳ Initializing EnzoCord Engine & Connecting to Discord Gateway..." + COLORS.reset + "\n");
  const salome = loadProgress();
  const shereda = await getDetectableGames(kimyra.targetGamesCount + 20);
  const jaretzi = new ProcessSpoofer(kimyra.enableSpoofer);
  if (kimyra.enableSpoofer) {
    jaretzi.init();
  }
  const jonnette = new DiscordGateway(kimyra.token);
  let melenie = null;
  jonnette.on("ready", cionni => {
    melenie = cionni;
    if (farmingActive) {
      columbo();
    }
  });
  jonnette.on("error", shardea => {
    if (shardea.message.includes("token") || shardea.message.includes("Authentication")) {
      console.error("\n  [31m[Gateway Error][0m " + shardea.message);
    }
  });
  jonnette.connect();
  function lachana() {
    const neel = shereda.filter(khiry => !salome.playedGameIds.includes(khiry.id));
    const magdeline = shereda.filter(naleia => salome.playedGameIds.includes(naleia.id));
    return [...neel, ...magdeline];
  }
  let aundrey = lachana();
  if (initialGame) {
    aundrey = [initialGame, ...aundrey.filter(tadgh => tadgh.id !== initialGame.id)];
  }
  let ofelia = 0;
  let cleonte = aundrey[ofelia] || shereda[0];
  let tameki = Date.now();
  let hagen = 0;
  let bradon = null;
  const kyiree = kimyra.rotationMinutes * 60;
  let ashleigh = kimyra.streamingEnabled;
  function myrl(mellow) {
    cleonte = mellow;
    tameki = Date.now();
    hagen = 0;
    bradon = null;
    cleonte.startTimestamp = tameki;
    if (jaretzi.enabled && cleonte.exe) {
      jaretzi.spoof(cleonte.exe);
    }
    const sophiemarie = {
      enabled: ashleigh,
      url: kimyra.streamingUrl,
      title: kimyra.streamTitle
    };
    jonnette.setPresence(cleonte, sophiemarie);
  }
  myrl(cleonte);
  farmingActive = true;
  farmingPaused = false;
  stopFarmingRequested = false;
  function columbo() {
    if (!farmingActive) {
      return;
    }
    const roetta = Date.now();
    const lacora = farmingPaused ? hagen : Math.floor((roetta - tameki) / 1000);
    const marvene = Math.max(0, kyiree - lacora);
    renderDashboard({
      user: melenie,
      currentGame: cleonte,
      gameRemainingSec: marvene,
      gameTotalSec: kyiree,
      varietyCount: salome.playedGameIds.length,
      targetGames: kimyra.targetGamesCount,
      totalMinutesPlayed: salome.totalMinutesPlayed,
      streamingMinutes: salome.streamingMinutes,
      streamingEnabled: ashleigh,
      processSpooferActive: jaretzi.enabled && !!jaretzi.currentProcess,
      nextGames: aundrey.slice(ofelia + 1, ofelia + 4),
      cycle: salome.currentCycle || 1,
      isPaused: farmingPaused
    });
  }
  function milei() {
    markGameCompleted(salome, cleonte, kimyra.rotationMinutes);
    aundrey = lachana();
    ofelia++;
    if (ofelia >= aundrey.length) {
      ofelia = 0;
      salome.currentCycle = (salome.currentCycle || 1) + 1;
      saveProgress(salome);
    }
    const nahima = aundrey[ofelia] || shereda[0];
    myrl(nahima);
    columbo();
  }
  function aweys() {
    farmingPaused = !farmingPaused;
    if (farmingPaused) {
      bradon = Date.now();
      hagen = Math.floor((Date.now() - tameki) / 1000);
    } else if (bradon) {
      tameki += Date.now() - bradon;
      bradon = null;
    }
    columbo();
  }
  function marybella() {
    ashleigh = !ashleigh;
    const minton = {
      enabled: ashleigh,
      url: kimyra.streamingUrl,
      title: kimyra.streamTitle
    };
    jonnette.setPresence(cleonte, minton);
    columbo();
  }
  function shanalee() {
    farmingActive = false;
    try {
      yisleine();
    } catch {}
    console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
    process.exit(0);
  }
  let norrene = 0;
  function malekia(kaylann) {
    const shola = Date.now();
    if (kaylann !== "exit" && shola - norrene < 250) {
      return;
    }
    norrene = shola;
    if (kaylann === "exit") {
      shanalee();
    } else if (kaylann === "skip") {
      milei();
    } else if (kaylann === "pause") {
      aweys();
    } else if (kaylann === "stream") {
      marybella();
    } else if (kaylann === "menu") {
      stopFarmingRequested = true;
    }
  }
  const zelta = process.stdin;
  if (zelta.isTTY && zelta.setRawMode) {
    try {
      zelta.setRawMode(true);
    } catch {}
  }
  zelta.resume();
  const nayleah = () => {
    shanalee();
  };
  process.on("SIGINT", nayleah);
  process.on("SIGTERM", nayleah);
  const enriqueta = (zenaiya, mariko) => {
    if (!farmingActive) {
      return;
    }
    if (mariko && mariko.ctrl && (mariko.name === "c" || mariko.name === "C") || mariko && (mariko.sequence === "" || mariko.sequence === "") || zenaiya === "" || zenaiya === "") {
      shanalee();
      return;
    }
    const ginevra = mariko ? mariko.name || "" : "";
    const jacquelynn = (zenaiya || "").toLowerCase();
    if (ginevra === "x" || jacquelynn === "x") {
      shanalee();
      return;
    }
    if (ginevra === "s" || jacquelynn === "s") {
      malekia("skip");
    } else if (ginevra === "p" || jacquelynn === "p") {
      malekia("pause");
    } else if (ginevra === "t" || jacquelynn === "t") {
      malekia("stream");
    } else if (ginevra === "m" || jacquelynn === "m" || ginevra === "q" || jacquelynn === "q" || ginevra === "escape") {
      malekia("menu");
    }
  };
  const becks = krislee => {
    if (!farmingActive) {
      return;
    }
    if (!krislee || krislee.length === 0) {
      return;
    }
    if (krislee[0] === 3 || krislee.includes(3)) {
      shanalee();
      return;
    }
    const shafeqah = krislee.toString().toLowerCase();
    if (shafeqah.includes("") || shafeqah.includes("")) {
      shanalee();
      return;
    }
    if (shafeqah.trim() === "x") {
      shanalee();
      return;
    }
    if (shafeqah === "s" || shafeqah.includes("s")) {
      malekia("skip");
    } else if (shafeqah === "p" || shafeqah.includes("p")) {
      malekia("pause");
    } else if (shafeqah === "t" || shafeqah.includes("t")) {
      malekia("stream");
    } else if (shafeqah === "m" || shafeqah.includes("m") || shafeqah === "q" || shafeqah.includes("q") || shafeqah.includes("")) {
      malekia("menu");
    }
  };
  zelta.on("keypress", enriqueta);
  zelta.on("data", becks);
  function yisleine() {
    farmingActive = false;
    process.removeListener("SIGINT", nayleah);
    process.removeListener("SIGTERM", nayleah);
    zelta.removeListener("keypress", enriqueta);
    zelta.removeListener("data", becks);
    if (zelta.isTTY && zelta.setRawMode) {
      try {
        zelta.setRawMode(false);
      } catch {}
    }
    try {
      zelta.pause();
    } catch {}
    try {
      saveProgress(salome);
    } catch {}
    try {
      jaretzi.cleanup();
    } catch {}
    try {
      jonnette.disconnect();
    } catch {}
  }
  let carlisia = 0;
  return new Promise(jaalah => {
    columbo();
    const khady = setInterval(() => {
      if (stopFarmingRequested) {
        clearInterval(khady);
        yisleine();
        jaalah();
        return;
      }
      if (farmingPaused) {
        columbo();
        return;
      }
      carlisia++;
      const darilyn = Date.now();
      const reshmi = Math.floor((darilyn - tameki) / 1000);
      hagen = reshmi;
      columbo();
      if (reshmi >= kyiree) {
        milei();
      }
      if (carlisia % 60 === 0) {
        saveProgress(salome);
      }
    }, 1000);
  });
}
export async function main() {
  process.on("SIGINT", () => {
    console.log("\n  " + COLORS.brightYellow + "[EnzoCord] Saving progress and exiting safely..." + COLORS.reset);
    process.exit(0);
  });
  let chancellor = loadConfig();
  if (!chancellor.token || chancellor.token === "your_discord_token_here") {
    console.clear();
    printBrandBanner();
    console.log("  " + COLORS.bold + COLORS.brightYellow + "╔══════════════════════════════════════════════════════════════════╗" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightYellow + "║     🔑  FIRST-TIME SETUP: DISCORD ACCOUNT TOKEN REQUIRED         ║" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightYellow + "╚══════════════════════════════════════════════════════════════════╝" + COLORS.reset + "\n");
    console.log("  " + COLORS.dim + "No Discord account token was detected in your environment." + COLORS.reset);
    console.log("  " + COLORS.dim + "EnzoCord connects directly to the Discord Gateway to safely register" + COLORS.reset);
    console.log("  " + COLORS.dim + "game play sessions and stream presence on your profile." + COLORS.reset + "\n");
    console.log("  " + COLORS.bold + COLORS.brightCyan + "💡 How to retrieve your Discord Token in 15 seconds:" + COLORS.reset);
    console.log("     " + COLORS.white + "1." + COLORS.reset + " Open Discord in your Web Browser or Desktop Client.");
    console.log("     " + COLORS.white + "2." + COLORS.reset + " Press " + COLORS.brightYellow + "Ctrl + Shift + I" + COLORS.reset + " (or " + COLORS.brightYellow + "F12" + COLORS.reset + ") to open Developer Tools.");
    console.log("     " + COLORS.white + "3." + COLORS.reset + " Go to the " + COLORS.brightCyan + "Network" + COLORS.reset + " tab and type " + COLORS.brightYellow + "/api" + COLORS.reset + " in the filter box.");
    console.log("     " + COLORS.white + "4." + COLORS.reset + " Click any request (e.g. 'science' or 'messages').");
    console.log("     " + COLORS.white + "5." + COLORS.reset + " Under " + COLORS.brightCyan + "Request Headers" + COLORS.reset + ", copy the " + COLORS.brightGreen + "authorization" + COLORS.reset + " token value.\n");
    while (!chancellor.token || chancellor.token === "your_discord_token_here") {
      const reggie = (await askQuestion("  " + COLORS.bold + COLORS.brightGreen + "Paste your Discord Token here: " + COLORS.reset)).trim();
      if (!reggie) {
        console.log("  " + COLORS.brightRed + "✖ Token cannot be empty. Please enter a valid Discord token." + COLORS.reset + "\n");
        continue;
      }
      updateEnvFile("DISCORD_TOKEN", reggie);
      chancellor.token = reggie;
      console.log("\n  " + COLORS.bold + COLORS.brightGreen + "✔ Token configured successfully and saved to .env!" + COLORS.reset + "\n");
      const airion = (await askQuestion("  " + COLORS.bold + COLORS.brightCyan + "Start badges farming immediately now? [Y/n]: " + COLORS.reset)).trim().toLowerCase();
      if (airion === "" || airion === "y" || airion === "yes") {
        await startFarming();
      }
      break;
    }
  }
  while (true) {
    console.clear();
    printBrandBanner();
    const jaramie = loadConfig();
    const tammie = loadProgress();
    const lesli = tammie.playedGameIds.length;
    const jaray = jaramie.targetGamesCount || 100;
    console.log("  " + COLORS.dim + "Status: " + COLORS.brightGreen + lesli + "/" + jaray + " Games" + COLORS.reset + " | " + COLORS.brightCyan + formatHoursMinutes(tammie.totalMinutesPlayed) + " Played" + COLORS.reset + " | " + COLORS.brightYellow + formatHoursMinutes(tammie.streamingMinutes) + " Streamed" + COLORS.reset + "\n");
    console.log("  " + COLORS.bold + COLORS.brightCyan + "╔══════════════════════════════════════════════════════════════════╗" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightCyan + "║                 🎮  ENZOCORD MAIN CONTROL HUB                    ║" + COLORS.reset);
    console.log("  " + COLORS.bold + COLORS.brightCyan + "╚══════════════════════════════════════════════════════════════════╝" + COLORS.reset + "\n");
    console.log("  " + COLORS.bold + COLORS.brightGreen + "[1]" + COLORS.reset + " 🚀 Start Badges Farming");
    console.log("  " + COLORS.bold + COLORS.brightCyan + "[2]" + COLORS.reset + " ⚙️  Settings & Configuration");
    console.log("  " + COLORS.bold + COLORS.brightMagenta + "[3]" + COLORS.reset + " 📊 Badges & Progress Statistics");
    console.log("  " + COLORS.bold + COLORS.brightYellow + "[4]" + COLORS.reset + " 🎮 Manual Game Selector");
    console.log("  " + COLORS.bold + COLORS.brightRed + "[5]" + COLORS.reset + " 🔄 Reset All Progress");
    console.log("  " + COLORS.bold + COLORS.brightWhite + "[6]" + COLORS.reset + " 🛡️  Build Obfuscated Production Release");
    console.log("  " + COLORS.bold + "[0]" + COLORS.reset + " 🚪 Exit Application\n");
    const griffith = (await askQuestion("  " + COLORS.bold + COLORS.brightGreen + "Select an option [0-6]: " + COLORS.reset)).trim();
    switch (griffith) {
      case "1":
        await startFarming();
        break;
      case "2":
        await runSettingsMenu();
        break;
      case "3":
        await runStatsScreen();
        break;
      case "4":
        {
          const stephaney = await runManualGamePicker();
          if (stephaney) {
            await startFarming(stephaney);
          }
          break;
        }
      case "5":
        await runResetProgressPrompt();
        break;
      case "6":
        await runBuildScreen();
        break;
      case "0":
        console.clear();
        printBrandBanner();
        console.log("  " + COLORS.brightCyan + "Thank you for using EnzoCord Badges Maxer! All progress saved safely." + COLORS.reset + "\n");
        process.exit(0);
        break;
      default:
        break;
    }
  }
}
main().catch(qwanesha => {
  if (qwanesha && (qwanesha.name === "AbortError" || qwanesha.code === "ABORT_ERR")) {
    console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
    process.exit(0);
  }
  console.error("[31m[EnzoCord Fatal Error][0m", qwanesha);
});
