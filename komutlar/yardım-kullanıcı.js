const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`DisCoda Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffffff')
.setDescription(`<:partner:784023710855200799> DisCoda botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`Afk`,`<:partner:784023710855200799> \`${prefix}afk\``,true)
.addField(`Avatar`,`<:partner:784023710855200799> \`${prefix}avatar\``,true)
.addField(`Sunucu Bilgi`,`<:partner:784023710855200799> \`${prefix}sunucu-bilgi\` `,true)
.addField(`Sunucu İcon`,`<:partner:784023710855200799> \`${prefix}sunucu-icon\` `,true)
.addField(`Bilgilendirme`,`<:partner:784023710855200799> \`${prefix}davet\` | DisCoda Sunucunuza Davet Edersiniz\n<:partner:784023710855200799> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/785558672783835139/786553427941261312/DENEME2.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım-kullanıcı","help-member"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kullanıcı'
  }; 
  