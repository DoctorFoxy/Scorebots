const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { // BOT READY NOTIFICATION
  console.log('I am ready!');
});

client.on('message', message => {
  //var text = message.content;
  if (message.content === "-ping") {
    message.reply("Pong!")
  }
  
});


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
