import { Message } from 'discord.js';
import CommandArgsItem from '../arguments/commandArgs';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const command: Command = {
  name: CommandListItem.SUMMON,
  description: 'get a random chobi-quote from Robo-Chobi',
  execute: (msg: Message, args: CommandArgsItem[]) => {
    let response = 'command not found, Available Commands are: \n';
    for (const c of Object.values(CommandListItem)) {
      response += `!${c}\n`;
    }
    msg.reply(response);
  },
};
export default command;
