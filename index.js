(() => {
  const _0x1a7cd2 = {
    hTPyl: function (_0x40a46b, _0xe9191a, _0x84f45e, _0x322ac2) {
      return _0x40a46b(_0xe9191a, _0x84f45e, _0x322ac2);
    },
    pPeQx: function (_0x9fa01c, _0xd9c788) {
      return _0x9fa01c >= _0xd9c788;
    },
    SfQBt: function (_0x11e3c7, _0x105ebf) {
      return _0x11e3c7 + _0x105ebf;
    },
    LKBJD: function (_0x27ee28, _0x7b9939) {
      return _0x27ee28(_0x7b9939);
    },
    XYLrW: function (_0xa5cfd5, _0x349630) {
      return _0xa5cfd5(_0x349630);
    },
    kfcJm: function (_0x31f1ea) {
      return _0x31f1ea();
    },
    CmKYV: "EnzoCord - Omar ELSabbagh",
    tYnRQ: "EnzoCord",
    iswGl: "Omar ELSabbagh",
    CLVrn: function (_0x1fe5a2, _0x30bc76) {
      return _0x1fe5a2 !== _0x30bc76;
    },
    vfWaH: "iytks",
    VeKLP: "Integrity check failed: Copyright violation detected."
  };
  const _0x5da3b2 = _0x1a7cd2.CmKYV;
  if (!_0x5da3b2.includes(_0x1a7cd2.tYnRQ) || !_0x5da3b2.includes(_0x1a7cd2.iswGl)) {
    if (_0x1a7cd2.CLVrn(_0x1a7cd2.vfWaH, "iytks")) {
      _0x1a7cd2.hTPyl(_0x5df2c4, _0x28cbdf, _0x2fc1b2, _0x41f389.rotationMinutes);
      _0x263286 = _0x4c5387();
      _0x38c5bc++;
      if (_0x1a7cd2.pPeQx(_0x192e7f, _0x196c19.length)) {
        _0x34e32d = 0;
        _0x226133.currentCycle = _0x1a7cd2.SfQBt(_0x252d27.currentCycle || 1, 1);
        _0x1a7cd2.LKBJD(_0x5b5d2c, _0x48966d);
      }
      const _0x5e3445 = _0x3c514e[_0x40fb7b] || _0x524790[0];
      _0x1a7cd2.XYLrW(_0x1673cf, _0x5e3445);
      _0x1a7cd2.kfcJm(_0x41c647);
    } else {
      throw new Error(_0x1a7cd2.VeKLP);
    }
  }
})();
import _0x249676 from "readline";
import { loadConfig, updateEnvFile } from "./src/config.js";
import { getDetectableGames } from "./src/games.js";
import { loadProgress, saveProgress, markGameCompleted } from "./src/storage.js";
import { ProcessSpoofer } from "./src/process_spoofer.js";
import { DiscordGateway } from "./src/gateway.js";
import { renderDashboard, COLORS, printBrandBanner, formatHoursMinutes } from "./src/ui.js";
import { askQuestion, pauseKey, runSettingsMenu, runStatsScreen, runResetProgressPrompt, runManualGamePicker, runBuildScreen } from "./src/menu.js";
try {
  _0x249676.emitKeypressEvents(process.stdin);
} catch {}
let farmingActive = false;
let farmingPaused = false;
let stopFarmingRequested = false;
export async function startFarming(_0x534c0d = null) {
  const _0x2e7d99 = {
    CydLu: function (_0xc23883) {
      return _0xc23883();
    },
    tCiBR: "token",
    qxomm: "Authentication",
    khHLs: function (_0x519184, _0x459649) {
      return _0x519184 === _0x459649;
    },
    aLLQk: "SKyRW",
    vLXEF: "3|2|4|1|5|6|0",
    bGHrM: function (_0x2282cf, _0x442c99) {
      return _0x2282cf / _0x442c99;
    },
    zGkeW: function (_0x5617a6, _0x62f5bf) {
      return _0x5617a6 - _0x62f5bf;
    },
    GJRKy: function (_0x1f08b7, _0x5eb023) {
      return _0x1f08b7 - _0x5eb023;
    },
    jmUHu: function (_0x58d265, _0x5c0b5a) {
      return _0x58d265 + _0x5c0b5a;
    },
    bazyX: function (_0x3cc8b8, _0x3f93b3) {
      return _0x3cc8b8 + _0x3f93b3;
    },
    KLjIq: "Integrity check failed: Copyright violation detected.",
    lKZsJ: function (_0x119197, _0x1f221c) {
      return _0x119197(_0x1f221c);
    },
    rYSoe: function (_0x489131, _0x409628) {
      return _0x489131 !== _0x409628;
    },
    Ncaiv: "gsfDY",
    PmCms: function (_0x570727, _0x28f4c6, _0x5a1aa7, _0x420e12) {
      return _0x570727(_0x28f4c6, _0x5a1aa7, _0x420e12);
    },
    RtFbd: function (_0x2ae3df) {
      return _0x2ae3df();
    },
    xLlaV: "YvkQc",
    ENzwc: function (_0x50454b, _0x1851a9) {
      return _0x50454b(_0x1851a9);
    },
    zkotA: function (_0x44dcb4) {
      return _0x44dcb4();
    },
    qFwos: function (_0x38f387, _0x47642c) {
      return _0x38f387 / _0x47642c;
    },
    TePuK: "XyNyj",
    tPevK: "SykXV",
    fRfGJ: function (_0x31d01b, _0x6ec11b) {
      return _0x31d01b - _0x6ec11b;
    },
    omGrq: "hgEVS",
    dnGlj: function (_0x5bebb7, _0x5c8a4) {
      return _0x5bebb7 !== _0x5c8a4;
    },
    RQUOG: function (_0x13137c, _0x3b6f5b) {
      return _0x13137c(_0x3b6f5b);
    },
    cSDPD: function (_0x238cfa, _0x5ac5c3) {
      return _0x238cfa !== _0x5ac5c3;
    },
    dEDDY: "exit",
    pacqK: function (_0x71353e, _0x27b036) {
      return _0x71353e < _0x27b036;
    },
    HDEyr: function (_0x5f43f9) {
      return _0x5f43f9();
    },
    ACOHW: "skip",
    lpJBM: "dXSjX",
    NXdsY: function (_0x1b2765) {
      return _0x1b2765();
    },
    KwTnW: "pause",
    dKEMZ: "hTuir",
    QOQQt: function (_0x44b264) {
      return _0x44b264();
    },
    GSNpc: function (_0x4992ef, _0x516a7c) {
      return _0x4992ef === _0x516a7c;
    },
    oVPJa: "stream",
    VYeot: function (_0x730fd4, _0x12bf86) {
      return _0x730fd4 === _0x12bf86;
    },
    CaKNZ: "fkhlH",
    ueZvl: "wLTYr",
    JZAhI: function (_0x44c42e) {
      return _0x44c42e();
    },
    BraWI: function (_0x269f5f, _0x20734c) {
      return _0x269f5f === _0x20734c;
    },
    QSefh: "menu",
    DOllt: "[31m[EnzoCord Fatal Error][0m",
    KXSel: function (_0x57dca5, _0x289a63) {
      return _0x57dca5 === _0x289a63;
    },
    wVgfj: function (_0x463b91, _0x4fcf58) {
      return _0x463b91 === _0x4fcf58;
    },
    JWfVe: function (_0x10b675, _0xf4df2a) {
      return _0x10b675 === _0xf4df2a;
    },
    dnZZy: function (_0x922039, _0x3da7d9) {
      return _0x922039 || _0x3da7d9;
    },
    FzBKE: function (_0x2ba544, _0x146c57) {
      return _0x2ba544 === _0x146c57;
    },
    ofjIj: "CLJDS",
    CRrTw: function (_0x7dcf89, _0x191af8) {
      return _0x7dcf89 === _0x191af8;
    },
    eqhGf: function (_0x29dc02, _0xf3b04b) {
      return _0x29dc02 === _0xf3b04b;
    },
    twboh: function (_0x46ee92, _0x4163e4) {
      return _0x46ee92 === _0x4163e4;
    },
    zAQkz: function (_0x49d6e1, _0x3a2b63) {
      return _0x49d6e1 !== _0x3a2b63;
    },
    aRWDe: "IDHUL",
    eIPrk: "RlzPg",
    oVnOG: "CzXFx",
    ceeSG: function (_0x458b88) {
      return _0x458b88();
    },
    gKJfy: function (_0x211f11) {
      return _0x211f11();
    },
    HRzPI: function (_0x3934f5, _0x1aef75) {
      return _0x3934f5(_0x1aef75);
    },
    nwMnI: function (_0x4b22eb, _0x199d49) {
      return _0x4b22eb === _0x199d49;
    },
    rvBoZ: function (_0x35b6d1, _0x2bb068) {
      return _0x35b6d1 === _0x2bb068;
    },
    Ulvkn: function (_0x4276fc, _0x12328d) {
      return _0x4276fc === _0x12328d;
    },
    tfnPd: function (_0x2c545a, _0x42914c) {
      return _0x2c545a(_0x42914c);
    },
    GWLHT: function (_0x362f5b, _0x4085c1) {
      return _0x362f5b - _0x4085c1;
    },
    EIsdf: function (_0x2aa923, _0x32ebd0) {
      return _0x2aa923 - _0x32ebd0;
    },
    IjCpk: function (_0x103e70) {
      return _0x103e70();
    },
    jvFls: function (_0x2777d6, _0x41a946) {
      return _0x2777d6 === _0x41a946;
    },
    vhXht: "apfTg",
    hPhvy: "SIGINT",
    jplug: "SIGTERM",
    mGruz: "keypress",
    Ljold: "data",
    xCvyh: "AklxU",
    wWeXR: function (_0x47d190, _0x35e40c) {
      return _0x47d190 === _0x35e40c;
    },
    ZsXXG: "WTglx",
    HZbpO: function (_0x322d02, _0x11f5b2) {
      return _0x322d02(_0x11f5b2);
    },
    HULjM: "gPFqd",
    tHNkC: function (_0x156e8e) {
      return _0x156e8e();
    },
    amHhd: function (_0x240669, _0x5ac926) {
      return _0x240669 !== _0x5ac926;
    },
    iWYyt: "yRrAF",
    EwvDC: function (_0x3ccbfd, _0x3713ed) {
      return _0x3ccbfd(_0x3713ed);
    },
    ceaQw: function (_0x527751) {
      return _0x527751();
    },
    Ttrmq: function (_0x482222) {
      return _0x482222();
    },
    yMMTk: function (_0x2f6201, _0x27f384) {
      return _0x2f6201 === _0x27f384;
    },
    gxzam: function (_0x1ffa6b, _0x19ca33) {
      return _0x1ffa6b % _0x19ca33;
    },
    NFQBo: function (_0x410af0, _0x4c9518) {
      return _0x410af0 !== _0x4c9518;
    },
    HnxXY: function (_0x374616) {
      return _0x374616();
    },
    FBsoK: function (_0x536566) {
      return _0x536566();
    },
    iQAou: "your_discord_token_here",
    fCrGF: function (_0xb9012b) {
      return _0xb9012b();
    },
    lvTsO: function (_0x5dd8de, _0x49ca54, _0x108e58) {
      return _0x5dd8de(_0x49ca54, _0x108e58);
    },
    Wkuyx: "DISCORD_TOKEN",
    YlthU: function (_0x448535) {
      return _0x448535();
    },
    nrqyk: function (_0x189a07, _0x2efa83) {
      return _0x189a07 + _0x2efa83;
    },
    Ywopy: "ready",
    gMBbT: "error",
    XlJNC: "ptHOX",
    SCaau: "twvim"
  };
  const _0x1ba5d2 = _0x2e7d99.FBsoK(loadConfig);
  if (!_0x1ba5d2.token || _0x1ba5d2.token === _0x2e7d99.iQAou) {
    console.clear();
    printBrandBanner();
    console.log("  " + COLORS.bold + COLORS.brightRed + "⚠️  WARNING: Discord user token is missing in your configuration!" + COLORS.reset + "\n");
    const _0x5e98a9 = (await askQuestion("  " + COLORS.brightYellow + "Enter your Discord account token here: " + COLORS.reset)).trim();
    if (!_0x5e98a9) {
      console.log("  " + COLORS.dim + "Cancelled. Cannot start badges farming without a valid token." + COLORS.reset);
      await _0x2e7d99.fCrGF(pauseKey);
      return;
    }
    _0x2e7d99.lvTsO(updateEnvFile, _0x2e7d99.Wkuyx, _0x5e98a9);
    _0x1ba5d2.token = _0x5e98a9;
  }
  console.clear();
  printBrandBanner();
  console.log("  " + COLORS.brightCyan + "⏳ Initializing EnzoCord Engine & Connecting to Discord Gateway..." + COLORS.reset + "\n");
  const _0x2e586d = _0x2e7d99.YlthU(loadProgress);
  const _0x512ea3 = await _0x2e7d99.lKZsJ(getDetectableGames, _0x2e7d99.nrqyk(_0x1ba5d2.targetGamesCount, 20));
  const _0x1fd5f1 = new ProcessSpoofer(_0x1ba5d2.enableSpoofer);
  if (_0x1ba5d2.enableSpoofer) {
    _0x1fd5f1.init();
  }
  const _0x579126 = new DiscordGateway(_0x1ba5d2.token);
  let _0x3e81e1 = null;
  _0x579126.on(_0x2e7d99.Ywopy, _0x57c7fe => {
    _0x3e81e1 = _0x57c7fe;
    if (farmingActive) {
      _0x2e7d99.CydLu(_0x175b74);
    }
  });
  _0x579126.on(_0x2e7d99.gMBbT, _0x2f1572 => {
    if (_0x2f1572.message.includes(_0x2e7d99.tCiBR) || _0x2f1572.message.includes(_0x2e7d99.qxomm)) {
      if (_0x2e7d99.khHLs(_0x2e7d99.aLLQk, _0x2e7d99.aLLQk)) {
        console.error("\n  [31m[Gateway Error][0m " + _0x2f1572.message);
      } else {
        _0x56dbde = [_0x139b83, ..._0x33c557.filter(_0x2f8c5b => _0x2f8c5b.id !== _0x2116db.id)];
      }
    }
  });
  _0x579126.connect();
  function _0x225b8e() {
    const _0xb7b547 = _0x512ea3.filter(_0x43a28f => !_0x2e586d.playedGameIds.includes(_0x43a28f.id));
    const _0x14899a = _0x512ea3.filter(_0x412e4 => _0x2e586d.playedGameIds.includes(_0x412e4.id));
    return [..._0xb7b547, ..._0x14899a];
  }
  let _0x3a72c5 = _0x2e7d99.IjCpk(_0x225b8e);
  if (_0x534c0d) {
    _0x3a72c5 = [_0x534c0d, ..._0x3a72c5.filter(_0x185083 => _0x185083.id !== _0x534c0d.id)];
  }
  let _0xed2d3c = 0;
  let _0xcfdec1 = _0x3a72c5[_0xed2d3c] || _0x512ea3[0];
  let _0x20a096 = Date.now();
  let _0x129361 = 0;
  let _0x5b693d = null;
  const _0x1b6cb9 = _0x1ba5d2.rotationMinutes * 60;
  let _0x1c1548 = _0x1ba5d2.streamingEnabled;
  function _0x2a108b(_0x597985) {
    const _0x313213 = _0x2e7d99.vLXEF.split("|");
    let _0xe92e75 = 0;
    while (true) {
      switch (_0x313213[_0xe92e75++]) {
        case "0":
          const _0x38926f = {
            enabled: _0x1c1548,
            url: _0x1ba5d2.streamingUrl,
            title: _0x1ba5d2.streamTitle
          };
          _0x579126.setPresence(_0xcfdec1, _0x38926f);
          continue;
        case "1":
          _0x5b693d = null;
          continue;
        case "2":
          _0x20a096 = Date.now();
          continue;
        case "3":
          _0xcfdec1 = _0x597985;
          continue;
        case "4":
          _0x129361 = 0;
          continue;
        case "5":
          _0xcfdec1.startTimestamp = _0x20a096;
          continue;
        case "6":
          if (_0x1fd5f1.enabled && _0xcfdec1.exe) {
            _0x1fd5f1.spoof(_0xcfdec1.exe);
          }
          continue;
      }
      break;
    }
  }
  _0x2a108b(_0xcfdec1);
  farmingActive = true;
  farmingPaused = false;
  stopFarmingRequested = false;
  function _0x175b74() {
    if (!farmingActive) {
      return;
    }
    const _0x3be859 = Date.now();
    const _0x331917 = farmingPaused ? _0x129361 : Math.floor(_0x2e7d99.bGHrM(_0x2e7d99.zGkeW(_0x3be859, _0x20a096), 1000));
    const _0x3de031 = Math.max(0, _0x2e7d99.GJRKy(_0x1b6cb9, _0x331917));
    renderDashboard({
      user: _0x3e81e1,
      currentGame: _0xcfdec1,
      gameRemainingSec: _0x3de031,
      gameTotalSec: _0x1b6cb9,
      varietyCount: _0x2e586d.playedGameIds.length,
      targetGames: _0x1ba5d2.targetGamesCount,
      totalMinutesPlayed: _0x2e586d.totalMinutesPlayed,
      streamingMinutes: _0x2e586d.streamingMinutes,
      streamingEnabled: _0x1c1548,
      processSpooferActive: _0x1fd5f1.enabled && !!_0x1fd5f1.currentProcess,
      nextGames: _0x3a72c5.slice(_0x2e7d99.jmUHu(_0xed2d3c, 1), _0x2e7d99.bazyX(_0xed2d3c, 4)),
      cycle: _0x2e586d.currentCycle || 1,
      isPaused: farmingPaused
    });
  }
  function _0x552fc8() {
    if (_0x2e7d99.rYSoe(_0x2e7d99.Ncaiv, _0x2e7d99.Ncaiv)) {
      throw new _0x1be19c(gSUrZg.KLjIq);
    } else {
      _0x2e7d99.PmCms(markGameCompleted, _0x2e586d, _0xcfdec1, _0x1ba5d2.rotationMinutes);
      _0x3a72c5 = _0x2e7d99.RtFbd(_0x225b8e);
      _0xed2d3c++;
      if (_0xed2d3c >= _0x3a72c5.length) {
        if (_0x2e7d99.rYSoe(_0x2e7d99.xLlaV, "YvkQc")) {
          _0x2e7d99.lKZsJ(_0x12b6b5, _0x48d036);
        } else {
          _0xed2d3c = 0;
          _0x2e586d.currentCycle = (_0x2e586d.currentCycle || 1) + 1;
          saveProgress(_0x2e586d);
        }
      }
      const _0x4959a2 = _0x3a72c5[_0xed2d3c] || _0x512ea3[0];
      _0x2e7d99.ENzwc(_0x2a108b, _0x4959a2);
      _0x2e7d99.zkotA(_0x175b74);
    }
  }
  function _0x5c95ac() {
    const _0x203b35 = {
      gKRdJ: function (_0x12f243, _0x331d5c) {
        return _0x2e7d99.qFwos(_0x12f243, _0x331d5c);
      },
      AcJyb: function (_0x3f467b, _0x2b5b96) {
        return _0x2e7d99.zGkeW(_0x3f467b, _0x2b5b96);
      }
    };
    if (_0x2e7d99.khHLs(_0x2e7d99.TePuK, _0x2e7d99.tPevK)) {
      _0x2e4d50 = _0x63d56.now();
      _0xe321d = _0x493939.floor(_0x203b35.gKRdJ(_0x203b35.AcJyb(_0xf52869.now(), _0x2b3092), 1000));
    } else {
      farmingPaused = !farmingPaused;
      if (farmingPaused) {
        _0x5b693d = Date.now();
        _0x129361 = Math.floor(_0x2e7d99.fRfGJ(Date.now(), _0x20a096) / 1000);
      } else if (_0x5b693d) {
        _0x20a096 += _0x2e7d99.GJRKy(Date.now(), _0x5b693d);
        _0x5b693d = null;
      }
      _0x2e7d99.CydLu(_0x175b74);
    }
  }
  function _0xb1f1ea() {
    _0x1c1548 = !_0x1c1548;
    const _0x35167d = {
      enabled: _0x1c1548,
      url: _0x1ba5d2.streamingUrl,
      title: _0x1ba5d2.streamTitle
    };
    _0x579126.setPresence(_0xcfdec1, _0x35167d);
    _0x2e7d99.zkotA(_0x175b74);
  }
  function _0x2ad4ba() {
    const _0x2d2757 = {
      xMzqU: function (_0x3afb89) {
        return _0x2e7d99.RtFbd(_0x3afb89);
      }
    };
    if (_0x2e7d99.rYSoe(_0x2e7d99.omGrq, "OGIiq")) {
      farmingActive = false;
      try {
        if (_0x2e7d99.dnGlj("BDtUK", "BDtUK")) {
          _0x2d2757.xMzqU(_0x525930);
        } else {
          _0x2e7d99.CydLu(_0x14d760);
        }
      } catch {}
      console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
      process.exit(0);
    } else {
      _0x23b99a.pause();
    }
  }
  let _0x2cb7b8 = 0;
  function _0x40d4b2(_0x575244) {
    const _0x33105b = Date.now();
    if (_0x2e7d99.cSDPD(_0x575244, _0x2e7d99.dEDDY) && _0x2e7d99.pacqK(_0x2e7d99.GJRKy(_0x33105b, _0x2cb7b8), 250)) {
      return;
    }
    _0x2cb7b8 = _0x33105b;
    if (_0x2e7d99.khHLs(_0x575244, "exit")) {
      _0x2e7d99.HDEyr(_0x2ad4ba);
    } else if (_0x2e7d99.khHLs(_0x575244, _0x2e7d99.ACOHW)) {
      if (_0x2e7d99.khHLs(_0x2e7d99.lpJBM, "XBhvn")) {
        _0x2e7d99.RQUOG(_0x14cb82, "pause");
      } else {
        _0x2e7d99.NXdsY(_0x552fc8);
      }
    } else if (_0x2e7d99.khHLs(_0x575244, _0x2e7d99.KwTnW)) {
      if (_0x2e7d99.khHLs(_0x2e7d99.dKEMZ, "riOBw")) {
        const _0x234bf3 = _0x2c06a0.filter(_0x2ec3aa => !_0x522372.playedGameIds.includes(_0x2ec3aa.id));
        const _0xd26b99 = _0x4ea3a8.filter(_0x2122cf => _0x3af622.playedGameIds.includes(_0x2122cf.id));
        return [..._0x234bf3, ..._0xd26b99];
      } else {
        _0x2e7d99.QOQQt(_0x5c95ac);
      }
    } else if (_0x2e7d99.GSNpc(_0x575244, _0x2e7d99.oVPJa)) {
      if (_0x2e7d99.VYeot(_0x2e7d99.CaKNZ, _0x2e7d99.ueZvl)) {
        return;
      } else {
        _0x2e7d99.JZAhI(_0xb1f1ea);
      }
    } else if (_0x2e7d99.BraWI(_0x575244, _0x2e7d99.QSefh)) {
      stopFarmingRequested = true;
    }
  }
  const _0x33ab0b = process.stdin;
  if (_0x33ab0b.isTTY && _0x33ab0b.setRawMode) {
    if (_0x2e7d99.rvBoZ(_0x2e7d99.XlJNC, _0x2e7d99.SCaau)) {
      _0x2e7d99.CydLu(_0x597807);
    } else {
      try {
        _0x33ab0b.setRawMode(true);
      } catch {}
    }
  }
  _0x33ab0b.resume();
  const _0x55d4c6 = () => {
    _0x2e7d99.JZAhI(_0x2ad4ba);
  };
  process.on(_0x2e7d99.hPhvy, _0x55d4c6);
  process.on(_0x2e7d99.jplug, _0x55d4c6);
  const _0x17d807 = (_0x18e127, _0x261c8b) => {
    const _0x1134f1 = {
      BPIAl: function (_0x5e9221, _0x201218) {
        return _0x5e9221 === _0x201218;
      },
      Ychff: "AbortError",
      IuyXI: function (_0xa3a60c, _0x177757) {
        return _0x2e7d99.VYeot(_0xa3a60c, _0x177757);
      },
      PSQBl: _0x2e7d99.DOllt
    };
    if (!farmingActive) {
      return;
    }
    if (_0x261c8b && _0x261c8b.ctrl && (_0x2e7d99.KXSel(_0x261c8b.name, "c") || _0x2e7d99.wVgfj(_0x261c8b.name, "C")) || _0x261c8b && (_0x261c8b.sequence === "" || _0x2e7d99.JWfVe(_0x261c8b.sequence, "")) || _0x18e127 === "" || _0x18e127 === "") {
      _0x2e7d99.RtFbd(_0x2ad4ba);
      return;
    }
    const _0x5a987a = _0x261c8b ? _0x261c8b.name || "" : "";
    const _0x46e8e7 = _0x2e7d99.dnZZy(_0x18e127, "").toLowerCase();
    if (_0x5a987a === "x" || _0x2e7d99.FzBKE(_0x46e8e7, "x")) {
      if (_0x2e7d99.rYSoe(_0x2e7d99.ofjIj, "CLJDS")) {
        if (_0x2a090c && (_0x1134f1.BPIAl(_0x229083.name, _0x1134f1.Ychff) || _0x1134f1.IuyXI(_0x41ed04.code, "ABORT_ERR"))) {
          _0x10834f.log("\n  " + _0x35abcc.brightYellow + "✔ Progress saved safely. Goodbye!" + _0x2c7628.reset + "\n");
          _0x35923b.exit(0);
        }
        _0xafbd38.error(_0x1134f1.PSQBl, _0x2481d2);
      } else {
        _0x2e7d99.zkotA(_0x2ad4ba);
        return;
      }
    }
    if (_0x2e7d99.khHLs(_0x5a987a, "s") || _0x2e7d99.CRrTw(_0x46e8e7, "s")) {
      _0x40d4b2(_0x2e7d99.ACOHW);
    } else if (_0x2e7d99.eqhGf(_0x5a987a, "p") || _0x2e7d99.eqhGf(_0x46e8e7, "p")) {
      _0x2e7d99.lKZsJ(_0x40d4b2, _0x2e7d99.KwTnW);
    } else if (_0x2e7d99.twboh(_0x5a987a, "t") || _0x2e7d99.twboh(_0x46e8e7, "t")) {
      if (_0x2e7d99.zAQkz("LWXvO", "xyHOH")) {
        _0x2e7d99.lKZsJ(_0x40d4b2, _0x2e7d99.oVPJa);
      } else {
        _0x12aecf("stream");
      }
    } else if (_0x2e7d99.CRrTw(_0x5a987a, "m") || _0x2e7d99.twboh(_0x46e8e7, "m") || _0x2e7d99.VYeot(_0x5a987a, "q") || _0x2e7d99.GSNpc(_0x46e8e7, "q") || _0x5a987a === "escape") {
      if (_0x2e7d99.zAQkz(_0x2e7d99.aRWDe, _0x2e7d99.eIPrk)) {
        _0x40d4b2(_0x2e7d99.QSefh);
      } else {
        _0x415967 += _0x4e4bcf.now() - _0x169507;
        _0x4a0fd1 = null;
      }
    }
  };
  const _0x81b2 = _0x55c07b => {
    if (!farmingActive) {
      return;
    }
    if (!_0x55c07b || _0x2e7d99.khHLs(_0x55c07b.length, 0)) {
      return;
    }
    if (_0x2e7d99.JWfVe(_0x55c07b[0], 3) || _0x55c07b.includes(3)) {
      if (_0x2e7d99.dnGlj(_0x2e7d99.oVnOG, _0x2e7d99.oVnOG)) {
        _0x2f894a.cleanup();
      } else {
        _0x2e7d99.HDEyr(_0x2ad4ba);
        return;
      }
    }
    const _0xb7388 = _0x55c07b.toString().toLowerCase();
    if (_0xb7388.includes("") || _0xb7388.includes("")) {
      _0x2e7d99.ceeSG(_0x2ad4ba);
      return;
    }
    if (_0x2e7d99.JWfVe(_0xb7388.trim(), "x")) {
      _0x2e7d99.gKJfy(_0x2ad4ba);
      return;
    }
    if (_0xb7388 === "s" || _0xb7388.includes("s")) {
      _0x2e7d99.HRzPI(_0x40d4b2, _0x2e7d99.ACOHW);
    } else if (_0x2e7d99.nwMnI(_0xb7388, "p") || _0xb7388.includes("p")) {
      _0x40d4b2(_0x2e7d99.KwTnW);
    } else if (_0x2e7d99.GSNpc(_0xb7388, "t") || _0xb7388.includes("t")) {
      _0x2e7d99.ENzwc(_0x40d4b2, _0x2e7d99.oVPJa);
    } else if (_0x2e7d99.rvBoZ(_0xb7388, "m") || _0xb7388.includes("m") || _0x2e7d99.Ulvkn(_0xb7388, "q") || _0xb7388.includes("q") || _0xb7388.includes("")) {
      _0x2e7d99.tfnPd(_0x40d4b2, "menu");
    }
  };
  _0x33ab0b.on(_0x2e7d99.mGruz, _0x17d807);
  _0x33ab0b.on(_0x2e7d99.Ljold, _0x81b2);
  function _0x14d760() {
    if (_0x2e7d99.jvFls(_0x2e7d99.vhXht, "upJDS")) {
      lRTAnf.icMDB(_0x3e564a);
      return;
    } else {
      farmingActive = false;
      process.removeListener(_0x2e7d99.hPhvy, _0x55d4c6);
      process.removeListener(_0x2e7d99.jplug, _0x55d4c6);
      _0x33ab0b.removeListener(_0x2e7d99.mGruz, _0x17d807);
      _0x33ab0b.removeListener(_0x2e7d99.Ljold, _0x81b2);
      if (_0x33ab0b.isTTY && _0x33ab0b.setRawMode) {
        try {
          if (_0x2e7d99.CRrTw("AklxU", _0x2e7d99.xCvyh)) {
            _0x33ab0b.setRawMode(false);
          } else {
            if (!_0xf445f9) {
              return;
            }
            const _0x36a7f0 = _0x30fb0b.now();
            const _0x5dd770 = _0x2f59e2 ? _0x24656a : _0x4953d0.floor(_0x2e7d99.qFwos(_0x2e7d99.GWLHT(_0x36a7f0, _0x5f5ac4), 1000));
            const _0x4c545d = _0x4f48e5.max(0, _0x2e7d99.EIsdf(_0x4c69a0, _0x5dd770));
            _0x2e7d99.tfnPd(_0x1b8a63, {
              user: _0x5795de,
              currentGame: _0x61b9ce,
              gameRemainingSec: _0x4c545d,
              gameTotalSec: _0x19b3de,
              varietyCount: _0x200d0b.playedGameIds.length,
              targetGames: _0x233dca.targetGamesCount,
              totalMinutesPlayed: _0x5bddc2.totalMinutesPlayed,
              streamingMinutes: _0x2732a4.streamingMinutes,
              streamingEnabled: _0x4def5b,
              processSpooferActive: _0x309947.enabled && !!_0x325b22.currentProcess,
              nextGames: _0x49333a.slice(_0x2e7d99.bazyX(_0x3e588c, 1), _0x2e7d99.bazyX(_0x4573f4, 4)),
              cycle: _0x1216a2.currentCycle || 1,
              isPaused: _0x28c17f
            });
          }
        } catch {}
      }
      try {
        _0x33ab0b.pause();
      } catch {}
      try {
        if (_0x2e7d99.wWeXR(_0x2e7d99.ZsXXG, _0x2e7d99.ZsXXG)) {
          _0x2e7d99.HZbpO(saveProgress, _0x2e586d);
        } else {
          _0x37d821 = _0x4a4de9;
          if (_0xd53559) {
            _0x2e7d99.IjCpk(_0x2c55a5);
          }
        }
      } catch {}
      try {
        if (_0x2e7d99.jvFls(_0x2e7d99.HULjM, "gPFqd")) {
          _0x1fd5f1.cleanup();
        } else {
          _0x2e7d99.HRzPI(_0x56ce42, _0x2fe3f1);
          _0x2e7d99.gKJfy(_0x5c9beb);
          _0x3c9470();
          return;
        }
      } catch {}
      try {
        _0x579126.disconnect();
      } catch {}
    }
  }
  let _0x5618bc = 0;
  return new Promise(_0x130717 => {
    const _0x1966b6 = {
      amXoD: function (_0x2c9397) {
        return _0x2e7d99.tHNkC(_0x2c9397);
      },
      yvDss: function (_0x17f51b, _0x2ebf25) {
        return _0x2e7d99.amHhd(_0x17f51b, _0x2ebf25);
      },
      DuAfK: _0x2e7d99.iWYyt,
      mBuNf: function (_0x39b741, _0x14944f) {
        return _0x2e7d99.EwvDC(_0x39b741, _0x14944f);
      },
      mJOJh: function (_0xcc2caf) {
        return _0xcc2caf();
      },
      IlWxW: function (_0x22bd5e) {
        return _0x2e7d99.ceaQw(_0x22bd5e);
      },
      spSBm: function (_0x51db4f, _0x4f4052) {
        return _0x2e7d99.bGHrM(_0x51db4f, _0x4f4052);
      },
      jjxLj: function (_0x316c7a, _0x2eec9e) {
        return _0x2e7d99.EIsdf(_0x316c7a, _0x2eec9e);
      },
      LDcDI: function (_0xfac029) {
        return _0x2e7d99.Ttrmq(_0xfac029);
      },
      WSIXc: "XUnif",
      DokNY: function (_0x12b19c, _0x34b055) {
        return _0x2e7d99.yMMTk(_0x12b19c, _0x34b055);
      },
      CrTkg: function (_0xd4286b, _0x4a6c0e) {
        return _0x2e7d99.gxzam(_0xd4286b, _0x4a6c0e);
      },
      qYKXy: function (_0x16b714, _0x51c212) {
        return _0x2e7d99.NFQBo(_0x16b714, _0x51c212);
      },
      RycqQ: "jSPCt"
    };
    _0x2e7d99.HnxXY(_0x175b74);
    const _0x53fe2a = setInterval(() => {
      const _0x26aa56 = {
        Xayzw: function (_0x3f3ba6) {
          return _0x1966b6.amXoD(_0x3f3ba6);
        }
      };
      if (_0x1966b6.yvDss(_0x1966b6.DuAfK, _0x1966b6.DuAfK)) {
        _0x415e88 = false;
        try {
          pApSOD.Xayzw(_0x575ab8);
        } catch {}
        _0x1d7b52.log("\n  " + _0x45948b.brightYellow + "✔ Progress saved safely. Goodbye!" + _0x23bb21.reset + "\n");
        _0x57710f.exit(0);
      } else {
        if (stopFarmingRequested) {
          _0x1966b6.mBuNf(clearInterval, _0x53fe2a);
          _0x14d760();
          _0x1966b6.mJOJh(_0x130717);
          return;
        }
        if (farmingPaused) {
          _0x1966b6.IlWxW(_0x175b74);
          return;
        }
        _0x5618bc++;
        const _0xaf2b5d = Date.now();
        const _0x438055 = Math.floor(_0x1966b6.spSBm(_0x1966b6.jjxLj(_0xaf2b5d, _0x20a096), 1000));
        _0x129361 = _0x438055;
        _0x1966b6.LDcDI(_0x175b74);
        if (_0x438055 >= _0x1b6cb9) {
          if (_0x1966b6.WSIXc !== _0x1966b6.WSIXc) {
            _0x470515();
            return;
          } else {
            _0x552fc8();
          }
        }
        if (_0x1966b6.DokNY(_0x1966b6.CrTkg(_0x5618bc, 60), 0)) {
          if (_0x1966b6.qYKXy(_0x1966b6.RycqQ, _0x1966b6.RycqQ)) {
            _0x219577.setRawMode(false);
          } else {
            _0x1966b6.mBuNf(saveProgress, _0x2e586d);
          }
        }
      }
    }, 1000);
  });
}
export async function main() {
  const _0x11b68e = {
    yOSrV: function (_0x6cf30a) {
      return _0x6cf30a();
    },
    QOBEo: "bnfnL",
    BaKOK: function (_0xdd935d, _0x2c3eff) {
      return _0xdd935d === _0x2c3eff;
    },
    RkbDX: "5|1|4|0|3|2|6",
    cehWv: function (_0x54277e, _0x15903b) {
      return _0x54277e !== _0x15903b;
    },
    xBwdT: "(((.+)+)+)+$",
    LTUFJ: function (_0x27e718, _0x31aeab) {
      return _0x27e718(_0x31aeab);
    },
    BDnAz: "skip",
    CpOMO: function (_0x4fc69b) {
      return _0x4fc69b();
    },
    cWpkV: "stream",
    UsoJe: function (_0x2b24d7, _0xdc0215, _0x538382) {
      return _0x2b24d7(_0xdc0215, _0x538382);
    },
    lmFYU: function (_0x225580) {
      return _0x225580();
    },
    vERml: function (_0x233d44) {
      return _0x233d44();
    },
    ZJBrf: "your_discord_token_here",
    GqmUB: "emEnO",
    lsryn: "pPywY",
    BHOtJ: "12|8|11|5|13|2|4|0|1|3|6|10|7|9|14",
    JkSbr: function (_0x10da37) {
      return _0x10da37();
    },
    cihRi: function (_0x2703ea, _0x3601f4) {
      return _0x2703ea(_0x3601f4);
    },
    yFjUG: "DISCORD_TOKEN",
    TXUYl: function (_0x323074, _0x137d78) {
      return _0x323074 === _0x137d78;
    },
    bvYRM: function (_0x260cd4, _0x3ab48b) {
      return _0x260cd4 === _0x3ab48b;
    },
    nqxVy: "yes",
    ueDqY: function (_0x58394b) {
      return _0x58394b();
    },
    sOvPK: function (_0x559365) {
      return _0x559365();
    },
    lpPxY: function (_0x5493e1) {
      return _0x5493e1();
    },
    MWoJF: "zzgty",
    epbRz: "nFwFr",
    rWzYu: function (_0x3b3780) {
      return _0x3b3780();
    }
  };
  const _0x327e84 = function () {
    const _0x2f3552 = {
      NktVV: _0x11b68e.RkbDX
    };
    const _0x3d9f81 = _0x2f3552;
    let _0x3d2351 = true;
    return function (_0x42f78a, _0x29c861) {
      const _0x207b6a = {
        ofmFz: function (_0x48c6ae) {
          return _0x11b68e.yOSrV(_0x48c6ae);
        },
        oqBsi: function (_0x4b9bbd, _0x2c72d7) {
          return _0x4b9bbd !== _0x2c72d7;
        },
        CmLBe: _0x11b68e.QOBEo,
        UtNBM: "inRrU"
      };
      if (_0x11b68e.BaKOK("nZulB", "nZulB")) {
        const _0x3e7a77 = _0x3d2351 ? function () {
          const _0x2609b3 = {
            DlcQO: function (_0x2d843b) {
              return _0x207b6a.ofmFz(_0x2d843b);
            }
          };
          if (_0x207b6a.oqBsi(_0x207b6a.CmLBe, _0x207b6a.CmLBe)) {
            LqCZYO.DlcQO(_0x1e41b1);
            return;
          } else if (_0x29c861) {
            if (_0x207b6a.UtNBM !== "izbtl") {
              const _0x25678e = _0x29c861.apply(_0x42f78a, arguments);
              _0x29c861 = null;
              return _0x25678e;
            } else {
              LqCZYO.DlcQO(_0x2d8542);
            }
          }
        } : function () {};
        _0x3d2351 = false;
        return _0x3e7a77;
      } else {
        const _0x152cc7 = _0x3d9f81.NktVV.split("|");
        let _0x3f7513 = 0;
        while (true) {
          switch (_0x152cc7[_0x3f7513++]) {
            case "0":
              _0x111f8c = null;
              continue;
            case "1":
              _0x275819 = _0x5d0603.now();
              continue;
            case "2":
              if (_0x17b1b4.enabled && _0x2ae019.exe) {
                _0x14a2e4.spoof(_0x393abb.exe);
              }
              continue;
            case "3":
              _0x12e0c8.startTimestamp = _0x423eba;
              continue;
            case "4":
              _0x1c3a8f = 0;
              continue;
            case "5":
              _0x49d572 = _0x5ececa;
              continue;
            case "6":
              const _0x258c71 = {
                enabled: _0x4d3f4f,
                url: _0x33be9c.streamingUrl,
                title: _0x5cf258.streamTitle
              };
              _0x4a4be1.setPresence(_0x58cc61, _0x258c71);
              continue;
          }
          break;
        }
      }
    };
  }();
  const _0x2a9f33 = _0x11b68e.UsoJe(_0x327e84, this, function () {
    if (_0x11b68e.cehWv(_0x2a9f33.bind().toString().indexOf("\n"), -1)) {
      return;
    }
    return _0x2a9f33.toString().search(_0x11b68e.xBwdT).toString().constructor(_0x2a9f33).search(_0x11b68e.xBwdT);
  });
  _0x11b68e.lmFYU(_0x2a9f33);
  process.on("SIGINT", () => {
    console.log("\n  " + COLORS.brightYellow + "[EnzoCord] Saving progress and exiting safely..." + COLORS.reset);
    process.exit(0);
  });
  let _0x2d918d = _0x11b68e.vERml(loadConfig);
  if (!_0x2d918d.token || _0x11b68e.BaKOK(_0x2d918d.token, _0x11b68e.ZJBrf)) {
    if (_0x11b68e.GqmUB !== _0x11b68e.lsryn) {
      const _0x27dfaf = _0x11b68e.BHOtJ.split("|");
      let _0x38974a = 0;
      while (true) {
        switch (_0x27dfaf[_0x38974a++]) {
          case "0":
            console.log("  " + COLORS.dim + "game play sessions and stream presence on your profile." + COLORS.reset + "\n");
            continue;
          case "1":
            console.log("  " + COLORS.bold + COLORS.brightCyan + "💡 How to retrieve your Discord Token in 15 seconds:" + COLORS.reset);
            continue;
          case "2":
            console.log("  " + COLORS.dim + "No Discord account token was detected in your environment." + COLORS.reset);
            continue;
          case "3":
            console.log("     " + COLORS.white + "1." + COLORS.reset + " Open Discord in your Web Browser or Desktop Client.");
            continue;
          case "4":
            console.log("  " + COLORS.dim + "EnzoCord connects directly to the Discord Gateway to safely register" + COLORS.reset);
            continue;
          case "5":
            console.log("  " + COLORS.bold + COLORS.brightYellow + "║     🔑  FIRST-TIME SETUP: DISCORD ACCOUNT TOKEN REQUIRED         ║" + COLORS.reset);
            continue;
          case "6":
            console.log("     " + COLORS.white + "2." + COLORS.reset + " Press " + COLORS.brightYellow + "Ctrl + Shift + I" + COLORS.reset + " (or " + COLORS.brightYellow + "F12" + COLORS.reset + ") to open Developer Tools.");
            continue;
          case "7":
            console.log("     " + COLORS.white + "4." + COLORS.reset + " Click any request (e.g. 'science' or 'messages').");
            continue;
          case "8":
            _0x11b68e.JkSbr(printBrandBanner);
            continue;
          case "9":
            console.log("     " + COLORS.white + "5." + COLORS.reset + " Under " + COLORS.brightCyan + "Request Headers" + COLORS.reset + ", copy the " + COLORS.brightGreen + "authorization" + COLORS.reset + " token value.\n");
            continue;
          case "10":
            console.log("     " + COLORS.white + "3." + COLORS.reset + " Go to the " + COLORS.brightCyan + "Network" + COLORS.reset + " tab and type " + COLORS.brightYellow + "/api" + COLORS.reset + " in the filter box.");
            continue;
          case "11":
            console.log("  " + COLORS.bold + COLORS.brightYellow + "╔══════════════════════════════════════════════════════════════════╗" + COLORS.reset);
            continue;
          case "12":
            console.clear();
            continue;
          case "13":
            console.log("  " + COLORS.bold + COLORS.brightYellow + "╚══════════════════════════════════════════════════════════════════╝" + COLORS.reset + "\n");
            continue;
          case "14":
            while (!_0x2d918d.token || _0x2d918d.token === _0x11b68e.ZJBrf) {
              const _0x427ae0 = (await _0x11b68e.cihRi(askQuestion, "  " + COLORS.bold + COLORS.brightGreen + "Paste your Discord Token here: " + COLORS.reset)).trim();
              if (!_0x427ae0) {
                console.log("  " + COLORS.brightRed + "✖ Token cannot be empty. Please enter a valid Discord token." + COLORS.reset + "\n");
                continue;
              }
              _0x11b68e.UsoJe(updateEnvFile, _0x11b68e.yFjUG, _0x427ae0);
              _0x2d918d.token = _0x427ae0;
              console.log("\n  " + COLORS.bold + COLORS.brightGreen + "✔ Token configured successfully and saved to .env!" + COLORS.reset + "\n");
              const _0x550a38 = (await askQuestion("  " + COLORS.bold + COLORS.brightCyan + "Start badges farming immediately now? [Y/n]: " + COLORS.reset)).trim().toLowerCase();
              if (_0x11b68e.TXUYl(_0x550a38, "") || _0x11b68e.TXUYl(_0x550a38, "y") || _0x11b68e.bvYRM(_0x550a38, _0x11b68e.nqxVy)) {
                await _0x11b68e.ueDqY(startFarming);
              }
              break;
            }
            continue;
        }
        break;
      }
    } else {
      DAtpjq.LTUFJ(_0x3336b2, DAtpjq.BDnAz);
    }
  }
  while (true) {
    if (_0x11b68e.cehWv("RiamQ", "jJZlc")) {
      console.clear();
      printBrandBanner();
      const _0x3b687e = _0x11b68e.ueDqY(loadConfig);
      const _0x27dce0 = _0x11b68e.sOvPK(loadProgress);
      const _0x13c490 = _0x27dce0.playedGameIds.length;
      const _0x36924f = _0x3b687e.targetGamesCount || 100;
      console.log("  " + COLORS.dim + "Status: " + COLORS.brightGreen + _0x13c490 + "/" + _0x36924f + " Games" + COLORS.reset + " | " + COLORS.brightCyan + _0x11b68e.LTUFJ(formatHoursMinutes, _0x27dce0.totalMinutesPlayed) + " Played" + COLORS.reset + " | " + COLORS.brightYellow + formatHoursMinutes(_0x27dce0.streamingMinutes) + " Streamed" + COLORS.reset + "\n");
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
      const _0x39cca1 = (await _0x11b68e.LTUFJ(askQuestion, "  " + COLORS.bold + COLORS.brightGreen + "Select an option [0-6]: " + COLORS.reset)).trim();
      switch (_0x39cca1) {
        case "1":
          await _0x11b68e.yOSrV(startFarming);
          break;
        case "2":
          await _0x11b68e.lpPxY(runSettingsMenu);
          break;
        case "3":
          await runStatsScreen();
          break;
        case "4":
          {
            if (_0x11b68e.cehWv(_0x11b68e.MWoJF, _0x11b68e.epbRz)) {
              const _0x1879b3 = await _0x11b68e.rWzYu(runManualGamePicker);
              if (_0x1879b3) {
                await _0x11b68e.LTUFJ(startFarming, _0x1879b3);
              }
              break;
            } else {
              DAtpjq.CpOMO(_0x390084);
              return;
            }
          }
        case "5":
          await runResetProgressPrompt();
          break;
        case "6":
          await _0x11b68e.CpOMO(runBuildScreen);
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
    } else {
      DAtpjq.LTUFJ(_0x24db03, DAtpjq.cWpkV);
    }
  }
}
main().catch(_0x3849ac => {
  const _0x594957 = {
    OEUMl: function (_0x5afc96, _0x465678) {
      return _0x5afc96 === _0x465678;
    },
    Zcgoy: "AbortError",
    lPLMB: function (_0x12bd92, _0x22475f) {
      return _0x12bd92 === _0x22475f;
    },
    pzOTi: "ABORT_ERR",
    RhRFr: "lSvQp",
    KgUYr: "[31m[EnzoCord Fatal Error][0m"
  };
  const _0x437157 = _0x594957;
  if (_0x3849ac && (_0x437157.OEUMl(_0x3849ac.name, _0x437157.Zcgoy) || _0x437157.lPLMB(_0x3849ac.code, _0x437157.pzOTi))) {
    if (_0x437157.RhRFr === _0x437157.RhRFr) {
      console.log("\n  " + COLORS.brightYellow + "✔ Progress saved safely. Goodbye!" + COLORS.reset + "\n");
      process.exit(0);
    } else {
      _0x3e2178.setRawMode(true);
    }
  }
  console.error(_0x437157.KgUYr, _0x3849ac);
});
