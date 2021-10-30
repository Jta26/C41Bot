import { Message } from 'discord.js';
import CommandListItem from './commandListItem';
import Command from './types/CommandType';

const CHOBIQUOTES = [
  'yeah, yeah, whatever you say dude.',
  "You're just jealous.",
  "Why is it that whenever I tune into your stream you're always at garuda?",
  "Why is it that whenever I tune into your stream you're always at twin?",
  "you're all retarded",
  'hey how bout you stfu',
  'hee hee ha HEE HEE haa hee HEE',
  'fuck you dude',
  'can you help me find the b marker?',
  'Yooo what is that debuff you got',
  'CHEIN STRATEGEM',
];

const command: Command = {
  name: CommandListItem.SUMMON,
  description: 'get a random chobi-quote from Robo-Chobi',
  execute: (msg: Message, args: string[]) => {
    const randomQuote = CHOBIQUOTES[Math.floor(Math.random() * CHOBIQUOTES.length)];
    msg.reply(randomQuote);
  },
};
export default command;
