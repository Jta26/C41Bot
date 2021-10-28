import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
});

export default router;
