module.exports = {
    name: 'twitch',
    description: "this is a twitch command!",
    execute(message, args){

        if (message.member.roles.cache.has('825058301564944425')){
        message.channel.send('twitch.tv/its_nuttyy')


        } else {
            message.channel.send('I seee you dont have the correct perms, let me change that :)');
            message.member.roles.add('825058301564944425').catch(console.error);
        }
    }
}