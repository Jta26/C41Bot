import { Client, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { ClearForOneGoogleFormBody } from '../webhooks/googleForms';
import { XIVPlayerJob } from '../XIV/xivPlayerJob';

let discordClient: Client;

const init = (client: Client) => {
  discordClient = client;
  sendTestEmbed();
  discordClient.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId == 'MarkCleared') {
      const playerName = interaction.message.embeds[0].title;
      const ultimate = interaction.message.embeds[0].fields[1].value;
      await interaction.update({
        content: `Successfully marked ${playerName} cleared in ${ultimate}.`,
        embeds: [],
        components: [],
      });
    } else if (interaction.customId == 'Remove') {
      await interaction.update({
        content: 'Removed',
        embeds: [],
        components: [],
      });
      setTimeout(async () => {
        const msg = await interaction.channel.messages.fetch(interaction.message.id);
        msg.delete();
      }, 3000);
    }
  });
};

const sendTestEmbed = () => {
  const content: ClearForOneGoogleFormBody = {
    discordName: 'TestUser#1234',
    ultimate: 'UWU',
    playerJob: XIVPlayerJob.AST,
    progPoint: 'Inception',
    daysAvailable: 'Monday, Wednesday, Friday',
    haiku: 'I dont wanna',
  };
  sendClearForOneEmbed('902767207682035773', content);
};

export const sendMessageToChannel = (channelId: string, message: string) => {
  const channel = discordClient.channels.cache.get(channelId);
  if (channel.isText()) {
    channel.send(message);
  }
};

export const sendClearForOneEmbed = (channelId: string, content: ClearForOneGoogleFormBody) => {
  let thumbnail;
  if (content.ultimate == 'TEA') {
    thumbnail =
      'https://static.wikia.nocookie.net/finalfantasy/images/f/f2/FFXIV_Perfect_Alexander.png/revision/latest?cb=20200121073242';
  } else if (content.ultimate == 'UCoB') {
    thumbnail =
      'https://static.wikia.nocookie.net/finalfantasy/images/4/45/FFXIV_Golden_Baha.png/revision/latest?cb=20191026082330';
  } else {
    thumbnail =
      'https://static.wikia.nocookie.net/finalfantasy/images/6/6c/FFXIV_Shiny_Ultima.png/revision/latest?cb=20191107213031';
  }
  const embed = new MessageEmbed()
    .setTitle(content.discordName)
    .setAuthor('New C41 Request')
    .setColor('#00ab66')
    .setImage(thumbnail)
    .addFields([
      { name: 'Player Job', value: content.playerJob },
      { name: 'Requested Fight', value: content.ultimate, inline: true },
      { name: 'Prog Point', value: content.progPoint, inline: true },
      { name: 'Days Available', value: content.daysAvailable },
      { name: 'Original Haiku', value: content.haiku },
    ])
    .setFooter('To view all current c41s, use !c41 (!c41 [ultimate] for a specific fight)');
  const buttonGroup = new MessageActionRow().addComponents(
    new MessageButton().setCustomId('MarkCleared').setLabel('Mark Cleared').setStyle('SUCCESS'),
    new MessageButton().setCustomId('Remove').setLabel('Remove').setStyle('DANGER'),
  );
  const channel = discordClient.channels.cache.get(channelId);
  if (channel.isText()) {
    channel.send({ embeds: [embed], components: [buttonGroup] });
  }
};

export default {
  init,
};
