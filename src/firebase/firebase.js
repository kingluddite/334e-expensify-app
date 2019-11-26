import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDUpPr5pG87V3PRpsX2VF-7QOTDsA77sv4',
  authDomain: 'expensify-5fd55.firebaseapp.com',
  databaseURL: 'https://expensify-5fd55.firebaseio.com',
  projectId: 'expensify-5fd55',
  storageBucket: 'expensify-5fd55.appspot.com',
  messagingSenderId: '369625827386',
  appId: '1:369625827386:web:9558d708af1aeeae958d03',
  measurementId: 'G-GB5GZ9SYXB',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
