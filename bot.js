const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {
  var text = str.toLowerCase(message.content);
  if (text === "-ping") {
    message.reply("Pong!")
  }

});

client.login(process.env.BOT_TOKEN);
