
import express from 'express';
import { tempRouter } from '../controllers/temp.controller.js';
import {status} from "../../config/reponse.status.js";

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

app.use('/health', healthRoute);

app.get('/', (req, res, next) => {
  res.send(response(status.SUCCESS, "루트 페이지!"));
})

// error handling
app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});