const { Client } = require('discord.js');
const client = new Client({intents: 3});

const config = require('./config.json');

client.once('ready', () => {
    console.log(`${client.user.username} is now online!`)
    client.user.setActivity("This is the Bot Status", {type: "WATCHING"}) // Type could be competing, watching, streaming, listening, and playing.
})


client.login(config.token)
