import CommandListItem from './commandListItem';
import clearmepls from './clearmepls';
import summon from './summon';
import notfound from './notfound';
const commands = {};

commands[CommandListItem.CLEARMEPLS] = clearmepls;
commands[CommandListItem.SUMMON] = summon;
commands[CommandListItem.NOTFOUND] = notfound;

console.log(commands);
export default commands;
