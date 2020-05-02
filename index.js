const Discord = require('discord.js')
const NekoClient = require('nekos.life')

const client = new Discord.Client()
const neko = new NekoClient()

const iLoveHolo = [
  'love you holo',
  'i love you holo',
  'love u holo',
  'i love u holo',
  'i love you, holo',
  'i love u, holo',
]

client.once('ready', () => {
  console.log('Holo is ready!')

  client.on('message', async message => {
    // I love you holo
    if (iLoveHolo.includes(message.content.trim())) {
      message.reply('I love you too.')
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