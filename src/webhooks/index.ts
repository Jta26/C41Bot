import express from 'express';
import googleForms from './googleForms';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('test');
});

router.use('/googleForms', googleForms);

export default router;
