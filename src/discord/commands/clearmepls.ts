import { Message } from 'discord.js';
import CommandArgsItem from '../arguments/commandArgs';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const command: Command = {
  name: CommandListItem.CLEARMEPLS,
  description: 'command to get yourself a clear with The Devengers™',
  execute: (msg: Message, args: CommandArgsItem[]) => {
    if (args.length < 1) {
      msg.reply('Info Needed: Missing fight selection. Please input UWU|UCoB after the command.');
    }
    if (args.includes(CommandArgsItem.UWU)) {
      msg.author.send('To sign up to have The Devengers help you clear UWU, please fill out the following form.');
      msg.author.send('https://forms.gle/ymeMrXEo3ZGQpgUf9');
    }
    if (args.includes(CommandArgsItem.UCOB)) {
      msg.author.send('To sign up to have The Devengers help you clear UCoB, please fill out the following form.');
      msg.author.send('https://forms.gle/ymeMrXEo3ZGQpgUf9');
    }
  },
};
export default command;
