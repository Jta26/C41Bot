import { Client, Message } from 'discord.js';
import CommandArgsItem from './arguments/commandArgs';
import CommandListItem from './commands/commandListItem';

import commands from './commands/commands';

let discordClient: Client;

const init = (client: Client) => {
  discordClient = client;
};

const execute = (message: Message, commandName: CommandListItem, args: CommandArgsItem[]) => {
  console.log(commandName);
  if (commands[commandName] == null) {
    commands[CommandListItem.NOTFOUND].execute(message, args);
  } else {
    commands[commandName].execute(message, args);
  }
};

export default {
  init,
  execute,
};
