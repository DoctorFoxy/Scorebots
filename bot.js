const Discord = require("discord.js");
const client = new Discord.Client();
//const config = require('./package.json');

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {
  prefix = "-";
  var text = message.content;
  
  if (text[0] === prefix)
  {
    const args = message.content.slice(prefix.length).trim().split(" ");
    
    //COMMANDS
    if (args[0] === "ping") { //PING-PONG
      message.reply("Pong!");
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
