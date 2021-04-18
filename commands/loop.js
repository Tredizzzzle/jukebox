module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );

  let mode = bot.distube.setRepeatMode(message, parseInt(args[0]));
  mode = mode ? (mode == 2 ? "QUEUE" : "SONG") : "OFF";
  message.channel.send("***LOOPING***: **`" + mode + "`**");
};

module.exports.config = {
  name: "loop",
  aliases: ["l"],
};
