const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) => {

    

    if(message.content == 'ping') {
        // message.reply('pong');
        message.channel.sendMessage('pong');
    }

    

});

bot.login('NDc3NDIwMjAzOTMyNzc4NTAz.DvF2HA.9mAqW20vw5cNiUo_v_V-kRGZ7c0');
