import express from 'express';
import googleForms from './googleForms';

const router = express.Router();

router.use('/googleForms', googleForms);

export default router;
