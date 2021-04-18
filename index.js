const Discord = require("discord.js");
const bot = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const { loadCommands } = require("./utils/loadCommands");
const DisTube = require("distube");

bot.distube = new DisTube(bot, { emitNewSongOnly: true, leaveOnFinish: true });
bot.distube
  .on("initQueue", (queue) => {
    queue.autoplay = false;
    queue.volume = 50;
  })
  .on("playSong", (message, queue, song) =>
    message.channel.send(
      `**Playing** \`${song.name} - ${song.formattedDuration}\`\n**Requested by:** \`${song.user.username}\``
    )
  )
  .on("addSong", (message, queue, song) =>
    message.channel.send(
      `\`${song.user.username}\` **added** \`${song.name} - ${song.formattedDuration}\` **to the queue**`
    )
  )
  .on("playList", (message, queue, playlist, song) =>
    message.channel.send(
      `**Playing** \`${playlist.name} (${playlist.songs.length} songs)\`\n**Requested by:** \`${song.user.username}\`\n**Now playing** \`${song.name} - ${song.formattedDuration}\``
    )
  )
  .on("addList", (message, queue, playlist) =>
    message.channel.send(
      `**Added** \`${playlist.name} (${playlist.songs.length} **songs**)\` **to the queue**\n${queue}`
    )
  )
  .on("empty", (message) =>
    message.channel.send("***Leaving the channel*** ✌️")
  )
  .on("finish", (message) =>
    message.channel.send("***No more songs in queue*** 💂‍♂️")
  );

require("./utils/loadEvents")(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(token);
