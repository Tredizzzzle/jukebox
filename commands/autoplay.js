module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You must be in a voice channel to use this command."
    );

  let mode = bot.distube.toggleAutoplay(message);
  message.channel.send("**AUTOPLAY:**" + (mode ? "**ON**" : "**OFF**") + "`");
};

module.exports.config = {
  name: "autoplay",
  aliases: ["ap"],
};
