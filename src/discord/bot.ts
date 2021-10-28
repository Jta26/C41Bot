import Discord from 'discord.js';
import CommandArgsItem from './arguments/commandArgs';
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
    if (commandName == null) {
      return;
    }
    console.log(msgCommands);
    const msgArgs = msgCommands.map((strArg: string) => {
      if (Object.values(CommandArgsItem).some((item: string) => item === strArg.toLowerCase())) {
        const arg: CommandArgsItem = <CommandArgsItem>strArg.toLowerCase();
        return arg;
      }
    });

    commandHandler.execute(msg, commandName, msgArgs);
  });

  client.login(process.env.DISCORD_BOT_TOKEN);
};

export default {
  init,
};
