const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const demir = `https://dynamic.brandcrowd.com/asset/logo/01fafea6-61b4-47cc-aaa4-3fe64d7208fd/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const gladius = new Discord.RichEmbed()
    .setTitle("Griffin Logo")
    .setColor("#ffffff")
    .setImage(demir);
  return message.channel.send(demir);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "logo18",
  description: "Yazdığınız yazıyı Logoya çevirir.",
  usage: "logo18 <yazı>"
};