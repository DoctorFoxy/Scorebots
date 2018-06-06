const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {

  if (message.content === "-ping") { //PING-PONG
    message.reply("Pong!")
  }
  else if (message.content === "-help") { //HELP MENU
    var helpmenu = `\`\`\`\n
    This is the help menu for MoonBot:
    ==================================
    -help: Shows this menu.
    -ping: Replies pong.
    -avatar: Gives you the link to your avatar.
    -techniques: Shows list of lucid dreaming techniques.
    Use -"technique" without the quotes to see an explanation of that tech. \`\`\``;
    message.author.sendMessage(helpmenu)
  }
  else if (message.content === "-avatar") { //SHOW AVATAR
    message.reply(message.author.avatarURL);
  }
  var content = message.content;
  else if (content === "-techniques" || content === "-techs" || content === "-tech") { //SHOW ALL TECHS
    var techs = "```wild, fild, mild, rc, wbtb, deild, dild```"
    message.channel.send(techs);
  }




});

//LOGIN
client.login(process.env.BOT_TOKEN);
