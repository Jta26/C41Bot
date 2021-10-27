import { Message } from 'discord.js';
import CommandArgsItem from '../arguments/commandArgs';
import CommandListItem from './commandListItem';

export default {
  name: CommandListItem.CLEARMEPLS,
  description: 'command to get yourself a clear with The Devengers™',
  execute: (msg: Message, args: CommandArgsItem) => {
    msg.reply('chobi' + args);
  },
};
