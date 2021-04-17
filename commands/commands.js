module.exports = {
    name: 'commands',
    description: "this is a commands command!",
    execute(message, args){
        message.channel.send('The commands are... rules, twitch, commands');
    }
}