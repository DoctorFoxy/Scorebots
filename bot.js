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
        var helpmenu = "```
        This is the help menu for MoonBot:
        -help: Shows this menu.
        -ping: Replies pong.
        
        
        
                        ```";
        
    	message.channel.send(helpmenu);
  	}   
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

