import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDrpOagsUMDMwTZpcRCDcM22bLlClsb9Ns',
  authDomain: 'fitbaby-fc5eb.firebaseapp.com',
  databaseURL: 'https://fitbaby-fc5eb-default-rtdb.firebaseio.com',
  projectId: 'fitbaby-fc5eb',
  storageBucket: 'fitbaby-fc5eb.appspot.com',
  messagingSenderId: '764310667268',
  appId: '1:764310667268:android:da75a5f227af2aaa69b551',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export {auth};

/*const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
export {app, db, auth};*/
