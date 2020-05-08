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
	message.channel.send("PONG!");
	console.log("Pong");
	    
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', message.author.avatarURL);

	message.channel.send(exampleEmbed);
    }
   
	  
     if (com === "update") {
      var comment = "(";
      var i;
      for (i = 2; i < (args.length-2); i++) {
      	comment += (args[i] + " ");
     }    
      
     if (comment == "(") {
      message.channel.send("Updated.");
      client.channels.get(`706575362125201438`).send("---\n" + message.author.avatarURL + "\n" + args[1] + ":\n" + "Attempts: " + args[(args.length-2)] + "\n" + "Success: " + args[(args.length-1)] + "\n" + "Score: " + (args[(args.length-2)]*1)*(args[(args.length-1)]*1+1) + "\n---");
      } else {
      message.channel.send("Updated.");
      client.channels.get(`706575362125201438`).send("---\n" + args[1] + ": " + comment + ")\n" + "Attempts: " + args[(args.length-2)] + "\n" + "Success: " + args[(args.length-1)] + "\n" + "Score: " + (args[(args.length-2)]*1)*(args[(args.length-1)]*1+1) + "\n---");
     }
      
     console.log("Updated: " + args[1]);
      
    }

  }
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
