const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffffff')
.setDescription(`<:bugger:784023512883920906> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Eğlence Komutlar__`,`<:hypsqd:784023513807716372> \`${prefix}eğlence\``,true)
.addField(`__Gif Komutlar__`,`<:badge:784023514114031636> \`${prefix}gif\``,true)
.addField(`__Kullanıcı Komutları__`,`<:partner:784023710855200799> \`${prefix}moderasyon\` `,true)
.addField(`__Logo  Komutları__`,`<:nitro:784023513521586219> \`${prefix}logo\` `,true)
.addField(`__Minecraft  Komutları__`,`<:mc:784023513127977020> \`${prefix}minecraft\` `,true)
.addField(`__Bilgilendirme__`,`<:bugger:784023512883920906> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:bugger:784023512883920906> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  