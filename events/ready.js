module.exports = (bot) => {
  console.log("Active");
  bot.user
    .setPresence({ activity: { name: "to ;help", type: "LISTENING"}, status: "ready" })
    .catch(console.error);
};
