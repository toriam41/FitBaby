import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDrpOagsUMDMwTZpcRCDcM22bLlClsb9Ns',
    authDomain: 'fitbaby-fc5eb.firebaseapp.com',
    databaseURL: 'https://fitbaby-fc5eb-default-rtdb.firebaseio.com',
    projectId: 'fitbaby-fc5eb',
    storageBucket: 'fitbaby-fc5eb.appspot.com',
    messagingSenderId: '764310667268',
    appId: "1:764310667268:android:da75a5f227af2aaa69b551"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };