const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});
client.on('message', message => {
    
    if (message.content === 'help') {
    	message.reply('type ping');
        message.reply('type bing');
        message.reply('type help!');
        message.reply('type avatar :new:');
  	}
});
client.on('message', message => {
    if(message.content === 'avatar'){
        message.reply("Here is ur avatar " + message.author.avatarURL); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
