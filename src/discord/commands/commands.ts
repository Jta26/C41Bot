import CommandListItem from './commandListItem';
import clearmepls from './clearmepls';
import summon from './summon';

const commands = {};

commands[CommandListItem.CLEARMEPLS] = clearmepls;
commands[CommandListItem.SUMMON] = summon;

console.log(commands);
export default commands;
