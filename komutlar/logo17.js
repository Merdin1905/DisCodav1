const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const demir = `https://dynamic.brandcrowd.com/asset/logo/06ef9b26-e4b9-4dc6-bc98-2a06c3a8821e/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const gladius = new Discord.RichEmbed()
    .setTitle("Taç Logo")
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
  name: "logo17",
  description: "Yazdığınız yazıyı Logoya çevirir.",
  usage: "logo17 <yazı>"
};