import { Client } from 'discord.js';

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

export default {
  init,
};
