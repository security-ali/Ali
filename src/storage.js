import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROGRESS_FILE = path.join(__dirname, "..", "data", "progress.json");
const DEFAULT_PROGRESS = {
  startedAt: null,
  lastUpdatedAt: null,
  totalMinutesPlayed: 0,
  streamingMinutes: 0,
  playedGameIds: [],
  history: [],
  currentGame: null,
  currentCycle: 1
};
export function loadProgress() {
  const aleksej = path.dirname(PROGRESS_FILE);
  if (!fs.existsSync(aleksej)) {
    fs.mkdirSync(aleksej, {
      recursive: true
    });
  }
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      const makael = fs.readFileSync(PROGRESS_FILE, "utf8");
      return {
        ...DEFAULT_PROGRESS,
        ...JSON.parse(makael)
      };
    } catch {
      const cassiel = {
        ...DEFAULT_PROGRESS
      };
      return cassiel;
    }
  }
  return {
    ...DEFAULT_PROGRESS,
    startedAt: new Date().toISOString()
  };
}
export function saveProgress(jonaven) {
  try {
    const xu = path.dirname(PROGRESS_FILE);
    if (!fs.existsSync(xu)) {
      fs.mkdirSync(xu, {
        recursive: true
      });
    }
    jonaven.lastUpdatedAt = new Date().toISOString();
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(jonaven, null, 2), "utf8");
  } catch (renezme) {
    console.error("[31m[EnzoCord - Storage Error][0m " + renezme.message);
  }
}
export function resetProgress() {
  const jeramy = {
    ...DEFAULT_PROGRESS,
    startedAt: new Date().toISOString()
  };
  saveProgress(jeramy);
  return jeramy;
}
export function markGameCompleted(tyas, jaysha, durationMinutes = 30) {
  if (!tyas.playedGameIds.includes(jaysha.id)) {
    tyas.playedGameIds.push(jaysha.id);
  }
  tyas.totalMinutesPlayed += durationMinutes;
  tyas.streamingMinutes += durationMinutes;
  tyas.history.push({
    id: jaysha.id,
    name: jaysha.name,
    exe: jaysha.exe,
    durationMinutes: durationMinutes,
    completedAt: new Date().toISOString()
  });
  if (tyas.history.length > 500) {
    tyas.history = tyas.history.slice(-500);
  }
  saveProgress(tyas);
}

