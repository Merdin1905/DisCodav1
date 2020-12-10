
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Gif Komutlar`, client.user.avatarURL)
.setColor('##ffffff')
.setDescription(`<:badge:784023514114031636> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__woman__`,`<:badge:784023514114031636> \`${prefix}gif-woman\` Rastgele Kadın Gifi Atar!`,true)
.addField(`__man__`,`<:badge:784023514114031636> \`${prefix}gif-man\` Rastgele Erkek Gifi Atar!`,true)
.addField(`__baby__`,`<:badge:784023514114031636> \`${prefix}gif-baby\` Rastgele Bebek Gifi Atar!`,true)
.addField(`__anime__`,`<:badge:784023514114031636> \`${prefix}gif-anime\` Rastgele Anime Gifi Atar!`,true)
.addField(`__animal__`,`<:badge:784023514114031636> \`${prefix}gif-animal\` Rastgele Hayvan Gifi Atar!`,true)
.addField(`__Bilgilendirme__`,`<:badge:784023514114031636> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:badge:784023514114031636> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["gif"], 
    permLevel: 0
  };
  exports.help = {
    name: 'gif'
  }; 