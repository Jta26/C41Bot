import { Message } from 'discord.js';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const command: Command = {
  name: CommandListItem.CLEARMEPLS,
  description: 'command to get yourself a clear with The Devengers™',
  execute: (msg: Message, args: string[]) => {
    const author = encodeURIComponent(msg.author.tag);
    const formLink =
      'https://docs.google.com/forms/d/e/1FAIpQLScSLrhgP-rduTAe0SBCX3MliVEh34GmFC_V7FeyVvkrmjFMgg/viewform?usp=pp_url&entry.214205102=' +
      author;
    msg.author.send(
      'To sign up to have The Devengers help you clear an ultimate, please fill out the following form. \n' + formLink,
    );
  },
};
export default command;
