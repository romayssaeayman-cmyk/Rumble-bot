
const PREFIX = ".";

const commands = {
  menu: "RUMBLE BOT COMMANDS",
  ping: "Pong! 🏓",
  owner: "Owner: Rumble Bot",
  info: "RUMBLE BOT v1.0"
};

function handleCommand(message) {
  if (!message.startsWith(PREFIX)) return null;

  const command = message
    .slice(PREFIX.length)
    .trim()
    .toLowerCase();

  return commands[command] || "Unknown command. Type .menu";
}

module.exports = { handleCommand, commands };
