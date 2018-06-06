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
  else if (message.content === "-techniques" || message.content === "-techs" || message.content === "-tech") { //SHOW ALL TECHS
    var techs = "```wild, fild, mild, rc, wbtb, deild, dild```"
    message.channel.send(techs);
  }

  //TECHS
  var wild = "Wake Induced Lucid Dream: A technique where you maintain consciousness/awareness while your body falls asleep.",
  fild = "Finger Induced Lucid Dream: Similar to a WILD but you use finger motions to preserve your conscious/awareness as you fall asleep.",
  mild = `Mnemonically Induced Lucid Dream: MILD is using prospective memory to get lucid.
  MILD can involve telling yourself to remember being in a dream when in a dream and the process can be used along with visualization of getting lucid inside a dream.`,
  rc = "Reality Check: A test to establish whether you are in a dream or waking life, can be actively done during the day in hopes that the habit will continue within dreams.",
  wbtb = "",
  deild = "",
  dild = "";

  else if (message.content === "-wild" || message.content === "-WILD") {

  }




});

//LOGIN
client.login(process.env.BOT_TOKEN);
