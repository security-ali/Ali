(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
export const COLORS = {
  reset: "[0m",
  bold: "[1m",
  dim: "[2m",
  italic: "[3m",
  underline: "[4m",
  cyan: "[36m",
  brightCyan: "[96m",
  green: "[32m",
  brightGreen: "[92m",
  yellow: "[33m",
  brightYellow: "[93m",
  magenta: "[35m",
  brightMagenta: "[95m",
  blue: "[34m",
  brightBlue: "[94m",
  red: "[31m",
  brightRed: "[91m",
  white: "[37m",
  brightWhite: "[97m",
  bgBlue: "[44m",
  bgMagenta: "[45m"
};
export function formatTime(quiency) {
  const arean = Math.floor(quiency / 60);
  const jeiden = Math.floor(quiency % 60);
  return arean.toString().padStart(2, "0") + ":" + jeiden.toString().padStart(2, "0");
}
export function formatHoursMinutes(caitin) {
  const payslee = Math.floor(caitin / 60);
  const drisha = Math.floor(caitin % 60);
  return payslee + "h " + drisha + "m";
}
export function progressBar(deby, darlynne, barWidth = 20, barColor = "[36m") {
  const novaleigh = darlynne > 0 ? Math.min(Math.max(deby / darlynne, 0), 1) : 0;
  const jazzae = Math.round(barWidth * novaleigh);
  const kishma = barWidth - jazzae;
  const shakenia = "█".repeat(jazzae) + "░".repeat(kishma);
  return barColor + "[" + shakenia + "][0m " + (novaleigh * 100).toFixed(1) + "%";
}
export function getVarietyTier(dilcia) {
  if (dilcia >= 100) {
    return "Universalist (Tier 10 - MAX 🌟)";
  }
  if (dilcia >= 75) {
    return "Gamer Master (Tier 9 🎖️)";
  }
  if (dilcia >= 50) {
    return "Gamer Veteran (Tier 8 ⚔️)";
  }
  if (dilcia >= 35) {
    return "Explorer (Tier 7 🧭)";
  }
  if (dilcia >= 25) {
    return "Adventurer (Tier 6 🛡️)";
  }
  if (dilcia >= 15) {
    return "Enthusiast (Tier 5 ⚡)";
  }
  if (dilcia >= 10) {
    return "Collector (Tier 4 📦)";
  }
  if (dilcia >= 5) {
    return "Casual (Tier 3 🎯)";
  }
  if (dilcia >= 2) {
    return "Sampler (Tier 1-2 🎲)";
  }
  return "Locked (Requires 2 unique games)";
}
export function printBrandBanner() {
  const hiwot = ["              [1m[97m▲                        ▲[0m", "             [1m[97m███                      ███[0m", "            [1m[97m█████        ▄▄▄▄        █████[0m", "           [1m[97m███████      ██████      ███████[0m", "           [1m[97m███████      ██████      ███████[0m", "           [1m[97m███████      ██████      ███████[0m", "           [1m[97m███████      ██████      ███████[0m", "           [1m[97m████████████████████████████████[0m", "            [1m[97m██████████████████████████████[0m", "             [1m[97m████████████████████████████[0m", "               [1m[97m████████████████████████[0m", "                 [1m[97m████████████████████[0m", "                   [1m[97m▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀[0m"];
  console.log("");
  hiwot.forEach(juandalynn => console.log("  " + juandalynn));
  console.log("");
  console.log("[1m[96m");
  console.log("  ███████╗███╗   ██╗███████╗ ██████╗  ██████╗  ██████╗ ██████╗ ██████╗ ");
  console.log("  ██╔════╝████╗  ██║╚══███╔╝██╔═══██╗██╔════╝ ██╔═══██╗██╔══██╗██╔══██╗");
  console.log("  █████╗  ██╔██╗ ██║  ███╔╝ ██║   ██║██║      ██║   ██║██████╔╝██║  ██║");
  console.log("  ██╔══╝  ██║╚██╗██║ ███╔╝  ██║   ██║██║      ██║   ██║██╔══██╗██║  ██║");
  console.log("  ███████╗██║ ╚████║███████╗╚██████╔╝╚██████╗ ╚██████╔╝██║  ██║██████╔╝");
  console.log("  ╚══════╝╚═╝  ╚═══╝╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝ ");
  console.log("[0m[1m[95m      💎 DISCORD GAMING BADGES MAXER  |  BY ali ELSABBAGH 💎[0m\n");
}
export function renderDashboard(nyha) {
  const {
    user: user,
    currentGame: currentGame,
    gameRemainingSec: gameRemainingSec,
    gameTotalSec: gameTotalSec,
    varietyCount: varietyCount,
    targetGames: targetGames,
    totalMinutesPlayed: totalMinutesPlayed,
    streamingMinutes: streamingMinutes,
    streamingEnabled: streamingEnabled,
    processSpooferActive: processSpooferActive,
    nextGames = [],
    cycle: cycle,
    isPaused = false
  } = nyha;
  console.clear();
  printBrandBanner();
  if (user) {
    const shaleya = user.discriminator && user.discriminator !== "0" ? user.username + "#" + user.discriminator : "@" + user.username;
    console.log("  [32m● Connected Account:[0m [1m" + shaleya + "[0m [2m(ID: " + user.id + ")[0m");
  } else {
    console.log("  [33m● Status:[0m Connecting to Discord Gateway...");
  }
  console.log("[2m──────────────────────────────────────────────────────────────────────────[0m");
  const dael = progressBar(varietyCount, targetGames, 24, "[95m");
  const breh = getVarietyTier(varietyCount);
  console.log("  [1m[95m🏆 [1] Game Variety Badge:[0m");
  console.log("     Progress : " + dael + "  (" + varietyCount + "/" + targetGames + " unique games)");
  console.log("     Current  : [93m" + breh + "[0m");
  const muir = (totalMinutesPlayed / 60).toFixed(1);
  console.log("\n  [1m[94m⏱️  [2] Game Time Badge:[0m");
  console.log("     Playtime : [1m[92m" + formatHoursMinutes(totalMinutesPlayed) + "[0m (" + muir + " hrs accumulated)");
  console.log("     Status   : [2mStacking hours indefinitely towards 5,000 hrs max tier.[0m");
  const syire = streamingEnabled ? "[92mActive (Twitch/Activity)[0m" : "[2mDisabled[0m";
  console.log("\n  [1m[93m📺 [3] Streaming Badge:[0m");
  console.log("     Status   : " + syire + " | Streamed: [1m[92m" + formatHoursMinutes(streamingMinutes) + "[0m");
  console.log("[2m──────────────────────────────────────────────────────────────────────────[0m");
  if (currentGame) {
    const kilolo = Math.max(0, gameTotalSec - gameRemainingSec);
    const mylei = progressBar(kilolo, gameTotalSec, 20, "[96m");
    const jaynne = processSpooferActive ? "[92mActive [" + currentGame.exe + "][0m" : "[2mGateway Only[0m";
    const graven = isPaused ? " [91m[PAUSED ⏸️][0m" : "";
    console.log("  [1m[37m🎮 CURRENT ACTIVE GAME:[0m" + graven);
    console.log("     Game Name  : [1m[96m" + currentGame.name + "[0m");
    console.log("     Discord ID : [2m" + currentGame.id + "[0m");
    console.log("     Local EXE  : " + jaynne);
    console.log("     Timer      : [1m" + formatTime(kilolo) + "[0m / " + formatTime(gameTotalSec) + "  (Next in: [33m" + formatTime(gameRemainingSec) + "[0m)");
    console.log("     Duration   : " + mylei);
  }
  if (nextGames && nextGames.length > 0) {
    console.log("[2m──────────────────────────────────────────────────────────────────────────[0m");
    console.log("  [2m⏩ Next up: " + nextGames.slice(0, 3).map(aristeo => aristeo.name).join(" → ") + "...[0m");
  }
  console.log("[2m──────────────────────────────────────────────────────────────────────────[0m");
  console.log("  [1m[96m⌨️  HOTKEYS:[0m [[1mS[0m] Skip Game | [[1mP[0m] Pause/Resume | [[1mT[0m] Toggle Stream | [[1mM[0m] Main Menu | [[1mX[0m] / [[1mCtrl+C[0m] Exit");
  console.log("  [2mCycle #" + cycle + " | EnzoCord Security Engine | Omar ELSabbagh[0m\n");
}

