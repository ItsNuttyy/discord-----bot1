const twitch = require("./twitch");

module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '825057992726675526';
        const SkyBlock = message.guild.roles.cache.find(role => role.name === "SkyBlock");
        const Gamer = message.guild.roles.cache.find(role => role.name === "Gamer");
        const Twitch = message.guild.roles.cache.find(role => role.name === "Twitch");
        const Youtube = message.guild.roles.cache.find(role => role.name === "Youtube");
        const TikTok = message.guild.roles.cache.find(role => role.name === "TikTok");
        const Lonely = message.guild.roles.cache.find(role => role.name === "Lonely");
 
        const skyblockEmoji = '🏝️';
        const gamerEmoji = '🎮';
        const twitchEmoji = '📹';
        const youtubeEmoji = '▶️';
        const tiktokEmoji = '📱';
        const lonelyEmoji = '🥲';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose the roles that fit you!')
            .setDescription('Choosing a role can give you special perks!\n\n'
                + `${skyblockEmoji} If you play Hypixel Skyblock\n`
                + `${gamerEmoji} If you are an EPIC Gamer\n`
                + `${twitchEmoji} If you stream on Twitch\n`
                + `${youtubeEmoji} If you are a Youtube content creator\n`
                + `${tiktokEmoji} If you are a TikToker\n`
                + `${lonelyEmoji} If you are plain Lonely`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(skyblockEmoji);
        messageEmbed.react(gamerEmoji);
        messageEmbed.react(twitchEmoji);
        messageEmbed.react(youtubeEmoji);
        messageEmbed.react(tiktokEmoji);
        messageEmbed.react(lonelyEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === skyblockEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SkyBlock);
                }
                if (reaction.emoji.name === gamerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Gamer);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Twitch);
                }
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Youtube);
                }
                if (reaction.emoji.name === tiktokEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TikTok);
                }
                if (reaction.emoji.name === lonelyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Lonely);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === skyblockEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SkyBlock);
                }
                if (reaction.emoji.name === gamerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Gamer);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Twitch);
                }
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Youtube);
                }
                if (reaction.emoji.name === tiktokEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TikTok);
                }
                if (reaction.emoji.name === lonelyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Lonely);
                }
            } else {
                return;
            }
        });
    }
 
}