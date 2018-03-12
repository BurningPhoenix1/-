const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#e56b00")
  .addField("Member Commands", "help, serverinfo, botinfo, userinfo, and report.");

  message.channel.send(helpembed);

  if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#e56b00")
  .addField("Mod Commands", "addrole, removerole, kick, warn, warnlevel, ban");

  try{
    await message.author.send(modembed);
    message.react("👍");
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");
  }
}

}

module.exports.help = {
  name: "help"
}
