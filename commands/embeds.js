module.exports = {
    name: 'embeds',
    description: "this is a embeds command!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#002600')
        .setTitle('Rules')
        .setURL('https://twitch.tv/its_nuttyy')
        .setDescription('These are the servers rules')
        .addFields(
            {name: 'Rule 1' , value: 'Be Respectful---This is NOT a place to argue. Don’t be toxic and harass people'},
            {name: 'Rule 2' , value: 'Language---Please only use English in this Discord. If you want to talk to someone in another language, please direct message them.'},
            {name: 'Rule 3' , value: 'Spamming---Spam is not permitted anywhere in this Discord, including text and voice channels. Spam also includes, but is not limited to, playing music/loud noises through your microphone.'},
            {name: 'Rule 4' , value: 'Prohibited Content---Any images/links that would be considered NSFW are not allowed'},
            {name: 'Rule 5' , value: 'Impersonation---Do not impersonate any users in this server. (Including YouTubers, Streamers, Celebrities, etc.)'},
            {name: 'Rule 6' , value: 'Promoting / Advertising---Any type of YouTube channel promoting must be sent only in the #self-promotion channel. Promotion includes, but is not limited to, YouTube channels, Twitters, Instagram, Selling Accounts, Check Out My "X", etc. Do not use URL shorteners / hyperlinks.'},
            {name: 'Rule 7' , value: 'Final Say---Respect Nuttyy and any other mods/admin that are in the server. If you have a problem don’t be afraid to DM me or one of the mods. Assume that not following these rules will get you kicked / banned. Do not do anything that would likewise break the Discord TOS.'},
        )
        .setImage('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
        .setFooter('These rules are FINAL');

        message.channel.send(newEmbed);
    }

}