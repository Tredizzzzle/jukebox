module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );

  bot.distube.shuffle(message);
  message.channel.send("***QUEUE SHUFFLED*** 🔀")
};

module.exports.config = {
  name: "shuffle",
  aliases: ["sh"],
};
