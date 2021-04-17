module.exports = {
    name: 'rules',
    description: "this is a rule command!",
    execute(message, args){
        message.channel.send('All the rules can be found in #rules');
    }
}