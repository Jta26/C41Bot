import { Message } from 'discord.js';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const command: Command = {
  name: CommandListItem.NOTFOUND,
  description: 'get a random chobi-quote from Robo-Chobi',
  execute: (msg: Message) => {
    let response = 'command not found, Available Commands are: \n';
    for (const c of Object.values(CommandListItem)) {
      response += `!${c}\n`;
    }
    msg.reply(response);
  },
};
export default command;
