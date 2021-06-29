const Discord = require('discord.js')
const bot = new Discord.Client()
const token = require('./token.json')


client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on('error', console.error);

bot.login("ODUyNTM4NTc1MDM0NTE1NDg2.YMISaw.IM8edNBqkWkiRv2Z3mvrYu9JCaQ");
