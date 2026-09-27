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
const CACHE_FILE = path.join(__dirname, "..", "data", "games_cache.json");
const FALLBACK_GAMES = [{
  id: "356875221078245376",
  name: "Overwatch",
  exe: "overwatch.exe"
}, {
  id: "356875890958925834",
  name: "Hearthstone",
  exe: "hearthstone.exe"
}, {
  id: "356875988589740042",
  name: "Dota 2",
  exe: "dota2.exe"
}, {
  id: "356876590342340608",
  name: "Rainbow Six Siege",
  exe: "rainbowsix.exe"
}, {
  id: "356877880938070016",
  name: "Rocket League",
  exe: "rocketleague.exe"
}, {
  id: "356878860190613504",
  name: "Heroes of the Storm",
  exe: "heroes of the storm.exe"
}, {
  id: "356879032584896512",
  name: "Garry's Mod",
  exe: "hl2.exe"
}, {
  id: "356887282982191114",
  name: "ARK: Survival Evolved",
  exe: "shootergame.exe"
}, {
  id: "356889262362329098",
  name: "FINAL FANTASY XIV ONLINE",
  exe: "ffxiv.exe"
}, {
  id: "356942674672091136",
  name: "Geometry Dash",
  exe: "geometrydash.exe"
}, {
  id: "356944273133928458",
  name: "Brawlhalla",
  exe: "brawlhalla.exe"
}, {
  id: "356953358952562688",
  name: "The Walking Dead",
  exe: "walkingdead101.exe"
}, {
  id: "356953520278339584",
  name: "Sonic Mania",
  exe: "sonicmania.exe"
}, {
  id: "356954034701205504",
  name: "Golf With Your Friends",
  exe: "golf with your friends.exe"
}, {
  id: "356954111901433856",
  name: "Cities: Skylines",
  exe: "cities.exe"
}, {
  id: "356954176338788352",
  name: "Arma 3",
  exe: "arma3.exe"
}, {
  id: "356954277803065354",
  name: "Left 4 Dead 2",
  exe: "left4dead2.exe"
}, {
  id: "357606193918771210",
  name: "Project 64",
  exe: "project64.exe"
}, {
  id: "357606990492467200",
  name: "Counter-Strike: Source",
  exe: "hl2.exe"
}, {
  id: "357607753730097152",
  name: "Unturned",
  exe: "unturned.exe"
}, {
  id: "357609204065894401",
  name: "Terraria",
  exe: "terraria.exe"
}, {
  id: "357610010991132672",
  name: "Don't Starve Together",
  exe: "dontstarve_steam.exe"
}, {
  id: "357610931250921472",
  name: "Grand Theft Auto V",
  exe: "gta5.exe"
}, {
  id: "357612852267581440",
  name: "Euro Truck Simulator 2",
  exe: "eurotrucks2.exe"
}, {
  id: "357614002677088256",
  name: "Rust",
  exe: "rustclient.exe"
}, {
  id: "357615024225124352",
  name: "Team Fortress Classic",
  exe: "hl.exe"
}, {
  id: "357615822363295744",
  name: "Fallout: New Vegas",
  exe: "falloutnv.exe"
}, {
  id: "357617006897790977",
  name: "Portal 2",
  exe: "portal2.exe"
}, {
  id: "357617636609490944",
  name: "Subnautica",
  exe: "subnautica.exe"
}, {
  id: "357618274483568640",
  name: "Roblox",
  exe: "robloxplayerbeta.exe"
}, {
  id: "357619176342814720",
  name: "Undertale",
  exe: "undertale.exe"
}, {
  id: "357620359702675456",
  name: "Payday 2",
  exe: "payday2_win32_release.exe"
}, {
  id: "357620938596319232",
  name: "Dead by Daylight",
  exe: "deadbydaylight-win64-shipping.exe"
}, {
  id: "357621453254197248",
  name: "Stardew Valley",
  exe: "stardew valley.exe"
}, {
  id: "357622080352976896",
  name: "Borderlands 2",
  exe: "borderlands2.exe"
}, {
  id: "357623192254578688",
  name: "The Witcher 3: Wild Hunt",
  exe: "witcher3.exe"
}, {
  id: "357624133464784896",
  name: "Warframe",
  exe: "warframe.x64.exe"
}, {
  id: "357625126831030272",
  name: "The Binding of Isaac: Rebirth",
  exe: "isaac-ng.exe"
}, {
  id: "357625776688365568",
  name: "Civilization V",
  exe: "civilizationv.exe"
}, {
  id: "357626359008591873",
  name: "Paladins",
  exe: "paladins.exe"
}, {
  id: "357627446549938176",
  name: "Smite",
  exe: "smite.exe"
}, {
  id: "357628224538804224",
  name: "Factorio",
  exe: "factorio.exe"
}, {
  id: "357629007677849600",
  name: "Kerbal Space Program",
  exe: "ksp_x64.exe"
}, {
  id: "357630040776736768",
  name: "Skyrim Special Edition",
  exe: "skyrimse.exe"
}, {
  id: "357631317548072960",
  name: "7 Days to Die",
  exe: "7daystodie.exe"
}, {
  id: "357632128789512192",
  name: "Path of Exile",
  exe: "pathofexile_x64.exe"
}, {
  id: "357633190845743104",
  name: "RimWorld",
  exe: "rimworldwin64.exe"
}, {
  id: "357634288075702272",
  name: "Mount & Blade: Warband",
  exe: "mb_warband.exe"
}, {
  id: "357635299498819584",
  name: "Cuphead",
  exe: "cuphead.exe"
}, {
  id: "357636183377215488",
  name: "Dead Cells",
  exe: "deadcells.exe"
}, {
  id: "357637158766542848",
  name: "Hollow Knight",
  exe: "hollow_knight.exe"
}, {
  id: "357638097435131904",
  name: "Celeste",
  exe: "celeste.exe"
}, {
  id: "357639148720783360",
  name: "Slay the Spire",
  exe: "slaythespire.exe"
}, {
  id: "357640244793262080",
  name: "Dark Souls III",
  exe: "darksoulsiii.exe"
}, {
  id: "357641285227872256",
  name: "Sekiro: Shadows Die Twice",
  exe: "sekiro.exe"
}, {
  id: "357642398547410944",
  name: "Monster Hunter: World",
  exe: "monsterhunterworld.exe"
}, {
  id: "357643501062062080",
  name: "Destiny 2",
  exe: "destiny2.exe"
}, {
  id: "357644618751934464",
  name: "Apex Legends",
  exe: "r5apex.exe"
}, {
  id: "357645719328882688",
  name: "VALORANT",
  exe: "valorant.exe"
}, {
  id: "357646849496678400",
  name: "Genshin Impact",
  exe: "genshinimpact.exe"
}, {
  id: "357647958932062208",
  name: "Cyberpunk 2077",
  exe: "cyberpunk2077.exe"
}, {
  id: "357649069504069632",
  name: "Among Us",
  exe: "among us.exe"
}, {
  id: "357650178972975104",
  name: "Phasmophobia",
  exe: "phasmophobia.exe"
}, {
  id: "357651289196888064",
  name: "Valheim",
  exe: "valheim.exe"
}, {
  id: "357652399120613376",
  name: "Elden Ring",
  exe: "eldenring.exe"
}, {
  id: "357653498877149184",
  name: "Baldur's Gate 3",
  exe: "bg3_dx11.exe"
}, {
  id: "357654608794845184",
  name: "Lethal Company",
  exe: "lethal company.exe"
}, {
  id: "357655718712541184",
  name: "Palworld",
  exe: "palworld-win64-shipping.exe"
}, {
  id: "357656828630237184",
  name: "Helldivers 2",
  exe: "helldivers2.exe"
}, {
  id: "357657938547933184",
  name: "Counter-Strike 2",
  exe: "cs2.exe"
}];
export async function getDetectableGames(minimumGameCount = 100) {
  const kyong = path.dirname(CACHE_FILE);
  if (!fs.existsSync(kyong)) {
    fs.mkdirSync(kyong, {
      recursive: true
    });
  }
  if (fs.existsSync(CACHE_FILE)) {
    try {
      const mitzie = fs.statSync(CACHE_FILE);
      const vontrice = Date.now() - mitzie.mtimeMs < 86400000;
      if (vontrice) {
        const kriva = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
        if (Array.isArray(kriva) && kriva.length >= minimumGameCount) {
          return kriva.slice(0, Math.max(minimumGameCount, 120));
        }
      }
    } catch {}
  }
  try {
    const chelon = await fetch("https://discord.com/api/v9/applications/detectable", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
      }
    });
    if (chelon.ok) {
      const ekambir = await chelon.json();
      const caslynn = [];
      const prinsha = new Set();
      for (const asmaa of ekambir) {
        if (!asmaa.name || !asmaa.executables || !asmaa.id) {
          continue;
        }
        const rodneisha = asmaa.executables.find(yiyi => yiyi.os === "win32" && !yiyi.is_launcher && !yiyi.name.includes("/") && !yiyi.name.includes("\\") && yiyi.name.toLowerCase().endsWith(".exe"));
        if (rodneisha) {
          const shirlynn = asmaa.name.trim().toLowerCase();
          if (!prinsha.has(shirlynn)) {
            prinsha.add(shirlynn);
            caslynn.push({
              id: String(asmaa.id),
              name: asmaa.name.trim(),
              exe: rodneisha.name.trim(),
              icon: asmaa.icon_hash || null
            });
          }
        }
      }
      if (caslynn.length >= minimumGameCount) {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(caslynn, null, 2), "utf8");
        return caslynn.slice(0, Math.max(minimumGameCount, 150));
      }
    }
  } catch (ibin) {
    console.warn("[33m[EnzoCord - Games][0m Using internal fallback list.");
  }
  const juanenrique = [...FALLBACK_GAMES];
  return juanenrique.slice(0, Math.max(minimumGameCount, juanenrique.length));
}

