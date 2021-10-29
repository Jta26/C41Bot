import { Client, DiscordAPIError, MessageEmbed } from 'discord.js';
import { ClearForOneGoogleFormBody } from '../webhooks/googleForms';

let discordClient: Client;

const init = (client: Client) => {
  discordClient = client;
};

export const sendMessageToChannel = (channelId: string, message: string) => {
  const channel = discordClient.channels.cache.get(channelId);
  if (channel.isText()) {
    channel.send(message);
  }
};

export const sendClearForOneEmbed = (channelId: string, content: ClearForOneGoogleFormBody) => {
  const embed = new MessageEmbed()
    .setTitle(content.discordName)
    .setAuthor('New Clear For One Request')
    .setColor('#00ab66')
    .addFields(
      { name: 'Player Job', value: content.playerJob },
      { name: 'Prog Point', value: content.progPoint },
      { name: 'Original Haiku', value: content.haiku },
    );
  const channel = discordClient.channels.cache.get(channelId);
  if (channel.isText()) {
    channel.send({ embeds: [embed] });
  }
};

export default {
  init,
};
