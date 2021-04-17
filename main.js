const Discord = require('discord.js');
 
const client = new Discord.Client();

const config = require('./package.json')
 
const prefix = '>';

const fs = require('fs');
 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Nuttyy is online!');
});
 
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
    } else if (command === 'rules'){
        client.commands.get('rules').execute(message, args);
    } else if (command === 'commands'){
        client.commands.get('commands').execute(message, args);
    }
});

client.login('ODMzMDI4Mjg1NjUwNjk4Mjkw.YHsYDA._NrNSgyVtEUZGKdrcV7sefyGlxM');