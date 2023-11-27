
import express from 'express';
import { tempRouter } from '../controllers/temp.controller.js';

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});