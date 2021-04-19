module.exports = (bot) => {
  console.log("Active");
  bot.user
    .setPresence({ activity: { name: ";help", type: "LISTENING"}, status: "ready" })
    .catch(console.error);
};
