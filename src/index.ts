import express from 'express';
const router = express.Router();
import discordBot from './discord/bot';
import environment from './environment/env';

import webhooks from './webhooks/';

import bodyParser from 'body-parser';

environment.init();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Happy Chobi Noises');
});

router.use('/hooks', webhooks);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

discordBot.init();
