import Discord from 'discord.js';

const intents = [
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
];

const discordOptions: Discord.ClientOptions = {
  intents,
};
const client = new Discord.Client(discordOptions);

const init = (): void => {
  client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
  });

  client.on('message', msg => {
    console.log(msg);
    if (msg.content == '!c41') {
      msg.reply('chobi');
    }
  });
  client.login(process.env.DISCORD_BOT_TOKEN);
};

export default {
  init,
};
