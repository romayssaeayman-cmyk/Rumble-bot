
const express = require("express");
const app = express();

const PREFIX = ".";

app.get("/", (req, res) => {
  res.send("🔥 RUMBLE BOT IS ONLINE 🔥");
});

app.get("/menu", (req, res) => {
  res.send(`
╔══════════════════╗
       RUMBLE BOT
╚══════════════════╝

⚡ GENERAL COMMANDS
.menu
.ping
.owner
.info

🎨 STICKER COMMANDS
.sticker

🤖 AI COMMANDS
.ai

👥 GROUP COMMANDS
.group
.kick
.promote

━━━━━━━━━━━━━━━━━━
POWERED BY RUMBLE BOT
  `);
});

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("RUMBLE BOT STARTED!");
});
