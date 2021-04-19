module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );
  let queue = await bot.distube.getQueue(message);
  bot.distube.setVolume(message, args[0]);
  message.channel.send(`**VOLUME: \`${queue.volume}%\`**`);
};

module.exports.config = {
  name: "volume",
  aliases: ["v"],
};
