import express from 'express';
import 'dotenv/config';
import { Request, Response } from 'express';
import router from './routes';
const app = express();

app.use(express.json());

app.use('/getRes', router);

app.use('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Welcome !, I am from Backend',
    status: 200,
  });
});

export default app;
