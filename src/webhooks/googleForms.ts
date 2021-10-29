import express from 'express';
import { sendClearForOneEmbed, sendMessageToChannel } from '../discord/messaging';
import { XIVPlayerJob } from '../XIV/xivPlayerJob';
const router = express.Router();

export type ClearForOneGoogleFormBody = {
  discordName: string;
  playerJob: XIVPlayerJob;
  progPoint: string;
  haiku: string;
};

router.post('/', (req, res) => {
  if (req.body != null || req.body != {}) {
    const body = req.body;
    try {
      const formInfo: ClearForOneGoogleFormBody = {
        discordName: body['What is your discord name?'],
        playerJob: XIVPlayerJob[body['What job do you play?']],
        progPoint: body['What is your current prog point?'],
        haiku: body['Please enter an original Haiku poem'],
      };
      // TODO: replace this with the channel we want
      sendClearForOneEmbed('902767207682035773', formInfo);
      res.status(200).json({ message: 'success' });
    } catch {
      res.status(300).json({ message: 'failed' });
    }
  }
});

export default router;
