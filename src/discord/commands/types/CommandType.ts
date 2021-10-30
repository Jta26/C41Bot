import { Message } from 'discord.js';

type Command = {
  name: string;
  description: string;
  execute: (message: Message, args?: string[]) => void;
};

export default Command;
