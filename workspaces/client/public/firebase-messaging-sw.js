importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

console.log('===========================================');
console.log('FIREBASE SERVICE WORKER CARREGADOggggggg'); // debug info
console.log('===========================================');

firebase.initializeApp({
    apiKey: 'AIzaSyA_wtufNKl4ulAWQQuaGAh_wRWDqIFJHiQ',
    authDomain: 'push-notifications-learn-a54e4.firebaseapp.com',
    databaseURL: 'https://push-notifications-learn-a54e4-default-rtdb.firebaseio.com',
    projectId: 'push-notifications-learn-a54e4',
    storageBucket: 'push-notifications-learn-a54e4.appspot.com',
    messagingSenderId: '120721419686',
    appId: '1:120721419686:web:8cf1acf2ea40fa3f1ef367',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', payload);

    // const notificationOptions = {
    //   body,
    //   icon: icon || '/icons/firebase-logo.png', // path to your "fallback" firebase notification logo
    //   data: restPayload,
    // };

    return self.registration.showNotification('whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', { body: 'lkasdjlkdasjkldaslkjadsjkldas' });
});
