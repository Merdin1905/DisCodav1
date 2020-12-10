const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Logo Menüsü`, client.user.avatarURL)
.setColor('#ffffff')
.setDescription(`<:nitro:784023513521586219> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__iron__`,`<:nitro:784023513521586219> \`${prefix}iron\` Demir Adam Logo Yapar`,true)
.addField(`__Logo2__`,`<:nitro:784023513521586219> \`${prefix}Logo2\` Neon Logo Yapar`,true)
.addField(`__Logo3__`,`<:nitro:784023513521586219> \`${prefix}Logo3\` Asker Logo Yapar`,true)
.addField(`__Logo4__`,`<:nitro:784023513521586219> \`${prefix}Logo4\` Bull Logo Yapar`,true)
.addField(`__Logo5__`,`<:nitro:784023513521586219> \`${prefix}Logo5\` DJ Logo Yapar`,true)
.addField(`__Logo6__`,`<:nitro:784023513521586219> \`${prefix}Logo6\` Gaming Logo Yapar`,true)
.addField(`__Logo7__`,`<:nitro:784023513521586219> \`${prefix}Logo7\` Gaming2 Logo Yapar`,true)
.addField(`__Logo8__`,`<:nitro:784023513521586219> \`${prefix}Logo8\` Fun Logo Yapar`,true)
.addField(`__Logo9__`,`<:nitro:784023513521586219> \`${prefix}Logo9\` Graffiti Logo Yapar`,true)
.addField(`__Logo10__`,`<:nitro:784023513521586219> \`${prefix}Logo10\` Mascot Logo Yapar`,true)
.addField(`__Logo11__`,`<:nitro:784023513521586219> \`${prefix}Logo11\` Aslan Logo Yapar`,true)
.addField(`__Logo12__`,`<:nitro:784023513521586219> \`${prefix}Logo12\` Aslan Logo Yapar`,true)
.addField(`__Logo13__`,`<:nitro:784023513521586219> \`${prefix}Logo13\` Aslan Logo Yapar`,true)
.addField(`__Logo14__`,`<:nitro:784023513521586219> \`${prefix}Logo14\` Yılan Logo Yapar`,true)
.addField(`__Logo15__`,`<:nitro:784023513521586219> \`${prefix}Logo15\` Taç Logo Yapar`,true)
.addField(`__Logo16__`,`<:nitro:784023513521586219> \`${prefix}Logo16\` Taç Logo Yapar`,true)
.addField(`__Logo17__`,`<:nitro:784023513521586219> \`${prefix}Logo17\` Taç Logo Yapar`,true)
.addField(`__Logo18__`,`<:nitro:784023513521586219> \`${prefix}Logo18\` Griffin Logo Yapar`,true)
.addField(`__Davet__`,`<:nitro:784023513521586219> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:nitro:784023513521586219> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["logo"], 
    permLevel: 0
  };
  exports.help = {
    name: 'logo'
  }; 
  