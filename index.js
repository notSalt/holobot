const Discord = require('discord.js')
const NekoClient = require('nekos.life')

const client = new Discord.Client()
const neko = new NekoClient()

client.once('ready', () => {
  console.log('Holo is ready!')

  client.on('message', async message => {
    // I love you holo
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith("i love you holo") || message.content.toLowerCase().startsWith("love you holo") || message.content.toLowerCase().startsWith("love u holo") || message.content.toLowerCase().startsWith("i love u holo")) {
      return message.channel.send(`I love you too ${message.author}`);
    }
    else if (message.content.toLowerCase().startsWith("i love you") || message.content.toLowerCase().startsWith("i love u")) {
      let messageArray = message.content.split(" ");
      let lovedUser = messageArray.slice(3).join(" ");
      return message.channel.send(`We love you ${lovedUser}`);
    }

    // Holo Commands
    if (message.content.trim() === '.holo') {
      const data = await neko.sfw.holo()
      message.channel.send(
        new Discord.MessageEmbed()
          .setImage(data.url)
      )
    }

    if (message.content.trim() === '.lewdholo') {
      const data = await neko.nsfw.holo()
      message.channel.send(
        new Discord.MessageEmbed()
          .setImage(data.url)
      )
    }

    if (message.content.trim() === '.eroholo') {
      const data = await neko.nsfw.holoEro()
      message.channel.send(
        new Discord.MessageEmbed()
          .setImage(data.url)
      )
    }
  })
})

client.login(process.env.TOKEN)