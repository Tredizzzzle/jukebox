module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );
  
    message.channel.send(`⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡀
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡸⠱⡀
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣠⣴⠖⢀⢀⢀⢀⢀⢀⣠⡆⢀⢀⢠⠃⢀⣧
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣤⣾⣿⣿⠋⢀⢀⢀⢀⢀⣠⠞⢁⡇⢀⢠⠏⢀⢀⢹
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⣠⣶⣿⢿⣿⣿⠃⢀⢀⢀⢀⣠⠞⠁⢀⣼⠁⣠⠏⢀⢀⢀⣿
    ⢀⢀⢀⢀⢀⢀⢀⣠⣾⡿⠋⢀⣼⡿⠁⢀⢀⢀⣠⠞⠁⢀⢀⢰⢏⡼⠃⢀⢀⢀⢀⡇
    ⢀⢀⣾⢀⢀⢀⣼⡿⠋⢀⢀⢀⣿⠃⣀⣠⣶⠿⠃⢀⢀⢀⢀⡿⠋⢀⢀⢀⢀⢀⢸⠃⢀⣀⣠⠤⠖⠚⠋⢉⡭⠋
    ⢀⣼⣿⢀⣠⣿⠟⠁⢀⢀⢀⠘⠛⠛⠋⠉⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠮⠒⠋⠁⢀⢀⢀⣠⠔⠁
    ⢀⡇⢻⣰⡿⠃⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣠⠞⠁
    ⢸⠃⠈⠟⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡾⠋
    ⢸⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣴⠋
    ⢸⡄⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡾⠁
    ⢀⡇⢀⢀⢀⢀⢀⢀⣀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⢀⢠⡞
    ⢀⢳⢀⣀⣀⣀⣀⣀⡇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣉⡉⢉⡟
    ⢀⠘⣄⣀⣀⣤⣤⢀⡇⠰⠶⠶⠶⢶⣶⣶⡶⠶⠶⠶⢀⢀⢀⣼⠿⠟⠛⠿⡿
    ⢀⢀⢳⢀⣀⣀⣀⣀⡇⢀⢀⡠⠊⠁⣀⣀⠈⠑⣄⢀⢀⢀⣰⡡⠤⠠⢄⣰⠃
    ⢀⢀⠈⢏⣉⣀⣀⣸⡇⢀⠸⢀⢀⣾⣿⣿⣷⢀⠘⡄⢀⢠⠏⢠⣤⣤⢀⠹
    ⢀⡰⠊⠉⠑⡄⢀⢸⠇⢀⢃⢀⢀⣿⣿⣿⡟⢀⢀⠃⢀⣾⢀⣿⣿⣿⢀⢀⠇
    ⢀⠃⠈⠉⢣⠘⠤⠼⢀⢀⠈⢄⢀⠈⠉⠁⢀⣠⠎⢀⡘⠸⡀⠙⠛⠁⢀⢼⡄
    ⢀⡀⢀⠐⠎⢀⢀⢀⢀⢀⢀⢀⠁⠐⠒⠒⠈⢀⢀⢀⠧⠤⢬⠒⢀⠂⠁⢀⢳
    ⢀⠁⠐⠒⠂⠉⠁⠢⣄⢀⢀⢀⢀⢀⠒⠤⢤⣀⣀⣐⣒⣒⣉⡠⠤⠂⢀⡴⠃
    ⢀⢀⢀⢀⢀⢀⢀⢀⠈⠙⢲⣤⣀⡀⢀⢀⢀⢀⢀⠉⠉⠁⢀⣀⣤⠞⠉
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⣦⣬⣇⠈⠉⢿⡒⠶⠶⠶⠶⠶⠚⠛⠉
    ⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⣿⣿⡆⠸⣿⣷⡀
    ⢀⢀⢀⢀⢀⢀⢀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
    ⢀⢀⢀⢀⢀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
    ⢀⢀⢀⢀⢀⢰⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣷⠁
    ⢀⢀⢀⢀⢀⠚⢻⠛⠻⠿⣿⣿⣿⣿⣀⣹⣟⣿⡆
    ⢀⢀⢀⢀⢀⢀⡘⢀⢀⢸⣿⣿⣿⣿⣿⡿⢻⣿⣿
    ⢀⢀⢀⢀⢀⢀⡇⢀⢀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
    ⢀⢀⢀⢀⢀⣴⣶⣶⣦⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
    ⢀⢀⢀⢀⢀⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠷
    ⢀⢀⢀⢀⢀⡝⠉⠉⠉⢀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶
    ⢀⢀⢀⢀⢀⣇⢠⢠⢀⣾⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
    ⢀⢀⢀⢀⢀⣿⢸⢸⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⢀⢀⢀⢀⢀⠘⣾⢸⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
    ⢀⢀⢀⢀⢀⢀⠈⣹⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
    ⢀⢀⢀⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
    ⢀⢀⢀⢀⢀⢀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿
    ⢀⢀⢀⢀⢀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
    ⢀⢀⢀⢀⢀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡉⢓⣤⣀⡀
    ⢀⢀⢀⢀⢀⣿⢿⣿⣿⣿⣿⣿⠤⠤⠤⠽⡿⢿⣿⣿⣿⣿⣿⣿⣷⣶⣾⣿⣿⣷⣶⣶⣤⡄
    ⢀⢀⢀⢀⢀⢀⣼⣿⣿⣿⣿⣿⢒⣒⣂⣀⣉⣦⡀⠈⠉⠉⠙⠛⠛⠛⠋⠉⠉⠉⠉⠁⢸⠁
    ⢀⢀⢀⢀⢀⢀⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⡉⠉⠙⠛⠛⠛⠛⠛⠓⠒⠒⠒⠊
    ⢀⢀⢀⢀⢀⢀⠇⢀⠈⠉⠛⠛⠛⠛⠛⠛⠉⠁⢀⠠⡇`);
  };
  
  module.exports.config = {
    name: "yonytes",
    aliases: ["yt"],
  };
  