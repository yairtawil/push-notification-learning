import * as admin from 'firebase-admin/lib/app';
import config from '../config';
import { getMessaging } from 'firebase-admin/messaging';

let messaging, app;

export const initFirebase = () => {
  app = admin.initializeApp({
    credential: admin.cert({
      privateKey: config.serviceAccount.private_key,
      projectId: config.serviceAccount.project_id,
      clientEmail: config.serviceAccount.client_email,
    }),
    databaseURL: 'https://push-notifications-learn-a54e4-default-rtdb.firebaseio.com',
  });

  messaging = getMessaging(app);
};

export default {
  messaging,
  app,
};
