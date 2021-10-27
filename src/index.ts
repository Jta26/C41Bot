import express from 'express';
import discordBot from './discord/bot';
import environment from './environment/env';

environment.init();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Happy Chobi Noises');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

discordBot.init();
