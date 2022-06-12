import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import * as admin from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import { initFirebase } from './services/firebase';
import { messaging } from 'firebase-admin';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  messaging().send({
    token: req.body.token,
    notification: {
      title: 'yair tawil',
      body: 'yair tawil body',
    },
  });

  res.send({ message: 'ok' });
});

app.listen(config.port, () => {
  console.log(`server running at: http://localhost:${config.port}`);
  initFirebase();
});
