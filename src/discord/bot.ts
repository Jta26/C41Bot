import Discord from 'discord.js';
import commandHandler from './commandHandler';
import CommandListItem from './commands/commandListItem';
import messaging from './messaging';
const intents = [
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
];

const discordOptions: Discord.ClientOptions = {
  intents,
};
const client = new Discord.Client(discordOptions);

const COMMAND_PREFIX = '!';

const init = (): void => {
  client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
    commandHandler.init(client);
    messaging.init(client);
  });

  client.on('message', msg => {
    // if the message doesn't start with ! or if the message was sent by a bot, do nothing.
    if (!msg.content.startsWith(COMMAND_PREFIX) || msg.author.bot) return;
    const msgCommands = msg.content.slice(COMMAND_PREFIX.length).split(/ +/);
    let commandName: CommandListItem;
    if (Object.values(CommandListItem).some((command: string) => command === msgCommands[0].toLowerCase())) {
      commandName = <CommandListItem>msgCommands.shift().toLowerCase();
    }
    for (let i = 0; i < msgCommands.length; i++) {
      msgCommands[i] = msgCommands[i].toLowerCase();
    }
    commandHandler.execute(msg, commandName, msgCommands);
  });

  client.login(process.env.DISCORD_BOT_TOKEN);
};

export default {
  init,
};
