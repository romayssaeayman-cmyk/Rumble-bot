
const express = require("express");
const { handleCommand } = require("./commands");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 RUMBLE BOT ONLINE 🔥");
});

app.get("/menu", (req, res) => {
  res.send(handleCommand(".menu"));
});

app.get("/command", (req, res) => {
  const message = req.query.text || "";
  const response = handleCommand(message);

  res.send(response || "Invalid command");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("RUMBLE BOT STARTED!");
});
