module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );
  
      bot.distube.resume(message);
      message.channel.send("***RESUMING*** ⏯️");
  };
  
  module.exports.config = {
    name: "resume",
    aliases: ["r"],
  };
  