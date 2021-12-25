const client = require('../index')
const mongoose = require("mongoose")
const { mongo_uri } = require('../config.json')

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`)
    client.user.setActivity("This is a bot status", {type: "WATCHING"})

    if(!mongo_uri) return;
    mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("The client is now connected to MongoDB")
    }).catch((err) => {
      console.log(err)
    })
  })