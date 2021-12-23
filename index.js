const { Client } = require('discord.js'); // Importing the Objects from discord.js into our code.
const client = new Client({intents: 3}); // Creating our client with intents. Intent Calculator: https://ziad87.net/intents/

const config = require('./config.json'); // Importing our data from our config.json to our code.

client.once('ready', () => { // Creating an event so we know when the bot is ready.
    console.log(`${client.user.username} is now online!`) // Logs the bots user name is now online when it is online completely.
    client.user.setActivity("This is the Bot Status", {type: "WATCHING"}) // Setting the status of our bot: Type could be competing, watching, streaming, listening, and playing.
})


client.login(config.token) // Login your bot with your BOT_TOKEN in our file config.json
