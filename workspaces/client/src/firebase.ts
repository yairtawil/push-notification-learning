import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';
import config from './config/config';

const app = initializeApp(config.firebaseConfig);

export const messaging = getMessaging(app);

onMessage(messaging, payload => {
    console.log('Message received. ', payload);
});
