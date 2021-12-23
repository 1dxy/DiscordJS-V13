const { MessageEmbed } = require('discord.js');

module.exports = {
    name : "ping",
    category : "Information",
    description : "Returns latency and API Ping",
    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
          .setTitle("Pong!")
          .setDescription(`WebSocket ping is \`${client.ws.ping}MS\`\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
          .setColor("AQUA")
        msg.delete()
        await message.channel.send({ embeds: [embed] })
    }
}