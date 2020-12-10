const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const demir = `https://dynamic.brandcrowd.com/asset/logo/f30f3bbc-990e-4618-b6e7-509b4a26b132/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const gladius = new Discord.RichEmbed()
    .setTitle("Aslan Logo")
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
  name: "logo13",
  description: "Yazdığınız yazıyı Logoya çevirir.",
  usage: "logo13 <yazı>"
};