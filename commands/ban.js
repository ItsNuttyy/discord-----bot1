module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")){ 
            message.channel.send("You don't have perms!");
        }
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }
    }
}