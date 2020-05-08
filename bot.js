const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./package.json');



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
	console.log("Pong");
	message.channel.send("PONG!");

    }
 
   if (com === "help") {
	console.log("Helped: " + args[1]);
	const Embed = new Discord.RichEmbed()
	.setTitle("Help:")
	.setDescription("**Use the bot as following:**\n\n**!update (name) (possible comments) (attempts) (successes)**")
	.setTimestamp()
	.setFooter(message.author.username, message.author.avatarURL);
	
	 message.channel.sendEmbed(Embed)
    }
     if (com === "update") {
      var comment = "";
      var i;
      for (i = 2; i < (args.length-2); i++) {
      	comment += (args[i] + " ");
     }    
      
     if (comment == "") {
	     var temping = args[(args.length-4)]
	     if (temping.charAt(0) == "+") {
		     
	     } else {
      message.channel.send(":white_check_mark: Updated: " + args[1]);
     
      const Embed = new Discord.RichEmbed()
	.setTitle(args[1])
	.setDescription("Attempts: " + args[(args.length-2)] + "\n" + "Success: " + args[(args.length-1)] + "\n" + "Score: " + (args[(args.length-2)]*1)*(args[(args.length-1)]*1+1) + "\n**---**")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
      }
	     
      client.channels.get(`706575362125201438`).sendEmbed(Embed);
	     
	     
      } else {
      message.channel.send(":white_check_mark: Updated: " + args[1]);
	      
      const Embed = new Discord.RichEmbed()
	.setTitle(args[1])
	.setDescription("Comment: " + comment + "\n" + "Attempts: " + args[(args.length-2)] + "\n" + "Success: " + args[(args.length-1)] + "\n" + "Score: " + (args[(args.length-2)]*1)*(args[(args.length-1)]*1+1) + "\n**---**")
      	.setThumbnail(message.author.avatarURL)
        .setTimestamp()
      
      client.channels.get(`706575362125201438`).sendEmbed(Embed);
     }
      
     console.log("Updated: " + args[1]);
      
    }

  }
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
