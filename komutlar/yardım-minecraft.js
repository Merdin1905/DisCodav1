const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffffff')
.setDescription(`<:mc:784023513127977020> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`MC Skin`,`<:mc:784023513127977020> \`${prefix}mcskin\` `,true)
.addField(`MC Ödül`,`<:mc:784023513127977020> \`${prefix}mcödül\` `,true)
.addField(`MC Sunucu`,`<:mc:784023513127977020> \`${prefix}mcsunucu\` `,true)
.addField(`__Bilgilendirme__`,`<:mc:784023513127977020> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:mc:784023513127977020> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım-minecraft","help-minecraft","minecraft"], 
    permLevel: 0
  };
  exports.help = {
    name: 'minecraft'
  }; 
  