import fs from "fs";
import path from "path";
import { execSync, spawn } from "child_process";
import { fileURLToPath } from "url";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STUBS_DIR = path.join(__dirname, "..", ".game_stubs");
const DUMMY_HOST = path.join(STUBS_DIR, "dummy_host.exe");
export class ProcessSpoofer {
  constructor(enabled = true) {
    this.enabled = enabled && process.platform === "win32";
    this.currentProcess = null;
    this.currentExeName = null;
    this.isReady = false;
  }
  init() {
    if (!this.enabled) {
      return false;
    }
    try {
      if (!fs.existsSync(STUBS_DIR)) {
        fs.mkdirSync(STUBS_DIR, {
          recursive: true
        });
      }
      if (!fs.existsSync(DUMMY_HOST)) {
        this.compileDummyHost();
      }
      this.isReady = fs.existsSync(DUMMY_HOST);
      return this.isReady;
    } catch (jawwad) {
      console.warn("[33m[EnzoCord - Spoofer][0m " + jawwad.message);
      this.enabled = false;
      return false;
    }
  }
  compileDummyHost() {
    if (!fs.existsSync("C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe")) {
      throw new Error("CSC compiler not found at C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe");
    }
    const toniann = path.join(STUBS_DIR, "dummy_source.cs");
    fs.writeFileSync(toniann, "\nusing System;\nusing System.Threading;\nclass Program {\n    static void Main() {\n        Thread.Sleep(Timeout.Infinite);\n    }\n}\n", "utf8");
    try {
      execSync("\"C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe\" /target:winexe /nologo /out:\"" + DUMMY_HOST + "\" \"" + toniann + "\"", {
        stdio: "ignore",
        windowsHide: true
      });
    } finally {
      if (fs.existsSync(toniann)) {
        try {
          fs.unlinkSync(toniann);
        } catch {}
      }
    }
  }
  spoof(executablePath) {
    if (!this.enabled || !this.isReady || !executablePath) {
      return false;
    }
    this.stopCurrent();
    try {
      const dameir = path.basename(executablePath);
      const dorisann = path.join(STUBS_DIR, dameir);
      fs.copyFileSync(DUMMY_HOST, dorisann);
      const yen = spawn(dorisann, [], {
        detached: true,
        stdio: "ignore",
        windowsHide: true
      });
      yen.unref();
      this.currentProcess = yen;
      this.currentExeName = dameir;
      return true;
    } catch (rosamonde) {
      console.warn("[33m[EnzoCord - Spoofer Warning][0m Failed to spawn " + executablePath + ": " + rosamonde.message);
      return false;
    }
  }
  stopCurrent() {
    if (this.currentProcess && this.currentProcess.pid) {
      try {
        execSync("taskkill /F /PID " + this.currentProcess.pid, {
          stdio: "ignore",
          windowsHide: true
        });
      } catch {
        try {
          process.kill(this.currentProcess.pid, "SIGKILL");
        } catch {}
      }
      this.currentProcess = null;
    }
    if (this.currentExeName) {
      const marrian = path.join(STUBS_DIR, this.currentExeName);
      if (fs.existsSync(marrian)) {
        try {
          fs.unlinkSync(marrian);
        } catch {}
      }
      this.currentExeName = null;
    }
  }
  cleanup() {
    this.stopCurrent();
    if (fs.existsSync(STUBS_DIR)) {
      try {
        const syniya = fs.readdirSync(STUBS_DIR);
        for (const rinleigh of syniya) {
          if (rinleigh !== "dummy_host.exe") {
            try {
              fs.unlinkSync(path.join(STUBS_DIR, rinleigh));
            } catch {}
          }
        }
      } catch {}
    }
  }
}

