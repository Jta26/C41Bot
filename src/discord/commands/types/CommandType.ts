import { Message } from 'discord.js';
import CommandListItem from '../commandListItem';
import CommandArgsItem from '../../arguments/commandArgs';

type Command = {
  name: string;
  description: string;
  execute: (message: Message, command: CommandListItem, args: CommandArgsItem) => void;
};

export default Command;
