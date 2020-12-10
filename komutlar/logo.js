const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const demir = `https://dynamic.brandcrowd.com/asset/logo/09e35916-19ec-42e3-b61e-561fe64c3495/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const gladius = new Discord.RichEmbed()
    .setTitle("Logo")
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
  name: "logo",
  description: "Yazdığınız yazıyı Logoya çevirir.",
  usage: "logo <yazı>"
};