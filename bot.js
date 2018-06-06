const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {

  if (message.content === "-ping") {
    message.reply("Pong!")
  }
  else if (message.content === "-help") {
    var helpmenu = `\`\`\`\n
    This is the help menu for MoonBot:\n
    -help: Shows this menu.\n
    -ping: Replies pong.\n
    -avatar: Gives you the link to your avatar.\n
    -techniques: Shows list of lucid dreaming techniques.\n
    Use -"technique" without the quotes to see an explanation of that tech. \`\`\``;
    message.author.sendMessage(helpmenu)
  }

});

client.login(process.env.BOT_TOKEN);
