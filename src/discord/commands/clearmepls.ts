import { Message } from 'discord.js';
import CommandArgsItem from '../arguments/commandArgs';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const command: Command = {
  name: CommandListItem.CLEARMEPLS,
  description: 'command to get yourself a clear with The Devengers™',
  execute: (msg: Message, args: CommandArgsItem[]) => {
    const author = encodeURIComponent(msg.author.tag);
    const formLink =
      'https://docs.google.com/forms/d/e/1FAIpQLScSLrhgP-rduTAe0SBCX3MliVEh34GmFC_V7FeyVvkrmjFMgg/viewform?usp=pp_url&entry.214205102=' +
      author;
    if (args.length < 1) {
      msg.reply('Info Needed: Missing fight selection. Please input UWU|UCoB after the command.');
    }
    if (args.includes(CommandArgsItem.UWU)) {
      msg.author.send('To sign up to have The Devengers help you clear UWU, please fill out the following form.');
      msg.author.send(formLink);
    } else if (args.includes(CommandArgsItem.UCOB)) {
      msg.author.send('To sign up to have The Devengers help you clear UCoB, please fill out the following form.');
      msg.author.send(formLink);
    } else {
      msg.reply('Sorry, something went wrong.');
    }
  },
};
export default command;
