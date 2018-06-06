const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {

  if (message.content === "-ping") {
    message.reply("Pong!")
  }
  else if {

  }
  else {
    message.channel.send("This is an invalid command.")
  }

});

client.login(process.env.BOT_TOKEN);
