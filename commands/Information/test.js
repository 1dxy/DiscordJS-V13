module.exports = {
    name : "test",
    category : "Information",
    description : "Test Command",
    run : async(client, message, args) => {
        message.channel.send("This is a test commnad!")
    }
}