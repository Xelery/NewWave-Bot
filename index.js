const Discord = require('discord.js')
const bot = new Discord.Client()
const token = require('./token.json')


client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on('error', console.error);

bot.login(process.env.token);