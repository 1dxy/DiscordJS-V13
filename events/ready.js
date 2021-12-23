const client = require('../index')

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`)
    client.user.setActivity("This is a bot status", {type: "WATCHING"})
  })