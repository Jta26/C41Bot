import express from 'express';
import { sendMessageToChannel } from '../discord/messaging';
const router = express.Router();

router.post('/', (req, res) => {
  if (req.body.formName != null) {
    const {
      formId,
      formName,
      formUrl,
      responseNumber,
      responseDate,
      responseUrl,
      responseId,
      submittedAt,
      discordName,
      playerJob,
      progPoint,
      haiku,
    } = req.body;
  }
  // TODO: replace this with the channel we want
  sendMessageToChannel('902767207682035773', JSON.stringify(req.body));
  res.status(200).send();
});

export default router;
