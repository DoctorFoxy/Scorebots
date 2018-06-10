//______           _            ______              
//|  _  \         | |           |  ___|             
//| | | |___   ___| |_ ___  _ __| |_ _____  ___   _ 
//| | | / _ \ / __| __/ _ \| '__|  _/ _ \ \/ / | | |
//| |/ / (_) | (__| || (_) | |  | || (_) >  <| |_| |
//|___/ \___/ \___|\__\___/|_|  \_| \___/_/\_\\__, |
//                                             __/ |
//                                            |___/ 

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
    else if (com === "frank") { //FRANK COMMAND
      message.channel.send("https://cdn.discordapp.com/attachments/434028541785669653/453972807446036501/I-had-a-dream.jpg")
    }
	
	//ROCK PAPER SCISSORS:
	var sendm = "message.channel.send"
	var lose = sendm + "(\"You lost.\")", tie = sendm + "(\"Tie!\")", win = sendm + "(\"You win!\")",
	rock = sendm + "(\"ROCK!\")", paper = sendm + "(\"PAPER!\")", scissors = sendm + "(\"SCISSORS!\")";
	
	if (com === "rps") {
		var randomrps = Math.floor((Math.random() * 3) + 1);
		if (args[1] == "rock" || args[1] == "r") { //ROCK
			if (randomrps == 1) { eval(rock); eval(tie); } 
			if (randomrps == 2) { eval(paper); eval(lose); } 
			if (randomrps == 3) { eval(scissors); eval(win); } 
		}
		else if (args[1] == "paper" || args[1] == "p") { //PAPER
			if (randomrps == 1) { eval(rock); eval(win); } 
			if (randomrps == 2) { eval(paper); eval(tie); } 
			if (randomrps == 3) { eval(scissors); eval(lose); } 
		}
		else if (args[1] == "scissors" || args[1] == "s") { //SCISSORS
			if (randomrps == 1) { eval(rock); eval(lose); } 
			if (randomrps == 2) { eval(paper); eval(win); } 
			if (randomrps == 3) { eval(scissors); eval(tie); } 
		}
	}
	
	
    //NIGHTFORTUNE
    if (com === "fortune") {
      var random2 = Math.floor((Math.random() * 12) + 1);
      var easter = Math.floor((Math.random() * 120) + 1);
      if (easter == 120) {
        message.channel.send("EASTER EGG!! You found a magical fox!");
      }
      else {
        message.channel.send(reply.fortunes[String(random2)]);;
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
      message.channel.send("You rolled " + String(techs[random]) + "!\n\n" + reply.dreams[String(techs[random])]);
    }
  }
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
