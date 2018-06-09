const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./package.json');
const reply = require('./messages.json');

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {
  if(message.author.bot) return;
  var text = message.content;
  var prefix = config.prefix;
  
  if (text[0] === prefix)
  {
    const args = message.content.slice(prefix.length).trim().split(" ");
    var com = args[0]
	
    //COMMANDS
    if (com === "ping") { //PING-PONG
      message.reply("Pong!");
    }
    else if (com === "help") { //HELP MENU
      message.author.sendMessage(reply.help);
    }
    else if (com === "avatar") { //SHOW AVATAR
      message.channel.send(message.author.avatarURL);
    }
    else if (com === "techniques" || com === "techs" || com === "tech") { //SHOW ALL TECHS
      message.channel.send("```wild, fild, mild, rc, wbtb, deild, dild```");
    }
    else if (com === "frank") {
      message.channel.send("https://cdn.discordapp.com/attachments/434028541785669653/453972807446036501/I-had-a-dream.jpg")
    }
  
    //NIGHTFORTUNE
    var fortune = ["You will have a very vivid dream tonight.", "A creepy nightmare awaits you.", "You will have an LD!",
                  "You will sleep very deep and well tonight.", "You will struggle to fall asleep.", "You wont have any dream tonight ;(",
                  "A crazy dream awaits you.", "Nothing better than waking uping refreshed.", "A boring night awaits you.", "You will wake up having to pee...",
                  "Golden ticket: The next technique you try will work 100%!!", "You will talk to a dragon in your dream."];
  
    if (com === "fortune") {
      var random2 = Math.floor((Math.random() * 12) + 1);
      var easter = Math.floor((Math.random() * 120) + 1);
      if (easter == 120) {
        message.channel.send("EASTER EGG!! You found a magical fox!");
      }
      else {
        message.channel.send(fortune[random2]);
      }
    //REQUEST BOT VERSION
    }
    else if (com === "version") {
      message.channel.send("``MoonBot, created by DoctorFoxy\nVersion: " + config.version + "``");
    }
	
	//TECHS
	var techs = ["wild", "fild", "mild", "rc", "wbtb", "deild", "dild"];
	var x;
	var length = techs.length;
	for (x = 0; x < length; x++) {
	  if (com === String(techs[x])) {
		  message.channel.send(eval("reply.dreams." + String(techs[x])));
	  }
	}
	
    //RANDOM TECH
    if (com === "randomtech") {
      let random = Math.floor((Math.random() * techs.length) + 1);
      message.channel.send("You rolled " + String(techs[random]) + "!\n\n" + eval("reply.dreams." + String(techs[random])));
    }
  }
  



});

//LOGIN
client.login("NDUzNTgwNjk3MjM2NDA2Mjky.Dfg9ww.fxMlFpTfOPSRp-HgpTDcn3n7OMM");
