const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const config = require('./package.json')
 
const prefix = '-';

const fs = require('fs');

const memberCounter = require ('./counters/member-counter');
 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Nuttyy is online!');
    memberCounter(client);
});

client.on("guildMemberAdd", guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('825051074783608853').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules text channel!`)
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
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command === 'embeds'){
        client.commands.get('embeds').execute(message, args, Discord);
    } else if (command === 'cc'){
        client.commands.get('cc').execute(message, args);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args, Discord);
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

client.login('ODMzMDI4Mjg1NjUwNjk4Mjkw.YHsYDA._NrNSgyVtEUZGKdrcV7sefyGlxM');