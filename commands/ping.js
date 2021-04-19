module.exports.run = async (bot, message, args, text) => {
  message.reply("Calculating ping...").then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;

    resultMessage.edit(
      `**Bot Latency:**  \`${ping}\`**, API Latency:** \`${bot.ws.ping}\``
    );
  });
};

module.exports.config = {
  name: "ping",
  aliases: [""],
};
