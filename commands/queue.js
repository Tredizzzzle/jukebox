module.exports.run = async (bot, message) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );

  let queue = bot.distube.getQueue(message);
  message.channel.send(
    "**__Current Queue:__**\n" +
      queue.songs
        .map(
          (song, id) =>
            `**${id + 1}.** \`${song.name} - ${song.formattedDuration}\``
        )
        .slice(0, 10)
        .join("\n")
  );
};

module.exports.config = {
  name: "queue",
  aliases: ["q"],
};
