const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { // BOT READY NOTIFICATION
  console.log("I am ready!");
});

client.on("message", message => {
  text = message.content;
  if (text[0] === "-"); 
  {
    //COMMANDS
    if (message.content === "-ping") { //PING-PONG
      message.reply("Pong!")
    }
    else if (message.content === "-help") { //HELP MENU
      var helpmenu = `\`\`\`fix\n
      This is the help menu for MoonBot:
      ==================================
      -help: Shows this menu.
      -ping: Replies pong.
      -avatar: Gives you the link to your avatar.
      -techniques: Shows list of lucid dreaming techniques.
      Use -"technique" without the quotes to see an explanation of that tech.
      -randomtech: Gives you a random tech that you can try out.
      -fortune: Tells you a fortune of your upcomming night.
      -version: Check current version of the bot.
      -frank: Gives you an overview of Franks life.\`\`\``;
      message.author.sendMessage(helpmenu)
    }
    else if (message.content === "-avatar") { //SHOW AVATAR
      message.channel.send(message.author.avatarURL);
    }
    else if (message.content === "-techniques" || message.content === "-techs" || message.content === "-tech") { //SHOW ALL TECHS
      message.channel.send("```wild, fild, mild, rc, wbtb, deild, dild```");
    }
    else if (message.content === "-frank") {
      message.channel.send("https://cdn.discordapp.com/attachments/434028541785669653/453972807446036501/I-had-a-dream.jpg")
    }
  
    //NIGHTFORTUNE
    var fortune = ["You will have a very vivid dream tonight.", "A creepy nightmare awaits you.", "You will have an LD!",
                  "You will sleep very deep and well tonight.", "You will struggle to fall asleep.", "You wont have any dream tonight ;(",
                  "A crazy dream awaits you.", "Nothing better than waking uping refreshed.", "A boring night awaits you.", "You will wake up having to pee...",
                  "Golden ticket: The next technique you try will work 100%!!", "You will talk to a dragon in your dream."];
  
    if (message.content === "-fortune") {
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
    else if (message.content === "-version") {
      var pjson = require('./package.json');
      message.channel.send("``MoonBot, created by DoctorFoxy\nVersion: " + pjson.version + "``");
    }
  
    //TECHS
    var wild = "Wake Induced Lucid Dream: A technique where you maintain consciousness/awareness while your body falls asleep.",
    fild = "Finger Induced Lucid Dream: Similar to a WILD but you use finger motions to preserve your conscious/awareness as you fall asleep.",
    mild = `Mnemonically Induced Lucid Dream: MILD is using prospective memory to get lucid.
MILD can involve telling yourself to remember being in a dream when in a dream and the process can be used along with visualization of getting lucid inside a dream.`,
    rc = "Reality Check: A test to establish whether you are in a dream or waking life, can be actively done during the day in hopes that the habit will continue within dreams.",
    wbtb = "Wake Back To Bed: Waking up for a couple of minutes, then going back to bed increases the chances of lucid dreaming. Use that time to read about lucid dreaming or plan your dreams.",
    deild = "Dream-Exit Induced Lucid Dream: Waking up from a dream and then falling back asleep to re-enter it.",
    dild = "Dream Initiated Lucid Dream: Realize you are dreaming from within a dream.";
  
    var technames = ["wild", "fild", "mild", "rc", "wbtb", "deild", "dild"];
    var techs = [wild, fild, mild, rc, wbtb, deild, dild];
    var techlength = techs.length;
    var i;
    for (i = 0; i < techlength; i++) {
      if (message.content === ("-" + technames[i])) {
        message.channel.send(techs[i]);
        break;
      }
  
    }
  
    //RANDOM TECH
    if (message.content === "-randomtech") {
      var random = Math.floor((Math.random() * techs.length) + 1);
      message.channel.send("You rolled " + technames[random] + "!\n\n" + techs[random]);
    }
  }
  



});

//LOGIN
client.login(process.env.BOT_TOKEN);
