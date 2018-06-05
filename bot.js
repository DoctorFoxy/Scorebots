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
        var helpmenu = "```\nThis is the help menu for MoonBot:\n-help: Shows this menu.\n-ping: Replies pong.\n-avatar: Gives you the link to your avatar.```";
    	message.channel.send(helpmenu);
  	}   
});

client.on('message', message => {
  if (message.content === '-avatar') {
    message.reply(message.author.avatarURL);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

