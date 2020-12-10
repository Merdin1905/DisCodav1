const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Eğlence Komutlar`, client.user.avatarURL)
.setColor('##ffffff')
.setDescription(`<:hypsqd:784023513807716372> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Pixel__`,`<:hypsqd:784023513807716372> \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`<:hypsqd:784023513807716372> \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`<:hypsqd:784023513807716372> \`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`<:hypsqd:784023513807716372> \`${prefix}rip\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`<:hypsqd:784023513807716372> \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__alkış__`,`<:hypsqd:784023513807716372> \`${prefix}alkış\` Bot Alkışlar`,true)
.addField(`__atasözü__`,`<:hypsqd:784023513807716372> \`${prefix}atasözü\` Bot Tarafından Rasgele Atasözleri Gönderilir`,true)
.addField(`__ara155__`,`<:hypsqd:784023513807716372> \`${prefix}ara155\` Polisi Arar (ciddiye almayın)`,true)
.addField(`__Bilgilendirme__`,`<:hypsqd:784023513807716372> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:hypsqd:784023513807716372> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eğlence"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 