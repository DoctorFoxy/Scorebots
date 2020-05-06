const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./package.json');
const reply = require('./messages.json');
const urban = require("relevant-urban");

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {
  if(message.author.bot) return;
  var text = message.content;
  var prefix = config.prefix;
  
  //Actual commands ahead
  if (text[(prefix.length) - 1] === prefix)
  {
    const args = message.content.slice(prefix.length).trim().split(" ");
    var com = args[0];
	
    //COMMANDS
    if (com === "ping") {
      message.channel.send("PONG!");
      console.log("Pong");

    }
	  
    if (com === "update") {
      message.channel.send("Updated.");
      client.channels.get(`706575362125201438`).send("---\n" + args[1] + ":\n" + "Attempts: " + args[(args.length-2)] + "\n" + "Success: " + args[(args.length-1)] + "\n" + "Score: " + (args[2]*1)*(args[3]*1+1) + "\n---");
      console.log("Updated:" + args[1]);
    }

  }
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
