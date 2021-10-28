import { Message } from 'discord.js';
import CommandArgsItem from '../../arguments/commandArgs';

type Command = {
  name: string;
  description: string;
  execute: (message: Message, args: CommandArgsItem[]) => void;
};

export default Command;
