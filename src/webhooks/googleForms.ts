import express from 'express';
import { sendClearForOneEmbed } from '../discord/messaging';
import { XIVPlayerJob } from '../XIV/xivPlayerJob';
const router = express.Router();

export type ClearForOneGoogleFormBody = {
  discordName: string;
  ultimate: string;
  playerJob: XIVPlayerJob;
  progPoint: string;
  daysAvailable: string;
  haiku: string;
};

router.post('/', (req, res) => {
  if (req.body != null || req.body != {}) {
    const body = req.body;
    try {
      const formInfo: ClearForOneGoogleFormBody = {
        discordName: body['What is your discord name?'],
        ultimate: body['Which ultimate do you need help clearing?'],
        playerJob: XIVPlayerJob[body['What job do you play?']],
        progPoint: body['What is your current prog point?'],
        daysAvailable:
          body['What days are you available in the evening? We usually can fill groups between 3PM to 12PM PST.'].join(
            ', ',
          ),
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
