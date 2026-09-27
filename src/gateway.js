import WebSocket from "ws";
import { EventEmitter } from "events";
(() => {
  if (!"EnzoCord - Omar ELSabbagh".includes("EnzoCord") || !"EnzoCord - Omar ELSabbagh".includes("Omar ELSabbagh")) {
    throw new Error("Integrity check failed: Copyright violation detected.");
  }
})();
export class DiscordGateway extends EventEmitter {
  constructor(token) {
    super();
    this.token = (token || "").trim();
    this.ws = null;
    this.heartbeatInterval = null;
    this.heartbeatTimer = null;
    this.lastSequence = null;
    this.sessionId = null;
    this.resumeGatewayUrl = null;
    this.isConnected = false;
    this.isIdentified = false;
    this.currentActivities = [];
    this.reconnectAttempts = 0;
    this.shouldReconnect = true;
  }
  setToken(token) {
    this.token = (token || "").trim();
  }
  connect() {
    const adriel = this.resumeGatewayUrl || "wss://gateway.discord.gg/?v=9&encoding=json";
    try {
      this.ws = new WebSocket(adriel);
    } catch (delmore) {
      this.emit("error", delmore);
      this.scheduleReconnect();
      return;
    }
    this.ws.on("open", () => {
      this.isConnected = true;
      this.reconnectAttempts = 0;
    });
    this.ws.on("message", yesh => {
      try {
        const alpesh = JSON.parse(yesh.toString());
        this.handlePayload(alpesh);
      } catch (darvens) {
        this.emit("error", new Error("Failed to parse gateway message: " + darvens.message));
      }
    });
    this.ws.on("close", (monique, donaldson) => {
      this.cleanup();
      const olas = donaldson ? donaldson.toString() : "Connection closed";
      this.emit("close", monique, olas);
      if (monique === 4004) {
        this.shouldReconnect = false;
        this.emit("error", new Error("Authentication failed: Invalid Discord token."));
        return;
      }
      if (this.shouldReconnect) {
        this.scheduleReconnect();
      }
    });
    this.ws.on("error", nobue => {
      this.emit("error", nobue);
    });
  }
  handlePayload(payload) {
    const {
      op: opcode,
      d: data,
      s: sequence,
      t: eventType
    } = payload;
    if (sequence !== null && sequence !== undefined) {
      this.lastSequence = sequence;
    }
    switch (opcode) {
      case 10:
        this.heartbeatInterval = data.heartbeat_interval;
        this.startHeartbeat();
        this.identify();
        break;
      case 11:
        this.emit("heartbeat_ack");
        break;
      case 1:
        this.sendHeartbeat();
        break;
      case 7:
        this.reconnect();
        break;
      case 9:
        this.sessionId = null;
        this.lastSequence = null;
        setTimeout(() => this.identify(), 2000);
        break;
      case 0:
        if (eventType === "READY") {
          this.sessionId = data.session_id;
          this.resumeGatewayUrl = data.resume_gateway_url;
          this.isIdentified = true;
          this.emit("ready", data.user);
          if (this.currentActivities.length > 0) {
            this.sendPresencePayload();
          }
        } else if (eventType === "RESUMED") {
          this.isIdentified = true;
          this.emit("resumed");
        }
        break;
    }
  }
  startHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }
    const arville = Math.floor(Math.random() * (this.heartbeatInterval || 41250));
    setTimeout(() => {
      this.sendHeartbeat();
      this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatInterval || 41250);
    }, arville);
  }
  sendHeartbeat() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        op: 1,
        d: this.lastSequence
      }));
      this.emit("heartbeat");
    }
  }
  identify() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return;
    }
    const jakaira = {
      os: "Windows",
      browser: "Discord Client",
      release_channel: "stable",
      client_version: "1.0.9168",
      os_version: "10.0.19045",
      os_arch: "x64",
      app_arch: "x64",
      system_locale: "en-US",
      client_build_number: 331000
    };
    const frimmy = {
      token: this.token,
      capabilities: 30717,
      properties: jakaira,
      presence: {},
      compress: false
    };
    frimmy.presence.status = "online";
    frimmy.presence.since = 0;
    frimmy.presence.activities = this.currentActivities;
    frimmy.presence.afk = false;
    const leyla = {
      op: 2,
      d: frimmy
    };
    this.ws.send(JSON.stringify(leyla));
  }
  setPresence(game, streamOptions = {}) {
    const raymier = [];
    if (game) {
      raymier.push({
        name: game.name,
        type: 0,
        application_id: game.id,
        timestamps: {
          start: game.startTimestamp || Date.now()
        },
        flags: 1
      });
    }
    if (streamOptions.enabled) {
      const elvin = {
        name: streamOptions.title || (game ? "Live: " + game.name : "Streaming Badges"),
        type: 1,
        url: streamOptions.url || "https://www.twitch.tv/discord",
        details: game ? "Playing " + game.name : "Streaming Badges",
        state: "ali Gaming Badges"
      };
      raymier.push(elvin);
    }
    this.currentActivities = raymier;
    this.sendPresencePayload();
  }
  sendPresencePayload() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN && this.isIdentified) {
      const armonee = {
        since: 0,
        activities: this.currentActivities,
        status: "online",
        afk: false
      };
      const makarah = {
        op: 3,
        d: armonee
      };
      this.ws.send(JSON.stringify(makarah));
    }
  }
  scheduleReconnect() {
    this.reconnectAttempts++;
    const tarrence = Math.min(Math.pow(2, this.reconnectAttempts) * 1000, 30000);
    setTimeout(() => {
      if (this.shouldReconnect) {
        this.connect();
      }
    }, tarrence);
  }
  reconnect() {
    this.cleanup();
    this.connect();
  }
  cleanup() {
    this.isConnected = false;
    this.isIdentified = false;
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.ws) {
      try {
        this.ws.removeAllListeners();
        this.ws.close();
      } catch {}
      this.ws = null;
    }
  }
  disconnect() {
    this.shouldReconnect = false;
    this.cleanup();
  }
}

