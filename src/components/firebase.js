import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYA3bDkDS851tSuon_bNXVk4g7MeY5bL8',
  authDomain: 'rhblog-d46d1.firebaseapp.com',
  projectId: 'rhblog-d46d1',
  storageBucket: 'rhblog-d46d1.appspot.com',
  messagingSenderId: '813082959239',
  appId: '1:813082959239:web:c2e183189061cc19bb4722',
  measurementId: 'G-CXSDP6FJ42',
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
    