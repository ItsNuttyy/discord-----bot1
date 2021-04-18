module.exports = {
    name: 'kick',
    description: "This command bans a member!",
    execute(message, args){
        if(!message.member.hasPermission("KICK_MEMBERS")){ 
            message.channel.send("You don't have perms!");
        }
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }
    }
}