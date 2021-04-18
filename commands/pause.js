const { MessageManager } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );
  bot.distube.pause(message);
  message.channel.send("***PAUSING*** ⏸️");
};

module.exports.config = {
  name: "pause",
  aliases: [],
};
