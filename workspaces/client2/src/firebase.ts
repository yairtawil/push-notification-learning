// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyAURjaaAyJJjiYh_zU_2yzagW-f7jMUk0w',
    authDomain: 'push-notifications-learning.firebaseapp.com',
    projectId: 'push-notifications-learning',
    storageBucket: 'push-notifications-learning.appspot.com',
    messagingSenderId: '169056957626',
    appId: '1:169056957626:web:15b4e822c589d319c8fe83',
    measurementId: 'G-CPHYP5S4MS'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
