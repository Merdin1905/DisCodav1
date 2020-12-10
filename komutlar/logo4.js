const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const demir = `https://dynamic.brandcrowd.com/asset/logo/8624a404-1e7f-442c-8518-a333b1c3f745/logo?v=4&text=${yazi}`.replace(
    " ",
    "+"
  );

  const gladius = new Discord.RichEmbed()
    .setTitle("Bull Logo")
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
  name: "logo4",
  description: "Yazdığınız yazıyı Logoya çevirir.",
  usage: "logo4 <yazı>"
};