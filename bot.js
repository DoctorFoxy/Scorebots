const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { // BOT READY NOTIFICATION
    console.log('I am ready!');
});

client.on('message', message => { //PING - PONG
    if (message.content === '-ping') {
    	message.reply('pong');
  	}   
});

client.on('message', message => { //HELP MENU
    if (message.content === '-help') {
        var helpmenu = "```\nThis is the help menu for MoonBot:\n-help: Shows this menu.\n-ping: Replies pong.\n-avatar: Gives you the link to your avatar.\n-techniques: Shows list of lucid dreaming techniques.\nUse -\"technique\" without the quotes to see an explanation of that tech. ```";
    	message.author.sendMessage(helpmenu)
  	}   
});

client.on('message', message => { // AVATAR COMMAND
  if (message.content === '-avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => { //TECHNIQUES COMMAND
  if (message.content === '-techniques') {
      var techs = "```wild, fild, mild, rc, wbtb, deild, dild```"
      message.channel.send(techs);
  }
});

client.on('message', message => { //TECHNIQUES COMMAND
  if (message.content === '-techs') {
      var techs = "```wild, fild, mild, rc, wbtb, deild, dild```"
      message.channel.send(techs);
  }
});

client.on('message', message => { // WILD
  if (message.content === '-wild') {
      message.channel.send("Wake Induced Lucid Dream: A technique where you maintain consciousness/awareness while your body falls asleep.");
  }
});

client.on('message', message => { // FILD
  if (message.content === '-fild') {
      message.channel.send("Finger Induced Lucid Dream: Similar to a WILD but you use finger motions to preserve your conscious/awareness as you fall asleep.");
  }
});

client.on('message', message => { // MILD
  if (message.content === '-mild') {
      message.channel.send("Mnemonically Induced Lucid Dream: MILD is using prospective memory to get lucid. MILD can involve telling yourself to remember being in a dream when in a dream and the process can be used along with visualization of getting lucid inside a dream.");
  }
});

client.on('message', message => { // RC
  if (message.content === '-rc') {
      message.channel.send("Reality Check: A test to establish whether you are in a dream or waking life, can be actively done during the day in hopes that the habit will continue within dreams.");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


